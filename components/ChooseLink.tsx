"use client";
import React, { useState } from "react";
import MuiSelect from "./MuiSelect";

type Link = {
  social: string;
  id: number;
  onLinkChange: (id: number, value: string, platform: string) => void;
  onDelete: (id: number) => void;
};

const ChooseLink = (props: Link) => {
  // Descructing Props As Original Name
  const { social, onDelete, onLinkChange, id } = props;

  // Define selectedPlatform state
  const [selectedPlatform, setSelectedPlatform] = useState("");

  // Handle URL Change in INPUT Box
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    onLinkChange(id, value, selectedPlatform); // Pass the selected platform here
  };

  const handlePlatformChange = (platform: string) => {
    setSelectedPlatform(platform); // Update the selected platform state
    onLinkChange(id, social, platform); // Pass the platform here as well
  };

  // Handle Delete Button Functionality
  const handleDelete = () => {
    onDelete(id);
  };

  // List of ALL Platform listed insite Social Link Part
  const socialPlatform = [
    "Youtube",
    "LinkedIn",
    "GitHub",
    "Medium",
    "Website",
    "Twitter",
  ];

  return (
    <div className="flex flex-row ">
      <div className="input flex flex-row border-[1px] border-black my-5 mx-5 rounded-lg w-[90%]">
        {/* Choose Social Media Platfrom  */}
        <div className="border-r-black border-[1px]  ">
          <MuiSelect
            platform={socialPlatform}
            onChange={handlePlatformChange}
          />
        </div>
        {/* Put Social Media URL */}
        <div>
          <input
            type="text"
            placeholder="Add social url"
            value={social}
            onChange={handleInputChange}
            className="px-3 py-1  w-[170%] ml-2 my-3 "
          />
        </div>
      </div>
      {/* Put Cross Button to delete Input Box */}
      <button onClick={handleDelete}>❌</button>
    </div>
  );
};

export default ChooseLink;
