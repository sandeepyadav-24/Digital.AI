import React from "react";
import ProfileNav from "@/components/ProfileNav";
import HackathonPart from "@/components/HackathonPart";

const page = () => {
  return (
    <div className="w-4/5 ">
      <ProfileNav />
      <hr />

      <div className="overflow-y-auto h-[627px]">
        <h5 className="text-2xl font-bold my-5 mx-10">Hackathon</h5>
        <div className="w-1/2 mx-5 my-10">
          <HackathonPart />
          <hr />
        </div>
      </div>
    </div>
  );
};

export default page;
