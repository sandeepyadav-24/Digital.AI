import React from "react";
import ProfileNav from "@/components/ProfileNav";

const page = () => {
  return (
    <div className="w-4/5 ">
      <ProfileNav />
      <hr />
      <h5 className="text-2xl font-bold my-5 mx-10">Hackathon</h5>
      <div className="overflow-y-auto h-[600px]">
        <div className="w-1/2 mx-5 my-10">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default page;
