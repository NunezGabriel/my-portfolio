import MainContainer from "../components/mainContainer";
import NavBar from "../components/navBar";
import SocialModal from "../components/socialModal";

import hemisphere from "../assets/hemisphere.gif";
const Home = () => {
  return (
    <div>
      <NavBar />

      <MainContainer>
        <div className="grid gap-8">
          <h1 className="text-gray-200 text-5xl md:text-8xl text-center ">
            Hi there, I'm Gabriel Nunez
          </h1>
          <div className="px-10">
            <p className="text-gray-400 text-center md:text-2xl">
              Software developer, writing code with passion
            </p>
          </div>
        </div>
        <img src={hemisphere} alt="black hole" className="" />
        <div className="flex mt-28 justify-around w-full max-w-xl md:">
          <div className="grid text-gray-200">
            <h1 className="text-7xl">
              3<span>+</span>
            </h1>
            <div className="w-24 md:w-32">
              <p className="text-gray-400">years working on web projects</p>
            </div>
          </div>
          <div className="grid text-gray-200">
            <h1 className="text-7xl">
              30<span>+</span>
            </h1>
            <div className="w-32">
              <p className="text-gray-400">projects created</p>
            </div>
          </div>
        </div>
        <SocialModal />
      </MainContainer>
    </div>
  );
};

{
  /* <p className="text-left text-gray-400 font-light">
Front-end developer with experience working in various projects
with JavaScript, React, CSS, HTML, Tailwind. Self-taught
professional with great ownership and accountability, highly
proactive and resilient. Currently looking for new professional
challenges as a Front-end developer to advance in my career and
grow in the technology industry alongside a high-performing team.
</p> */
}
export default Home;
