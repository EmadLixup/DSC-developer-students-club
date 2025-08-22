import '../App.css'; // or the relative path to your CSS file
const ValuesInAction = () => {
  return <div className="shadow-bright my-10 space-y-0 text-white p-10 rounded-2xl bag">
    <div>Values in Action</div>
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
      <div>
        <div>
         Our values aren't just aspirations—they're lived experiences. Every workshop, project, and interaction reflects these core beliefs, creating a culture where technology meets humanity.
        </div>
        <ul className="leading-8 list-disc pl-5">
          <li className="marker:text-[#44D362]  marker:text-2xl">Weekly value-based retrospectives</li>
          <li  className="marker:text-[#4379BB]  marker:text-2xl">Community-driven decision making</li>
          <li  className="marker:text-[#44D362]  marker:text-2xl">Impact measurement and celebration</li>

        </ul>

      </div>
      <div></div>
    </div>

  </div>;
};

export default ValuesInAction;
