import ValueCard from "../components/ValueCard";
import ValuesInAction from "../components/ValuesInAction";
import { FaHandshake } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa6';
import { GiGooeyImpact } from 'react-icons/gi';
import { MdPeopleAlt } from 'react-icons/md';
import { PiBracketsAngleBold } from 'react-icons/pi';
import { GiProgression } from 'react-icons/gi';

function Values() {
  return (
    <div className="my-10 space-y-6 bg-[#101828ff] text-white p-10 rounded-lg shadow-lg">
      <h1  className="text-center font-bold text-[40px]">Our <span className="font-bold bg-gradient-to-r from-[#44D362] via-[#75B2BD]  to-[#358EED] bg-clip-text text-transparent">Values</span></h1>
      <p className="text-center text-gray-300">The core values that define who we are as a community and how we approach <br /> technology, learning, and growth.</p >
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-4">
        <ValueCard icon={FaHandshake} color="#44D362" header="Collaboration" content="We believe the best solutions emerge when diverse minds work together." inPractice={["Pair programming sessions", "Open source contributions", "Team hackathons"]} />
        <ValueCard icon={ FaRegLightbulb} color="#F4D623" header="Innovation" content="We encourge creative thinking and aren't afraid to experiment with new ideas." inPractice={["Research projects", "Emerging tech workshops","Startup incubation"]} />
      <ValueCard icon={GiGooeyImpact} color="#348AD0" header="Impact" content="Every project should solve real problems and create meaningful change." inPractice={["Social impact apps","Community tools","Educational pltforms"]} />
      <ValueCard icon={MdPeopleAlt} color="#D88AF8" header="Mentorship" content="Learning from others and sharing knowledge creates a stronger community." inPractice={["Peer mentoring", "Industry speakers","Code review culture"]} />
      <ValueCard icon={PiBracketsAngleBold} color="#6BD095" header="Craftsmanship" content="We take pride in writing clean, maintainable code that stands the test of time." inPractice={["Code quality standards", "Best practice sharing","Technical deep dives"]} />
      <ValueCard icon={GiProgression} color="#D06B81" header="Growth" content="Personal and professional development is at the heart of everything we do." inPractice={["Skill workshops","Career guidence","Personal projects"]} />
</div>
      <ValuesInAction />
    </div>

  );
};

export default Values;
