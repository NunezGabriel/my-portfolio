import MainContainer from "../components/mainContainer";
import NavBar from "../components/navBar";
import SocialModal from "../components/socialModal";
import About from "../sections/about";
import Skills from "../sections/skills";
import Proyects from "../sections/proyects";
import Contact from "../sections/contactMe";

import giphy from "../assets/giphy.gif";
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
        <About />
        <Skills />
        <img
          src={giphy}
          alt="circle star"
          className="absolute hidden top-[960px] right-[-100px] w-[200px] h-[200px] md:block"
        />
        <img
          src={giphy}
          alt="circle star"
          className="absolute hidden top-[1360px] left-[-150px] w-[250px] h-[250px] md:block"
        />
        <img
          src={giphy}
          alt="circle star"
          className="absolute hidden top-[1660px] right-[-100px] w-[300px] h-[300px] md:block"
        />
        <img
          src={giphy}
          alt="circle star"
          className="absolute hidden top-[1960px] left-[-145px] w-[350px] h-[350px] md:block"
        />
        <Proyects />
        <Contact />
        <SocialModal />
      </MainContainer>
    </div>
  );
};

{
}
export default Home;
