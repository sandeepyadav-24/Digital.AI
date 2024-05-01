"use client";
import React from "react";
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import projectData from "@/database/projectdata";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = () => {
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
          {projectData.map((project) => {
            return (
              <SwiperSlide>
                <div className="bg-white flex flex-col md:flex-row m-10 ">
                  {/* This is the First Part of the DIV   */}
                  <div className="first_part md:w-1/3 p-3">
                    <Image
                      src="https://media.licdn.com/dms/image/D5622AQGf0KAV3AIGHw/feedshare-shrink_1280/0/1714203074787?e=1717632000&v=beta&t=g_2gyRJ-0zKsjZTfQJzLd6CG-wOvdnnCHuifdvUzxIc"
                      alt="Profile_picture"
                      width={250}
                      height={250}
                    />
                  </div>
                  {/* This is the second Part of the DIV */}
                  <div className="second_part md:w-2/3 p-3">
                    <div className="techStack flex flex-row flex-wrap my-2">
                      {project.tech.map((e) => {
                        return (
                          <div className="bg-[#E7F2FF] text-[#2D4FC5] my-1 mx-1 py-1 px-2 rounded-sm">
                            {e}
                          </div>
                        );
                      })}
                    </div>
                    <div className="text-3xl font-bold">{project.name}</div>
                    <div>{project.description}</div>
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

export default Projects;
