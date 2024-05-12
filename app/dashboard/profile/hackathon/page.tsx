"use client";
import React, { useState } from "react";
import ProfileNav from "@/components/ProfileNav";
import { MuiChipsInput } from "mui-chips-input";
import HackathonPart from "@/components/HackathonPart";

const HackathonPage = () => {
  // Interface for typescript for type check
  interface Hackathon {
    id: number;
    imageUrl: string;
    techStack: string[];
    projectName: string;
    description: string;
    projectLink: string;
  }

  // UseState for state management of Project
  const [hackathons, setHackathons] = useState<Hackathon[]>([
    {
      id: 1,
      imageUrl: "",
      techStack: [],
      projectName: "",
      description: "",
      projectLink: "",
    },
  ]);

  // Current Page State Management
  const [currentPage, setCurrentPage] = useState<number>(1);
  const hackathonsPerPage = 1; // Change this value to adjust the number of projects per page

  // Handle Input  Change  Function
  const handleInputChange = (
    id: number,
    name: keyof Hackathon,
    value: string | string[]
  ) => {
    const newHackathons = hackathons.map((hackathon) =>
      hackathon.id === id ? { ...hackathon, [name]: value } : hackathon
    );
    setHackathons(newHackathons);
  };

  // Handle Add Project Function
  const handleAddHackathon = () => {
    const newId = hackathons.length + 1;
    setHackathons([
      ...hackathons,
      {
        id: newId,
        imageUrl: "",
        techStack: [],
        projectName: "",
        description: "",
        projectLink: "",
      },
    ]);
    setCurrentPage(Math.ceil(newId / hackathonsPerPage));
  };

  const indexOfLastProject = currentPage * hackathonsPerPage;
  const indexOfFirstProject = indexOfLastProject - hackathonsPerPage;
  const currentHackathons = hackathons.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="md:w-4/5 ">
      <ProfileNav />
      <hr />

      <div className="overflow-y-auto h-[627px]">
        <div className="flex flex-row justify-between ">
          <h5 className="text-2xl font-bold my-5 mx-10">Hackathon</h5>
          <div className="bg-black text-white my-5 py-2 rounded-3xl px-3 mx-10">
            Save Changes
          </div>
        </div>
        <div className="md:w-1/2 mx-5 my-10">
          {currentHackathons.map((hackathon) => (
            <div key={hackathon.id}>
              {/* Image Url Input */}
              <div className="my-1">
                <h1 className="my-1">Image Link</h1>
                <input
                  type="text"
                  name="imageUrl"
                  value={hackathon.imageUrl}
                  onChange={(event) =>
                    handleInputChange(
                      hackathon.id,
                      "imageUrl",
                      event.target.value
                    )
                  }
                  placeholder="Add Image Url"
                  className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
                />
              </div>

              {/* Tech Stack */}
              <div className="my-1">
                <h1 className="my-1">Tech Stack</h1>
                <MuiChipsInput
                  value={hackathon.techStack}
                  onChange={(chips) =>
                    handleInputChange(hackathon.id, "techStack", chips)
                  }
                  className="rounded-md w-full  "
                />
              </div>

              {/* Name Of the Project */}
              <div className="my-1">
                <h1 className="my-1">Project Name</h1>
                <input
                  type="text"
                  name="projectName"
                  value={hackathon.projectName}
                  onChange={(event) =>
                    handleInputChange(
                      hackathon.id,
                      "projectName",
                      event.target.value
                    )
                  }
                  placeholder="Project Name"
                  className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
                />
              </div>
              {/* Description of the project */}
              <div className="my-1">
                <h1 className="my-1">Description</h1>
                <input
                  type="text"
                  name="description"
                  value={hackathon.description}
                  onChange={(event) =>
                    handleInputChange(
                      hackathon.id,
                      "description",
                      event.target.value
                    )
                  }
                  placeholder="Description"
                  className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
                />
              </div>

              {/* Link Of the Project */}
              <div className="my-1">
                <h1 className="my-1">Project Link</h1>
                <input
                  type="text"
                  name="projectLink"
                  value={hackathon.projectLink}
                  onChange={(event) =>
                    handleInputChange(
                      hackathon.id,
                      "projectLink",
                      event.target.value
                    )
                  }
                  placeholder="Project Link"
                  className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
                />
              </div>

              <div className=" flex flex-row my-5">
                {/* Pagination buttons */}
                {hackathons.length > hackathonsPerPage && (
                  <div>
                    {Array.from(
                      {
                        length: Math.ceil(
                          hackathons.length / hackathonsPerPage
                        ),
                      },
                      (_, index) => index + 1
                    ).map((pageNumber) => (
                      <button
                        key={pageNumber}
                        className="mx-3 my-2 px-2 rounded-full border-black border-[1px] border-dashed"
                        onClick={() => paginate(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  className=" mx-3 my-2 px-2 rounded-full border-black border-[1px] border-dashed"
                  onClick={handleAddHackathon}
                >
                  +
                </button>
              </div>
            </div>
          ))}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default HackathonPage;
