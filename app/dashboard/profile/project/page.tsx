import ProfileNav from "@/components/ProfileNav";
import ProjectPart from "@/components/ProjectPart";

import React from "react";

const SocialPage = () => {
  return (
    <div className="w-4/5 ">
      <ProfileNav />
      <hr />
      <h5 className="text-2xl font-bold my-5 mx-10">Project</h5>
      <div className="overflow-y-auto h-[550px]">
        <div className="w-1/2 mx-5 my-10">
          <ProjectPart />
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
