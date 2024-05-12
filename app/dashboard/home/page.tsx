"use client";
import Link from "next/link";
import React from "react";
import { IoCopyOutline } from "react-icons/io5";
const page = () => {
  return (
    <div className="md:w-4/5">
      <section className="link flex flex-col md:flex-row justify-between mx-10 my-10 md:my-5 ">
        <h4 className="text-4xl font-bold ">Hi, Sandeep</h4>
        <div className="flex flex-row">
          <div className="bg-[#F8F7F1] mx-1 my-3 md:my-0 rounded-xl border-[#E7E0C2] border-[0.5px] ">
            <div></div>
            <div className="text-lg py-1 px-3 ">
              <Link href={"/website/sandeepyadav_24"}>
                snapsite.com/website/sandeepyadav_24
              </Link>
            </div>
            <div></div>
          </div>
          <div className="bg-[#F8F7F1] mx-1 text-3xl py-1 px-3 rounded-xl border-[#E7E0C2] border-[0.5px]">
            <IoCopyOutline />
          </div>
        </div>
      </section>
      <hr />
      <section></section>
    </div>
  );
};

export default page;
