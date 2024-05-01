import React from "react";

const AboutMe = () => {
  const socials = [
    {
      profile: "Linedin",
      link: "https://www.linkedin.com/in/sandeep-yadav-027500219/",
    },
    {
      profile: "Twitter",
      link: "https://twitter.com/sandeepyadav_24",
    },
    {
      profile: "GitHub",
      link: "https://github.com/sandeepyadav-24",
    },
    {
      profile: "Youtube",
      link: "https://www.youtube.com/channel/UCMC8H08t5MUT4swmabltJPg",
    },
    {
      profile: "Website",
      link: "https://sandeepyadav-dev.vercel.app",
    },
  ];
  return (
    <div className="mx-5 md:mx-20 my-20">
      <div className="font-bold text-3xl my-2">About Me</div>
      <div className="Socials_link flex flex-row flex-wrap my-2 ">
        {socials.map((e, index) => {
          return (
            <div
              key={index}
              className="mx-1 my-1 px-1 py-1 border-black border-[1px]"
            >
              {e.profile}
            </div>
          );
        })}
      </div>
      <div className="about text-lg">
        I am a software developer with 2+ years of experience in frontend
        development and full stack knowledge. My passion for technology drives
        me to continuously learn and expand my skillset. <br /> I am eager to
        stay updated with the latest advancements and tackle new challenges in
        the field. <br /> My expertise in frontend development combined with my
        full stack knowledge enables me to deliver solutions with both
        aesthetics and functionality in mind.
      </div>
    </div>
  );
};

export default AboutMe;
