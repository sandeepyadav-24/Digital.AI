"use client";
import React from "react";
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

type HackathonProp = {
  hackathons: {
    imageLink: string;
    techStack: string[];
    name: string;
    description: string;
    link: string;
  }[];
};
const Hackathon = (props: HackathonProp) => {
  return (
    <div className="mx-5 md:mx-20 my-20 ">
      <div className="font-bold text-3xl my-2">Projects</div>
      <div className="rounded-xl">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {props.hackathons.map((project) => {
            return (
              <SwiperSlide>
                <div className="bg-white flex flex-col md:flex-row m-10 ">
                  {/* This is the First Part of the DIV   */}
                  <div className="first_part md:w-1/3 p-3">
                    <Image
                      src={project.imageLink}
                      alt="Profile_picture"
                      width={250}
                      height={250}
                    />
                  </div>
                  {/* This is the second Part of the DIV */}
                  <div className="second_part md:w-2/3 p-3">
                    <button className="text-[#2D4FC5] bg-[#E7F2FF] text-xl font-medium">
                      Link
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
          ...
        </Swiper>
      </div>
    </div>
  );
};

export default Hackathon;
