const Navbar = () => {
  return (
    <>
      <header className="bg-[#080c14ff] h-17 p-5 flex items-center box-border justify-between ">
        <div className="flex gap-5 mx-5 items-center text-[1.2em] font-semibold">
          <h1 className="bg-gradient-to-r from-[#00dd78] to-[#2981ff] py-2 px-1 font-bold rounded-[10px]">
            DSC
          </h1>
          <p className="text-white">Developer Students Club</p>
        </div>
        <nav className="flex items-center justify-between h-16 text-gray-300 gap-[30px]">
          <a href="#AimToAchieve">About</a>
          <a href="#AimToAchieve">Vision</a>
          <a href="#AimToAchieve">Targets</a>
          <a href="#AimToAchieve">Principles</a>
          <a href="#AimToAchieve">Values</a>
        </nav>
        <button className="bg-gradient-to-r from-[#00dd78] to-[#2981ff] text-white rounded-[10px] py-2 px-5">
          Join Us
        </button>
      </header>

      {/* <nav className="bg-white shadow" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      <div className="flex items-center justify-between h-16"></div> */}

      {/* the previous code */}
    </>
  );
};

// !! the links needs to be fixed

export default Navbar;
