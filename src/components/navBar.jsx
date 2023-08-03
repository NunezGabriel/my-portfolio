import { LiaGripLinesSolid } from "react-icons/lia";
import vectorG from "../assets/vectorG.png";

const NavBar = () => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-20 backdrop-blur-xl border-b-[0.1px] z-30 border-gray-400/40 mb-4 py-2">
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between px-2">
        <img src={vectorG} alt="cube image" className="w-24 h-24" />
        <div className="w-96 h-10 bg-gray-700 bg-opacity-40 rounded-2xl hidden md:flex md:justify-around md:items-center text-gray-400 cursor-pointer">
          <p className="hover:text-gray-300 ease-in duration-300">about</p>
          <p className="hover:text-gray-300 ease-in duration-300">skills</p>
          <p className="hover:text-gray-300 ease-in duration-300">proyects</p>
          <p className="hover:text-gray-300 ease-in duration-300">contact</p>
        </div>
        <div className="w-10 h-10 grid items-center justify-center border border-gray-400 rounded-md mr-2 md:hidden">
          <LiaGripLinesSolid className="text-gray-400" fontSize={30} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
