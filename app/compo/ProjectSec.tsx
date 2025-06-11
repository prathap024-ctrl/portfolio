"use client";

import { Button } from "@/components/ui/button";

import Link from "next/link";

const Projects = [
  {
    title: "Payments App",
    link: "https://paytm-clone-black.vercel.app/",
  },
];

const ProjectSec = () => {
  return (
    <>
      <div className="w-full h-16 flex justify-center items-center mt-5" id="projects">
        <h3 className="text-4xl font-semibold">Projects:</h3>
      </div>
      <div className="w-[95%] h-auto mx-auto flex flex-col justify-center items-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="transform transition duration-300 hover:scale-110 rounded-lg dark:shadow-white shadow-sm h-52 w-56 hover:shadow-md bg-settheme flex items-center justify-center">
            {Projects.map((pro, index) => (
              <div className="px-5 pt-2 flex flex-col items-center" key={index}>
                <h2 className="font-semibold">{pro.title}</h2>
                <Link href={pro.link}>
                  <Button
                    className="bg-blue-500 cursor-pointer text-settheme px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700"
                    type="button"
                  >
                    View Project
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSec;
