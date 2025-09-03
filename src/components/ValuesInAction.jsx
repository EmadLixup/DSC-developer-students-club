import '../App.css'; // or the relative path to your CSS file
const ValuesInAction = () => {
  return <div className="bg-[#080c14ff] shadow-bright my-10 text-white p-10 rounded-2xl ">
    <div className="text-center text-3xl font-bold m-4 mb-9">Values in Action</div>
    <div className="flex justify-between flex-row sm:flex-wrap sm:  gap-4 ">
      <div className="lg:w-[50%] items-center  sm:w-full ">
        <div className="text-center">
         Our values aren't just aspirations—they're lived experiences. Every workshop, project, and interaction reflects these core beliefs, creating a culture where technology meets humanity.
        </div>
        <ul className="leading-8 list-disc pl-5 items-center  ">
          <li className="marker:text-[#44D362]  marker:text-2xl">Weekly value-based retrospectives</li>
          <li  className="marker:text-[#4379BB]  marker:text-2xl">Community-driven decision making</li>
          <li  className="marker:text-[#44D362]  marker:text-2xl">Impact measurement and celebration</li>

        </ul>

      </div>

      <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#024F23] via-[#1B333E] to-[#1B333E] text-center p-5 rounded-2xl shadow-bright lg:w-[30%] sm:w-[100%] min-h-[100px]">
  <div className="font-bold text-lg">Community Health Score</div>
  <div className="text-2xl font-bold text-[#4791B2]">9.2/10</div>
  <div className="text-gray-300 text-[10px]">Based on member satisfaction and engagement</div>
</div>
    </div>

  </div>;
};

export default ValuesInAction;
