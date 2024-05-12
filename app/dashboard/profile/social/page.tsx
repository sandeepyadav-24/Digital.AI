"use client";
import React, { useState } from "react";
import ChooseLink from "@/components/ChooseLink";
import ProfileNav from "@/components/ProfileNav";

const SocialPage = () => {
  // UseState for Link State Change
  const [links, setLinks] = useState([{ id: 1, social: "", platform: "" }]);

  // Functionality to Add Input Box
  const handleAddLink = () => {
    const newId = links.length + 1;
    setLinks([...links, { id: newId, social: "", platform: "" }]);
  };

  // Functionality Handle Change in Input Box like adding URL
  const handleLinkChange = (id: number, value: string, platform: string) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, social: value, platform: platform } : link
    );
    setLinks(updatedLinks);
  };

  // Functionality to Delete Input Box through Cross Sign
  const handleDeleteLink = (id: number) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
  };

  const handleClick = () => {
    {
      // Console the Data to check
      console.log(links);

      // Send All Data to Backend for In thier MongoDB
      {
        /**  Send Data */
      }
    }
  };

  return (
    <div className="md:w-4/5 ">
      <ProfileNav />
      <hr />
      <div className="flex flex-row justify-between ">
        <h5 className="text-2xl font-bold my-5 mx-5 md:mx-10">Social Links</h5>
        <div
          className="bg-black text-white px-5 py-2 my-4 rounded-3xl mx-10"
          onClick={handleClick}
        >
          Save changes
        </div>
      </div>
      <div className="overflow-y-auto h-[553px]">
        <div className="md:w-1/2 mx-2 md:mx-5 my-10">
          <div>
            {links.map((link, index) => (
              <ChooseLink
                key={index}
                id={link.id}
                social={link.social}
                onLinkChange={handleLinkChange}
                onDelete={handleDeleteLink}
              />
            ))}
            <button
              className="border-[1px] border-black my-5  rounded-lg w-[90%] mx-5 py-1 border-dashed"
              onClick={handleAddLink}
            >
              + Add Social Link
            </button>
          </div>
          <hr className="my-10" />
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
