"use client";
import Image from "next/image";
import images from "../assets/images";

const frontend = [
  { name: "Javascript", src: images.javascript },
  { name: "React.js", src: images.react },
  { name: "Next.js", src: images.nextjs },
  { name: "Tailwind Css", src: images.tailwind },
  { name: "Bootstrap", src: images.bootstrap },
];

const backend = [
  { name: "Express", src: images.express, className: "dark:invert" },
  { name: "PostgresQL", src: images.postgres },
  { name: "MongoDB", src: images.mongoDB },
  { name: "Drizzle ORM", src: images.drizzle },
];

const LearningSkillsData = [
  {
    title: "Python",
    src: images.python,
  },
  {
    title: "Django",
    src: images.django,
    className: "dark:invert",
  },
  {
    title: "Langchain",
    src: images.langchain,
    className: "dark:invert",
  },
];

const Skillsec = () => {
  return (
    <div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-6 sm:p-8 sm:pb-6">
          <div className="w-[94%] mx-auto">
            <h2 className="text-4xl font-semibold text-center pb-5">
              TOOLS IM USING.
            </h2>
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Frontend
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-10 gap-4 py-5 items-center justify-center w-full">
            {frontend.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-center items-center w-20 h-20 mx-auto">
                  <Image src={skill.src} alt="Html" />
                </div>
                <div className="text-center">
                  <p className=" text-xl font-semibold">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="w-[95%] mx-auto">
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Backend & Database:
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-10 gap-4 py-5 items-center justify-center w-full">
            {backend.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-center items-center w-20 h-20 mx-auto">
                  <Image
                    src={skill.src}
                    alt="Prisma"
                    className={`${skill.className}`}
                  />
                </div>
                <div className="text-center">
                  <p className=" text-xl font-semibold">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="w-[95%] mx-auto">
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Exploring:
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-10 gap-4 py-5 items-center justify-center w-full">
            {LearningSkillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-center items-center w-20 h-20 mx-auto">
                  <Image
                    src={skill.src}
                    alt="Prisma"
                    className={`${skill.className}`}
                  />
                </div>
                <div className="text-center">
                  <p className=" text-xl font-semibold">{skill.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-8 sm:p-10 sm:pb-6">
          <div className="w-[95%] mx-auto">
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Other Skills:
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-10 gap-4 py-5 items-center justify-center w-full">
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

export default Skillsec;
