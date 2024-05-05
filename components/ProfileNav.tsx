import React from "react";
import Link from "next/link";

const ProfileNav = () => {
  return (
    <div className="nav  py-5 px-10">
      <div className="text-4xl font-bold my-2">Profile</div>
      <div className="navbar flex flex-row justify-between py-2">
        <div className="flex flex-row">
          <div className="border-[0.5px] border-black py-2 px-4 rounded-3xl mx-2 hover:border-[2px] hover:font-semibold">
            <Link href={"/dashboard/profile/social"}>Social</Link>
          </div>
          <div className="border-[0.5px] border-black py-2 px-4 rounded-3xl mx-2 hover:border-[2px] hover:font-semibold">
            <Link href={"/dashboard/profile/intro"}>Intro</Link>
          </div>
          <div className="border-[0.5px] border-black py-2 px-4 rounded-3xl mx-2 hover:border-[2px] hover:font-semibold">
            <Link href={"/dashboard/profile/project"}>Project</Link>
          </div>
          <div className="border-[0.5px] border-black py-2 px-4 rounded-3xl mx-2 hover:border-[2px] hover:font-semibold">
            <Link href={"/dashboard/profile/hackathon"}>Hackathon</Link>
          </div>
        </div>
        <div className="bg-black text-white py-2 rounded-3xl px-3">
          Save Changes
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
