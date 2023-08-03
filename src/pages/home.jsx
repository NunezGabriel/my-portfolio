import MainContainer from "../components/mainContainer";
import NavBar from "../components/navBar";

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
