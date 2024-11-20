import { Route, Routes} from "react-router-dom";
import MoviesShow from "./components/MoviesShow";
import getData from "./components/getDataMovie";
// import { createBrowserRouter } from "react-router-dom";
const App = () => {
  // const routes = createBrowserRouter(routes, {
  // future: {
  // v7_partialHydration: true,
  // },
  
  // });
  return (
    <>

      <Routes>
        <Route path="/test2/"  Component={getData} />
        <Route path="/test2/"  Component={MoviesShow} />
        <Route path="/:id"  Component={getData} />
      </Routes>
    </>
  );
};

export default App;
