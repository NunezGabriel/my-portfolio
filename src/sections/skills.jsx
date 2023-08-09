import { BiStats } from "react-icons/bi";
import {
  FaReact,
  FaHtml5,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJest,
  SiPostgresql,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full max-w-2xl p-10 bg-gray-700 bg-opacity-40 mt-16 rounded-xl z-20"
    >
      <div className="flex items-center gap-2 mb-4">
        <BiStats fontSize={25} color="#BBBDBD" />
        <h1 className="text-gray-300 text-2xl ">Skills</h1>
      </div>
      <div className="w-full flex flex-wrap place-content-center gap-4 mt-7">
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <FaReact color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <SiTailwindcss color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <RiJavascriptFill color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <FaHtml5 color="#BBBDBD" fontSize={60} />
        </div>{" "}
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <FaPython color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <SiJest color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <FaGitAlt color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <FaGithub color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <SiPostgresql color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <FaFigma color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <SiVite color="#BBBDBD" fontSize={60} />
        </div>
        <div className="w-28 h-28 bg-black bg-opacity-40 rounded-xl flex place-content-center place-items-center">
          <SiWebpack color="#BBBDBD" fontSize={60} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
