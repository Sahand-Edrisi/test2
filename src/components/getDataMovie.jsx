import { useState, useEffect } from "react";
import axios from "axios";
import MoviesShow from "./MoviesShow";
import { Link } from "react-router-dom";
// import Movie from "./movie";

const GetDataMovie = () => {
  const [Movies, setMovieData] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=dark").then((res) => {
      return data(res);
    });
    async function data(res) {
      const response = await axios.get(res.url);
      setMovieData(response.data);
    }
  }, []);
  async function search() {
    let url = "https://api.tvmaze.com/search/shows?q=";
    let input = document.getElementById("search");
    let finalUrl = (url += input.value);
    input.value = "";
    const response = await axios.get(`${finalUrl}`);
    setMovieData(response.data);
    console.log(response);
  }

  let data = Movies.map((f, index) => ({
    name: f.show.name,
    image: f.show.image ? f.show.image.medium : undefined,
    imageOriginal: f.show.image ? f.show.image.original : undefined,
    genres: f.show.genres.join(","),
    visitSite: f.show.url,
    officialSite: f.show.officialSite,
    language: f.show.language,
    rating: f.show.rating.average,
    summary: f.show.summary ? f.show.summary : undefined,
    id: index,
  }));

  return (
    <>
      <div className="search-box">
        <input id="search" type="text" />
        <Link className="btnSearchLink" to={"/test2"}>
          <button className="btnSearch" onClick={search}>
            search
          </button>
        </Link>
      </div>
      <div id="MoviesShow">
        {data.map((i, index) => (
          <MoviesShow
            key={index}
            name={i.name}
            image={i.imageOriginal ? i.imageOriginal : i.image}
            genres={i.genres}
            visitSite={i.visitSite}
            officialSite={i.officialSite}
            language={i.language}
            rating={i.rating}
            id={i.id}
            summary={i.summary}
          />
        ))}
      </div>
    </>
  );
};

export default GetDataMovie;
