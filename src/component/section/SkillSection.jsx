import { skills } from "../../data/skills";
import ImgButton from "../ui/ImgButton";

const SkillSection = () => {
  return (
    <div className="mt-4 text-gray-400 pb-6 border-b-1 border-gray-800">
        
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl text-gray-200 font-normal">Skills</h1>
        <span className="translate-y-0.5 text-md text-gray-700">
          Which I use/know
        </span>
      </div>

      <p className="text-[15px] mt-2">
        These are the technologies I've learned and worked with. This list is
        constantly evolving as I continue to learn and grow as a developer.
      </p>

      {skills.map((group) => (
        <div key={group.category}>
          <h3 className="text-[14px] my-3">
            &lt; {group.category.toUpperCase()} / &gt;
          </h3>
          <ul className="flex flex-wrap items-center gap-2 mt-4">
            {group.items.map((skill) => (
              <ImgButton key={skill.name} {...skill} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
