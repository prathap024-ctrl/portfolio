"use client";
import Image from "next/image";
import images from "../assets/images";

const LearningSkills = () => {
  return (
    <div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="w-[95%] mx-auto">
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Learning:
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 py-5 items-center justify-center w-full">
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image
                  src={images.express}
                  alt="Express"
                  className="dark:invert"
                />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Express</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.postgres} alt="PostgresQL" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">PostgresQL</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.mongoDB} alt="MongoDB" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">MongoDB</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image
                  src={images.prisma}
                  alt="Prisma"
                  className="dark:invert"
                />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Prisma ORM</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image src={images.python} alt="Python" />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Python</p>
              </div>
            </div>
            <div>
              <div className="flex justify-center items-center w-20 h-20 mx-auto">
                <Image
                  src={images.django}
                  alt="Django"
                  className="dark:invert"
                />
              </div>
              <div className="text-center">
                <p className=" text-xl font-semibold">Django</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningSkills;
