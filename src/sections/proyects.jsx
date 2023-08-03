import { BsStack } from "react-icons/bs";

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
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer"></div>
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer"></div>
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer"></div>
        <div className="w-full h-64 bg-black bg-opacity-40 rounded-2xl md:w-80 cursor-pointer"></div>
        <div className="w-full max-w-2xl h-16 bg-black bg-opacity-40 rounded-3xl text-gray-200 md:text-gray-700 grid content-center justify-center text-xl hover:text-gray-300 ease-in duration-300 cursor-pointer">
          All my proyects
        </div>
      </div>
    </div>
  );
};

export default Proyects;
