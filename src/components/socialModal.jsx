import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";

const SocialModal = () => {
  return (
    <div className=" h-14 rounded-xl w-80 bg-gray-600 bg-opacity-40 backdrop-blur-md fixed bottom-10 flex   items-center justify-around md:w-96 md:h-16">
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <BsGithub fontSize={30} color="gray" />
      </div>
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <BsLinkedin fontSize={30} color="gray" />
      </div>{" "}
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <BsTwitter fontSize={30} color="gray" />
      </div>{" "}
      <div className="rounded-xl w-11 h-11 bg-gray-400/20 grid place-content-center hover:scale-125 ease-in duration-300">
        <BsInstagram fontSize={30} color="gray" />
      </div>
    </div>
  );
};

export default SocialModal;

//h de 16 esta bien para cuando sea md
