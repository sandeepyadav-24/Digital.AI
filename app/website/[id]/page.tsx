import AboutMe from "@/components/AboutMe";
import Hackathon from "@/components/Hackathon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";

const page = () => {
  const badges = ["Top 10", "Top 40 Partcipants", "Hacked'24 Winner"];

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 md:h-screen py-20 px-10 bg-[#92C5F8]">
        <div className="profile_image ">
          <Image
            src="https://media.licdn.com/dms/image/D5622AQGf0KAV3AIGHw/feedshare-shrink_1280/0/1714203074787?e=1717632000&v=beta&t=g_2gyRJ-0zKsjZTfQJzLd6CG-wOvdnnCHuifdvUzxIc"
            alt="Profile_picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="font-bold text-4xl my-3">Sandeep Yadav</div>
        <div className="my-3 text-lg">
          MERN STACK || Level -4 (Scholar) at CodingStudio || LeetCode || DSA
        </div>

        <div className="badges flex flex-row flex-wrap">
          {badges.map((e, index) => {
            return (
              <div
                className="font-bold text-lg px-2 py-1 my-1 mx-1"
                key={index}
              >
                {e}
              </div>
            );
          })}
        </div>
      </div>
      <div className="md:w-2/3 overflow-y-auto bg-[#EEECE3] h-screen ">
        <Skills />
        <Projects />
        <Hackathon />
        <AboutMe />
      </div>
    </div>
  );
};

export default page;
