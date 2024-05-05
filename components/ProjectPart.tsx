import React from "react";

const ProjectPart = () => {
  return (
    <div>
      {/*  Image Url Input  */}
      <div className="my-1">
        <h1 className="my-1">Image Link</h1>
        <input
          type="text"
          placeholder="Add Image Url"
          className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
        />
      </div>

      {/*  Tech Stack  */}
      <div className="my-1">
        <h1 className="my-1">Tech Stack </h1>
        <input
          type="text"
          placeholder="Tech Stack"
          className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
        />
      </div>

      {/*  Name Of the Project  */}
      <div className="my-1">
        <h1 className="my-1">Project Name</h1>
        <input
          type="text"
          placeholder="Project Name"
          className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
        />
      </div>
      {/*  Description of the project  */}
      <div className="my-1">
        <h1 className="my-1">Description </h1>
        <input
          type="text"
          placeholder="Description "
          className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
        />
      </div>

      {/*  Link Of the Project  */}
      <div className="my-1">
        <h1 className="my-1">Project Link</h1>
        <input
          type="text"
          placeholder="project url "
          className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
        />
      </div>
    </div>
  );
};

export default ProjectPart;
