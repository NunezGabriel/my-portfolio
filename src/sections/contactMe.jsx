import { AiOutlineMessage } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full max-w-2xl p-10 bg-gray-700 bg-opacity-40 mt-16 rounded-xl z-20 mb-20"
    >
      <div className="flex items-center gap-2 mb-4">
        <AiOutlineMessage fontSize={25} color="#BBBDBD" />
        <h1 className="text-gray-300 text-2xl ">Contact</h1>
      </div>
      <div className="w-full bg-black bg-opacity-40 p-4 rounded-2xl grid gap-10 justify-center md:py-4 md:justify-start md:px-24">
        <div className="grid md:flex md:gap-20 gap-10">
          <div className="grid">
            <label className="text-gray-300 text-xl ">Name</label>
            <input
              type="text"
              className="bg-transparent border-b-2 border-gray-200 outline-none text-gray-400"
            />
          </div>
          <div className="grid">
            <label className="text-gray-300 text-xl ">Last Name</label>
            <input
              type="text"
              className="bg-transparent border-b-2 border-gray-200 outline-none text-gray-400"
            />
          </div>
        </div>
        <div className="grid">
          <label className="text-gray-300 text-xl ">Email</label>
          <input
            type="text"
            className="bg-transparent border-b-2 border-gray-200 outline-none text-gray-400"
          />
        </div>
        <div className="grid">
          <label className="text-gray-300 text-xl ">Message</label>
          <textarea
            type="text"
            className="bg-transparent border-b-2 min-h-[100px] border-gray-200 outline-none text-gray-400"
          />
        </div>
        <div className="w-full max-w-2xl h-16 bg-black bg-opacity-40 rounded-3xl text-gray-200 md:text-gray-400 grid content-center justify-center text-xl hover:text-gray-200 ease-in duration-300 cursor-pointer">
          Send
        </div>
      </div>
    </div>
  );
};

export default Contact;
// py-4 px-12
