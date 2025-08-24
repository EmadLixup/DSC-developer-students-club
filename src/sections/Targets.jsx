import TargetCard from "../components/TargetCard";
import JoinJourney from "../components/JoinJourney";
import {
    FiUsers,
    FiCode,
    FiBookOpen,
    FiGlobe
} from "react-icons/fi";

import { FaTrophy, FaRocket } from "react-icons/fa";

const Targets = () => {
    const data = [
        {
            icon: <FiUsers className="text-green-400 text-4xl" />,
            title: "1000+ Active Members",
            subtitle: "500+ → 1000+",
            description: "Build a thriving community of passionate student developers",
            progress: 50,
            progressText: "50%",
        },
        {
            icon: <FiCode className="text-blue-400 text-4xl" />,
            title: "100+ Open Source Projects",
            subtitle: "50+ → 100+",
            description: "Contribute meaningful projects to the global developer community",
            progress: 50,
            progressText: "50%",
        },
        {
            icon: <FiBookOpen className="text-green-400 text-4xl" />,
            title: "Monthly Tech Workshops",
            subtitle: "Monthly → ✓ Achieved",
            description: "Regular learning sessions on cutting-edge technologies",
            progress: 100,
            progressText: "100%",
        },
        {
            icon: <FaTrophy className="text-blue-400 text-4xl" />,
            title: "50+ Competition Wins",
            subtitle: "30+ → 50+",
            description: "Excel in hackathons, coding competitions, and tech challenges",
            progress: 60,
            progressText: "60%",
        },
        {
            icon: <FaRocket className="text-green-400 text-4xl" />,
            title: "25+ Startup Launches",
            subtitle: "10+ → 25+",
            description: "Incubate innovative startups from community projects",
            progress: 40,
            progressText: "40%",
        },
        {
            icon: <FiGlobe className="text-blue-400 text-4xl" />,
            title: "Global Partnerships",
            subtitle: "15+ → 20+",
            description: "Collaborate with tech companies and international DSCs",
            progress: 75,
            progressText: "75%",
        },
    ];

    return (
        <>
        <div className="min-h-screen bg-[#101828] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold mb-6">
                        <span className="text-white">Our </span>
                        <span className="bg-gradient-to-r from-[#10c174] to-[#2b93d9] bg-clip-text text-transparent">
                            Targets
                        </span>
                    </h1>

                    <p className="sm:text-xl text-md text-gray-500 max-w-3xl mx-auto">
                        Ambitious goals that drive our community forward and measure our collective impact in the tech
                        ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1  mb-16 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto w-full sm:w-[90%] justify-items-center">
                    {data.map((item, index) => (
                        <TargetCard
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            progress={item.progress}
                            progressText={item.progressText}
                        />
                    ))}
                </div>
            </div>

            <JoinJourney/>
        </div>


       </>

    );

};

export default Targets;
