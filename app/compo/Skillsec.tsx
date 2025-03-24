"use client";
import Image from "next/image";
import images from "../assets/images";

const Skillsec = () => {
  return (
    <div>
      <div className="flex flex-col bg-white rounded-3xl">
        <div className="px-6 py-6 sm:p-8 sm:pb-6">
          <div className="w-[94%] mx-auto">
            <h2 className="text-4xl font-semibold text-center md:text-start pb-5">
              Skills
            </h2>
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Using Now:
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 py-5 items-center justify-center w-full">
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.html} alt="Html" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Html</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.css} alt="Css" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Css</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.javascript} alt="Javascript" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Javascript</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.react} alt="ReactJS" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">ReactJS</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.tailwind} alt="TailwindCss" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Tailwind Css</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.bootstrap} alt="Bootstrap" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Bootstrap</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skillsec;
