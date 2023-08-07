import { BsStack } from "react-icons/bs";
import { Link } from "react-router-dom";

import keepable from "../assets/keepable.png";
import gTHome from "../assets/gTHome.png";
import pokedex from "../assets/pokedex.png";
import eatable from "../assets/eatable.png";

const Proyects = () => {
  return (
    <div className="w-full p-10 bg-gray-700 bg-opacity-40 mt-16 rounded-xl z-20">
      <div className="flex items-center gap-2 mb-4">
        <BsStack fontSize={25} color="#BBBDBD" />
        <h1 className="text-gray-300 text-2xl ">Proyects</h1>
      </div>
      <div className="grid gap-6 ">
        <p className="text-left text-gray-400 font-light">
          Explore my projects and discover how passion and dedication drive
          every line of code.
        </p>
      </div>
      <div className="grid mt-4 md:justify-center gap-6 md:flex md:flex-wrap">
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden">
          <img
            src={gTHome}
            alt=""
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden">
          <img
            src={pokedex}
            alt=""
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden">
          <img
            src={eatable}
            alt=""
            className="h-full w-full object-cover object-center "
          />
        </div>
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden ">
          <img
            src={keepable}
            alt=""
            className="h-full w-full object-cover object-left "
          />
        </div>
        <div className="w-full max-w-2xl h-16 bg-black bg-opacity-40 rounded-3xl text-gray-200 md:text-gray-400 grid content-center justify-center text-xl hover:text-gray-200 ease-in duration-300 cursor-pointer">
          <Link to={"/proyects"} style={{ textDecoration: "none" }}>
            All my proyects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Proyects;
