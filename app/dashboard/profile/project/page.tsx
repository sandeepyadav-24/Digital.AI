"use client";
import React, { useState } from "react";
import { MuiChipsInput } from "mui-chips-input";
import ProfileNav from "@/components/ProfileNav";
import { MdDelete } from "react-icons/md";

const SocialPage = () => {
  // Interface for typescript for type check
  interface Project {
    id: number;
    imageUrl: string;
    techStack: string[];
    projectName: string;
    description: string;
    projectLink: string;
  }
  // UseState for state management of Project
  const [projects, setProjects] = useState<Project[]>([
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
  const projectsPerPage = 1; // Change this value to adjust the number of projects per page

  // Handle Input  Change  Function
  const handleInputChange = (
    id: number,
    name: keyof Project,
    value: string | string[]
  ) => {
    const newProjects = projects.map((project) =>
      project.id === id ? { ...project, [name]: value } : project
    );
    setProjects(newProjects);
  };
  // Handle Add Project Function
  const handleAddProject = () => {
    const newId = projects.length + 1;
    setProjects([
      ...projects,
      {
        id: newId,
        imageUrl: "",
        techStack: [],
        projectName: "",
        description: "",
        projectLink: "",
      },
    ]);
    setCurrentPage(Math.ceil(newId / projectsPerPage));
  };

  // Handle Delete Project Function
  const handleDeleteProject = (id: number) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  return (
    <div className="md:w-4/5 ">
      <ProfileNav />
      <hr />
      <div className="flex flex-row justify-between">
        <h5 className="text-2xl font-bold my-5 mx-5 md:mx-10">Project</h5>
        <button className="bg-black text-white justify-between my-4 mx-10 px-4 rounded-3xl ">
          save changes
        </button>
      </div>

      <div className="overflow-y-auto h-[550px]">
        <div className="md:w-1/2 mx-5 my-10">
          <div>
            {currentProjects.map((project) => (
              <div key={project.id}>
                {/* Image Url Input */}
                <div className="my-1">
                  <h1 className="my-1">Image Link</h1>
                  <input
                    type="text"
                    name="imageUrl"
                    value={project.imageUrl}
                    onChange={(event) =>
                      handleInputChange(
                        project.id,
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
                    value={project.techStack}
                    onChange={(chips) =>
                      handleInputChange(project.id, "techStack", chips)
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
                    value={project.projectName}
                    onChange={(event) =>
                      handleInputChange(
                        project.id,
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
                    value={project.description}
                    onChange={(event) =>
                      handleInputChange(
                        project.id,
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
                    value={project.projectLink}
                    onChange={(event) =>
                      handleInputChange(
                        project.id,
                        "projectLink",
                        event.target.value
                      )
                    }
                    placeholder="Project Link"
                    className="border-black border-[1px] rounded-md w-[100%] py-1 px-3"
                  />
                </div>
                {/* Delete Button */}
                <button onClick={() => handleDeleteProject(project.id)}>
                  <MdDelete className="text-3xl my-2 text-red-700" />
                </button>
              </div>
            ))}

            <div className=" flex flex-row my-5  text-center">
              {/* Pagination buttons */}
              {projects.length > projectsPerPage && (
                <div>
                  {Array.from(
                    { length: Math.ceil(projects.length / projectsPerPage) },
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
                onClick={handleAddProject}
              >
                +
              </button>
            </div>
            {/*<button onClick={() => console.log(projects)}>Show Console</button> */}
          </div>
          <hr className="my-3" />
        </div>
      </div>
    </div>
  );
};

export default SocialPage;
