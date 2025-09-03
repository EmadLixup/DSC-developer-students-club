const ValueCard = (prop) => {
  return (<div className="bg-[#080c14ff] text-white p-6 rounded-lg shadow-lg leading-8 m-5">
    {prop.icon && <prop.icon className="text-5xl justify-center items-center text-center mb-2  text-[#44D362] w-[100%]" color = {prop.color}></prop.icon>}
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

