import MainContainer from "../components/mainContainer";

const Home = () => {
  return (
    <div>
      <MainContainer>
        <section className=" grid content-center gap-8 justify-center p-4 border border-cyan-500 rounded-lg mt-2 md:grid-cols-2 lg:grid-cols-2 lg:h-80 lg:gap-0 lg:mt-6 md:mt-6">
          <div className="w-52 h-52 rounded-full border border-cyan-500 shadow-lg shadow-cyan-900 bg-[url('https://avatars.githubusercontent.com/u/51795012?v=4')] justify-self-center bg-cover bg-no-repeat bg-center"></div>
          <div>
            <h1 className="text-white text-xl mb-2">About Me</h1>
            <p className="text-left text-gray-400 font-light">
              Front-end developer with experience working in various projects
              with JavaScript, React, CSS, HTML, Tailwind. Self-taught
              professional with great ownership and accountability, highly
              proactive and resilient. Currently looking for new professional
              challenges as a Front-end developer to advance in my career and
              grow in the technology industry alongside a high-performing team.
            </p>
          </div>
        </section>
      </MainContainer>
    </div>
  );
};

export default Home;
