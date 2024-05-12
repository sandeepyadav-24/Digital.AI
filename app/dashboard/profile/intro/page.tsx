"use client";
import React, { useState } from "react";
import ProfileNav from "@/components/ProfileNav";

import { MuiChipsInput } from "mui-chips-input";

const page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [intro, setIntro] = useState("");
  const [about, setAbout] = useState("");
  const [achievements, setAchievements] = React.useState([]);
  const [skill, setSkill] = React.useState([]);
  const handleSaveChanges = () => {
    // Post Url for Backend
    const Url = "";
    // Just Make an Object of an POST Data
    const data = {
      firstName: firstName,
      lastName: lastName,
      displayName: displayName,
      intro: intro,
      about: about,
      achievements: achievements,
      skill: skill,
    };

    //Consoling Data for Checking for Future Purpose
    console.log(data);

    const response = fetch(Url, {
      //method: POST,
    });

    {
      /** Post data to Backend than to DB  */
    }
  };

  const skillHandleChange = (newSkill: any) => {
    setSkill(newSkill);
  };

  const handleChange = (newChips: any) => {
    setAchievements(newChips);
  };
  return (
    <div className="md:w-4/5 ">
      {/* Profile Nav Contains All Nav Routes  */}
      <ProfileNav />
      <hr />

      <div className="  ">
        {/* ANother Nav About the Page */}
        <div className="flex flex-row justify-between">
          <h5 className="text-2xl font-bold my-5 mx-5 md:mx-10">
            Intro & Skills
          </h5>
          <div
            className="mx-10 bg-black text-white rounded-3xl my-4 px-4 py-2"
            onClick={handleSaveChanges}
          >
            Save Changes
          </div>
        </div>
        {/* Now Another Section of the Page */}
        <div className="overflow-y-auto h-[555px]">
          <div className="md:w-1/2 mx-5 ">
            <div className="p-3">
              {/* Name Section  */}
              <div className="name flex flex-row py-3 justify-between">
                {/* First Name */}
                <div className="w-1/2">
                  <h1 className="my-2">First Name</h1>
                  <input
                    type="text"
                    className="border-black border-[2px] bg-[#F7F7F7] rounded-md py-1 px-3 w-[97%]  "
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                {/* Last Name */}
                <div className="w-1/2 ">
                  <h1 className="my-2">Last Name</h1>
                  <input
                    type="text"
                    className="border-black border-[2px] bg-[#F7F7F7] rounded-md py-1 ml-2 px-3 w-[97%]"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* Display Name Section  */}
              <div className="my-4">
                <h1 className="my-2">Display Name</h1>
                <input
                  type="text"
                  className="border-black border-[2px] bg-[#F7F7F7] rounded-md py-1 px-3 w-[100%]"
                  onChange={(e) => {
                    setDisplayName(e.target.value);
                  }}
                  value={displayName}
                />
              </div>
              {/* Intro Part  */}
              <div className="my-4">
                <h1 className="my-2">Your Digital Intro (Required)</h1>
                <input
                  type="text"
                  className="border-black border-[1px] bg-[#F7F7F7] rounded-md py-1 px-3 w-[100%]"
                  onChange={(e) => {
                    setIntro(e.target.value);
                  }}
                  value={intro}
                />
              </div>
              {/* About Yourself Section  */}
              <div className="my-4">
                <h1 className="my-2">About Yourself</h1>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="w-[100%] border-black border-[1px] bg-[#F7F7F7] rounded-md p-3"
                  onChange={(e) => {
                    setAbout(e.target.value);
                  }}
                  value={about}
                ></textarea>
              </div>

              {/* Achievement Section  */}
              <div className="my-4">
                <h1 className="my-2">Achievement</h1>
                <MuiChipsInput
                  value={achievements}
                  size="small"
                  onChange={handleChange}
                  placeholder="Achievements"
                  className="w-[100%] border-black  bg-[#F7F7F7]"
                />
              </div>

              {/* Achievement Section  */}
              <div className="my-4">
                <h1 className="my-2">Skills</h1>
                <MuiChipsInput
                  value={skill}
                  size="small"
                  onChange={skillHandleChange}
                  placeholder="Skills"
                  className="w-[100%] bg-[#F7F7F7]"
                />
              </div>
            </div>
            <hr className="my-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
