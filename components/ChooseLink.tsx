"use client";
import React, { useState } from "react";
import MuiSelect from "./MuiSelect";
type Link = {
  social: string;
  id: number;
  onLinkChange: any;
  onDelete: any;
};

const ChooseLink = (props: Link) => {
  // Descructing Props As Original Name
  const { social, onDelete, onLinkChange, id } = props;

  // Handle URL Change in INPUT Box
  const handleInputChange = (e: any) => {
    const { value } = e.target;
    onLinkChange(id, value);
  };

  // Handle Delete Button Functionality
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="flex flex-row ">
      <div className="input flex flex-row border-[1px] border-black my-5 mx-5 rounded-lg w-[90%]">
        {/* Choose Social Media Platfrom  */}
        <div className="border-r-black border-[1px]  ">
          <MuiSelect />
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
