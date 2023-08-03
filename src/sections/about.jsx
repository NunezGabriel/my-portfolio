import { BsFillPersonFill } from "react-icons/bs";
import picture from "../assets/picture.png";

const About = () => {
  return (
    <div className="w-full max-w-2xl p-10 bg-gray-700 bg-opacity-40 mt-28 rounded-xl z-20">
      <div className="flex items-center gap-2 mb-4">
        <BsFillPersonFill fontSize={25} color="#BBBDBD" />
        <h1 className="text-gray-300 text-2xl ">About</h1>
      </div>
      <div className="grid gap-6 ">
        <p className="text-left text-gray-400 font-light">
          Front-end developer with experience working in various projects with
          JavaScript, React, CSS, HTML, Tailwind. Self-taught professional with
          great ownership and accountability, highly proactive and resilient.
          Currently looking for new professional challenges as a Front-end
          developer to advance in my career and grow in the technology industry
          alongside a high-performing team.
        </p>
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden">
          <img src={picture} alt="profile picture" className="w-96 h-44" />
        </div>
      </div>
    </div>
  );
};

export default About;
