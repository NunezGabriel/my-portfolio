import { LiaGripLinesSolid } from "react-icons/lia";
import gLog from "../assets/gLog.png";
import gg from "../assets/gg.png";

const NavBar = () => {
  return (
    <div className="flex fixed top-0 left-0 w-full h-20 backdrop-blur border-b-[0.1px] z-10 border-gray-400/40 mb-4 py-2">
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between px-2">
        <img src={gg} alt="cube image" className="w-20 h-24" />
        <div className="w-10 h-10 grid items-center justify-center border border-gray-400 rounded-md mr-2">
          <LiaGripLinesSolid className="text-gray-400" fontSize={30} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
