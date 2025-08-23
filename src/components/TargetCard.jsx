const TargetCard = ({ icon, title, subtitle, description, progress, progressText }) => {

    const [beforeArrow, afterArrow = ""] = subtitle.split("→");


    const colorClass = afterArrow.includes("✓")
        ? "text-green-400"
        : afterArrow.trim().endsWith("+")
            ? "text-blue-400"
            : "text-green-400";


    const progressBarClass =
        progress === 100
            ? "bg-green-400"
            : "bg-gradient-to-r from-green-400 to-blue-400";

    return (
        <div className="bg-[#080c14] text-white rounded-xl p-6 shadow-lg flex flex-col w-88 border border-gray-700">

            <div className="flex items-center gap-3 mb-6">
                {icon}
                <div>
                    <h3 className="font-bold text-md">{title}</h3>
                    <p className="text-xs text-gray-400">
                        <span>{beforeArrow}</span>
                        {afterArrow && (
                            <>
                                {" "}→{" "}
                                <span className={`font-semibold ${colorClass}`}>
                                    {afterArrow}
                                </span>
                            </>
                        )}
                    </p>
                </div>
            </div>


            <p className="text-gray-300 text-sm mb-6 leading-relaxed">{description}</p>


            <div className="mt-auto">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>{progressText}</span>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded">
                    <div
                        className={`h-2 rounded ${progressBarClass}`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default TargetCard;
