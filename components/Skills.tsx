import React from "react";

const Skills = () => {
  const skills = [
    "TailwindCSS",
    "React",
    "Next",
    "Node",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "TurpoRepo",
    "AWS",
    "OpenAi",
    "Gemini",
    "Redis",
    "Git",
    "Zod",
    "Next-Auth",
    "JavaScript",
    "TypeScript",
    "Material UI",
    "c/c++",
  ];
  return (
    <div className="mx-5 md:mx-20 my-20">
      <div className="font-bold text-3xl my-2">Skills</div>
      <div className="flex flex-row flex-wrap my-2">
        {skills.map((e, index) => {
          return (
            <div
              key={index}
              className="mx-1 px-4 my-1 py-2 rounded-md text-3xl  bg-[#FDFBF9] "
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
