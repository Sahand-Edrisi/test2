import { Route, Routes } from "react-router-dom";
import getData from "./components/getDataMovie";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/test2/" Component={getData} />
        <Route path="/test2/:id" Component={getData} />
      </Routes>
    </>
  );
};

export default App;
