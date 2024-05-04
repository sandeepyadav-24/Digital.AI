import AboutMe from "@/components/AboutMe";
import Hackathon from "@/components/Hackathon";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import WebsiteData from "@/database/centralData";

const page = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/3 md:h-screen py-20 px-10 bg-[#D5524C]">
        <span className="link_to_page bg-[#DE7671] px-4 py-2 font-bold text-md rounded-md  ">
          <Link href={"/dashboard/home"}> Start page</Link>
        </span>

        <div className="profile_image mt-5 ">
          <Image
            src={WebsiteData.profilePicture}
            alt="Profile_picture"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="font-bold text-4xl my-3">Sandeep Yadav</div>
        <div className="my-3 text-lg">{WebsiteData.intro}</div>
        <div className="badges flex flex-row flex-wrap">
          {WebsiteData.achievement.map((e, index) => {
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
        <Skills skills={WebsiteData.skills} />
        <Projects project={WebsiteData.project} />
        <Hackathon />
        <AboutMe socials={WebsiteData.socialLinks} about={WebsiteData.about} />
      </div>
    </div>
  );
};

export default page;
