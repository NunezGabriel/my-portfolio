import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import AllProyects from "./pages/allProyects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyects" element={<AllProyects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
