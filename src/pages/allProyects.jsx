import keepable from "../assets/keepable.png";
import gTHome from "../assets/gTHome.png";
import pokedex from "../assets/pokedex.png";
import eatable from "../assets/eatable.png";
import { Link } from "react-router-dom";
import vectorG from "../assets/vectorG.png";

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
        <div className="grid mt-4 gap-6 md:flex md:flex-wrap justify-star md:pl-10">
          <Link
            to={"https://get-that-home-frontend.vercel.app/"}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden relative group ">
              <img
                src={gTHome}
                alt=""
                className="h-full w-full object-cover object-center hover:scale-125 duration-300"
              />
              <div className="p-2 bg-gray-800 rounded-xl absolute top-3 left-3 border">
                <p className="text-gray-400 text-md">Get that home</p>
              </div>
              <div className="absolute flex p-2 rounded-xl bottom-[-50px] left-3 group-hover:bottom-3 items-center justify-between duration-300 ease-in-out gap-1">
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">React</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Vite</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Emotion</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Formik</p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            to={"https://pokedex-beta-pied.vercel.app/"}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden relative group">
              <img
                src={pokedex}
                alt=""
                className="h-full w-full object-cover object-center hover:scale-125 duration-300"
              />
              <div className="p-2 bg-gray-800 rounded-xl absolute top-3 left-3 border border-white">
                <p className="text-gray-400 text-md">Pokedex</p>
              </div>
              <div className="absolute flex p-2 rounded-xl bottom-[-50px] left-3 group-hover:bottom-3 items-center justify-between duration-300 ease-in-out gap-1">
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">React</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Axios</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Emotion</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={"https://github.com/NunezGabriel/eatable-fillters"}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden relative group">
              <img
                src={eatable}
                alt=""
                className="h-full w-full object-cover object-center hover:scale-125 duration-300"
              />
              <div className="p-2 bg-gray-800 rounded-xl absolute top-3 left-3 border border-white">
                <p className="text-gray-400 text-md">Eatable filters</p>
              </div>
              <div className="absolute flex p-2 rounded-xl bottom-[-50px] left-3 group-hover:bottom-3 items-center justify-between duration-300 ease-in-out gap-1">
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">React</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Emotion</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Formik</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to={"https://keepable.vercel.app/"}
            style={{ textDecoration: "none" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer overflow-hidden relative group">
              <img
                src={keepable}
                alt=""
                className="h-full w-full object-cover object-left hover:scale-125 duration-300"
              />
              <div className="p-2 bg-gray-800 rounded-xl absolute top-3 left-3 border border-white">
                <p className="text-gray-400 text-md">Keepable</p>
              </div>
              <div className="absolute flex p-2 rounded-xl bottom-[-50px] left-3 group-hover:bottom-3 items-center justify-between duration-300 ease-in-out gap-1">
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">JavaScript</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Html</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Css</p>
                </div>
                <div className="px-2 py-1 bg-gray-800 rounded-xl border">
                  <p className="text-gray-400 text-md">Jest</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllProyects;
