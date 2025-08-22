import AchieveCard from "../components/AchieveCard";
import Impact from "../components/Impact";
import "../assets/style/sections/AimToAchieve.css";
import { TbBracketsAngle } from "react-icons/tb";
import { PiBracketsAngleBold } from "react-icons/pi";
import { GoPeople } from "react-icons/go";
import { LuLightbulb } from "react-icons/lu";
import { IoBulbSharp } from "react-icons/io5";
import { BiBullseye } from "react-icons/bi";

const AimToAchieve = () => {
  return (
    <>
      <section className="w-full bg-[#101828] p-[50px]">
        <h1 className="text-center pb-[10px] text-[2.9em] font-bold text-white">
          What We{" "}
          <span className="bg-gradient-to-r from-[#00dd78] to-[#2981ff] bg-clip-text text-transparent">
            Aim to Achieve
          </span>
        </h1>
        <p className="mx-auto text-center w-[50vw] text-gray-400 pb-[4vh] text-[1.1em]">
          Our mission is to empower student developers with the skills, network,
          and opportunities they need to thrive in the ever-evolving world of
          technology.
        </p>

        <div className="w-full flex justify-center gap-[30px]">
          <AchieveCard
            title="Technical Excellence"
            para="Foster a culture of continuous learning and technical mastery through hands-on projects and workshops."
          >
            {/* <TbBracketsAngle className="text-[#05cd6aff] text-[3em]" /> */}
            <PiBracketsAngleBold className="text-[#05cd6aff] text-[3em] mb-5" />
            {/* <p className="text-[#05cd6aff] text-[3em] mb-5">&lt;&gt;</p> */}
          </AchieveCard>
          <AchieveCard
            title="Community Building"
            para="Create meaningful connections between students, professionals, and industry leaders in the tech ecosystem."
          >
            <GoPeople className="text-[#468cddff] text-[3em] mb-5" />
          </AchieveCard>
          <AchieveCard
            title="Innovation Hub"
            para="Encourage creative problem-solving and entrepreneurial thinking to address real-world challenges."
          >
            <LuLightbulb className="text-[#05cd6aff] text-[3em] mb-5" />
          </AchieveCard>
          <AchieveCard
            title="Career Development"
            para="Prepare members for successful careers in technology through mentorship and industry exposure."
          >
            <BiBullseye className="text-[#468cddff] text-[3em] mb-5" />
          </AchieveCard>
        </div>
        <Impact />
      </section>
    </>
  );
};

export default AimToAchieve;
