import { Route, Routes} from "react-router-dom";
import MoviesShow from "./components/MoviesShow";
import getData from "./components/getDataMovie";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/test2/" excite Component={getData} />
        <Route path="/test2/"  Component={MoviesShow} />
        <Route path="/test2/:id"  Component={getData} />
      </Routes>
    </>
  );
};

export default App;
