"use client";
import Image from "next/image";
import images from "../assets/images";

const OtherSkills = () => {
  return (
    <div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="w-[95%] mx-auto">
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Other Skills:
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 py-5 items-center justify-center w-full">
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.cpp} alt="C++" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">C++</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.photoshop} alt="Photoshop" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Photoshop</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.canva} alt="Canva" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Canva</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherSkills;
