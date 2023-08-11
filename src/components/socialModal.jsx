import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialModal = () => {
  return (
    <div className=" h-14 rounded-xl w-80 bg-gray-600 bg-opacity-40 backdrop-blur-md fixed bottom-10 flex z-30 items-center justify-around md:w-16 md:h-80 md:right-[100px] md:top-44 md:flex-col ">
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <a
          href="https://github.com/NunezGabriel"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub fontSize={30} color="gray"></BsGithub>
        </a>
      </div>
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <a
          href="https://www.linkedin.com/in/gabriel-nu%C3%B1ez-arenas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin fontSize={30} color="gray"></BsLinkedin>
        </a>
      </div>{" "}
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <a
          href="https://twitter.com/gabrielnunez_23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsTwitter fontSize={30} color="gray"></BsTwitter>
        </a>
      </div>{" "}
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <a
          href="https://www.instagram.com/gabri3l_nun3z/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram fontSize={30} color="gray"></BsInstagram>
        </a>
      </div>
    </div>
  );
};

export default SocialModal;

//h de 16 esta bien para cuando sea md
