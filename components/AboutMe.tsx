import React from "react";
type AboutProp = {
  socials: { profile: string; link: string }[];
  about: string;
};

const AboutMe = (props: AboutProp) => {
  return (
    <div className="mx-5 md:mx-20 my-20">
      <div className="font-bold text-3xl my-2">About Me</div>
      <div className="Socials_link flex flex-row flex-wrap my-2 ">
        {props.socials.map((e, index) => {
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
      <div className="about text-lg">{props.about}</div>
    </div>
  );
};

export default AboutMe;
