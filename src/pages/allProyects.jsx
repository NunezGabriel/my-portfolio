import keepable from "../assets/keepable.png";
import gTHome from "../assets/gTHome.png";
import pokedex from "../assets/pokedex.png";
import eatable from "../assets/eatable.png";
import { Link } from "react-router-dom";
import vectorG from "../assets/vectorG.png";
import grridds from "../assets/grridds.gif";

const AllProyects = () => {
  return (
    <div>
      <div className="flex fixed top-0 left-0 w-full h-20 backdrop-blur-xl border-b-[0.1px] z-30 border-gray-400/40 mb-4 py-2 ">
        <div className="max-w-4xl w-full mx-auto flex items-center justify-center px-2">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <img src={vectorG} alt="cube image" className="w-24 h-24" />
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 p-4 grid justify-items-start relative rounded-xl">
        <div className=" p-4 rounded-2xl">
          <h1 className="text-gray-400 text-3xl">All my proyects</h1>
        </div>
        <div className="grid mt-4 gap-6 md:flex md:flex-wrap justify-center">
          <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-[240px] md:h-56 cursor-pointer overflow-hidden">
            <img
              src={gTHome}
              alt=""
              className="h-full w-full object-cover object-center "
            />
          </div>
          <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-[240px] md:h-56 cursor-pointer overflow-hidden">
            <img
              src={pokedex}
              alt=""
              className="h-full w-full object-cover object-center "
            />
          </div>
          <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-[240px] md:h-56 cursor-pointer overflow-hidden">
            <img
              src={eatable}
              alt=""
              className="h-full w-full object-cover object-center "
            />
          </div>
          <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-[240px] md:h-56 cursor-pointer overflow-hidden ">
            <img
              src={keepable}
              alt=""
              className="h-full w-full object-cover object-left "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProyects;
