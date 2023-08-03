const MainContainer = ({ children }) => {
  return (
    <div className="max-w-4xl mx-auto mt-24 p-4 grid justify-items-center md:mt-36 ">
      {children}
    </div>
  );
};

export default MainContainer;
