const AchieveCard = ({ title, para, children }) => {
  return (
    <div className="bg-[#080c14ff] rounded-[15px] border border-[rgba(124,123,123,0.342)]  p-7 ">
      <div>{children}</div>
      <h2 className="text-white text-[1.2em] font-semibold my-[15px]">
        {title}
      </h2>
      <p className="text-gray-400">{para}</p>
    </div>
  );
};

export default AchieveCard;
