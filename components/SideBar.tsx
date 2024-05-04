import React from "react";

const SideBar = () => {
  return (
    <div className="w-1/5 bg-[#F7F6F1] h-screen p-5">
      {/* Profile  Section  */}
      <div className="profile flex flex-row">
        <div className="w-1/5  bg-slate-400 m-1 rounded-full"></div>
        <div className="flex flex-col mx-2">
          <div>digital.io</div>
          <div>digital.io/345678</div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
