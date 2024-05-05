import React from "react";

const HackathonPart = () => {
  return (
    <div className="p-3">
      {/* Image URL  */}
      <div className="my-2">
        <h1 className="my-1">Image url</h1>
        <input
          type="text"
          placeholder="Image url"
          className="border-black border-[1px] w-[100%] rounded-md py-1 px-3 "
        />
      </div>
      {/* Hackathon Name */}
      <div className="my-2">
        <h1 className="my-1">Hackathon Name</h1>
        <input
          type="text"
          placeholder="Hackathon name"
          className="border-black border-[1px] w-[100%] rounded-md py-1 px-3 "
        />
      </div>

      {/* Project Link URL  */}
      <div className="my-2">
        <h1 className="my-1">Project url</h1>
        <input
          type="text"
          placeholder="Project url"
          className="border-black border-[1px] w-[100%] rounded-md py-1 px-3 "
        />
      </div>

      {/* Project Link URL  */}
      <div className="my-2">
        <h1 className="my-1">Tech Stack</h1>
        <input
          type="text"
          placeholder="Project url"
          className="border-black border-[1px] w-[100%] rounded-md py-1 px-3 "
        />
      </div>

      {/* Description Of the project and hackathon */}
      <div className="my-2">
        <h1 className="my-1">Description</h1>
        <textarea
          name=""
          id=""
          cols={30}
          rows={10}
          className="border-black border-[1px] w-[100%] rounded-md py-1 px-3 "
        ></textarea>
      </div>
    </div>
  );
};

export default HackathonPart;
