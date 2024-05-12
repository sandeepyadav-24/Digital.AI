"use client";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
const SideBar = () => {
  return (
    <div className="md:w-1/5 bg-[#F7F6F1] md:h-screen p-5">
      {/* Profile  Section  */}
      <div className="profile flex flex-row">
        <div className="w-1/5  bg-slate-400 m-1 rounded-full"></div>
        <div className="flex flex-col mx-2">
          <div>snapsite.com</div>
          <div>snapsite.com/</div>
        </div>
      </div>
      {/* List Of All Common Features Section */}
      <div className="my-5">
        {/* First Option -> HOME */}
        <div className="flex flex-row px-3 hover:font-semibold hover:text-[#5B3600] hover:bg-[#ECE6DB] py-2 rounded-lg ">
          <div className="text-xl mx-2 pt-1">
            <GoHome />
          </div>
          <div className="">
            <Link href={"/dashboard/home"}>Home</Link>
          </div>
        </div>
        {/* Second Option -> PROFILE */}
        <div className="flex flex-row px-3 hover:font-semibold hover:text-[#5B3600] hover:bg-[#ECE6DB] py-2 rounded-lg ">
          <div className="text-xl mx-2 pt-1">
            <CgProfile />
          </div>
          <div className="">
            <Link href={"/dashboard/profile/social"}>Profile</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
