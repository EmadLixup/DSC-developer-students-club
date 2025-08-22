const ValueCard = (prop) => {
  return (<div className="bg-[#2E2C3D] text-white p-6 rounded-lg shadow-lg leading-8 m-5">
    <svg xmlns="http://www.w3.org/2000/svg" 
            className=" bg-[#494757] bg-opacity-50 text-red-500 justify-center items-center " fill="none" viewBox="0 0 24 24"  width="40" height="40"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" 
                strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 
                10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 
                01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 
                1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg> 
    <header className="font-bold text-lg text-center p-3 text-[25px]">{prop.header}</header>
    <p className="text-center text-gray-300 text-[14px]">{prop.content}</p>
    <div className="text-[#44D362] ">IN PRACTICE:</div>
     <ul className="list-disc pl-5  marker:bg-clip-text  marker:text-[#6AB6BF]" >
      {prop.inPractice.map((item, index) => (
        <li className=" marker:text-2xl"key={index}>{item}</li>
      ))}
      </ul>
  </div>);
};

export default ValueCard;
