"use client";
import React from "react";
import ChooseLink from "./ChooseLink";
import { useState } from "react";

const SocialLinkPart = () => {
  // UseState for Link State Change
  const [links, setLinks] = useState([{ id: 1, social: "" }]);

  // Functionality to Add Input Box
  const handleAddLink = () => {
    const newId = links.length + 1;
    setLinks([...links, { id: newId, social: "" }]);
  };

  // Functionality Handle Change in Input Box like adding URL
  const handleLinkChange = (id: number, value: string) => {
    const updatedLinks = links.map((link) =>
      link.id === id ? { ...link, social: value } : link
    );
    setLinks(updatedLinks);
  };

  // Functionality to Delete Input Box through Cross Sign
  const handleDeleteLink = (id: number) => {
    const updatedLinks = links.filter((link) => link.id !== id);
    setLinks(updatedLinks);
  };

  return (
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
  );
};

export default SocialLinkPart;
