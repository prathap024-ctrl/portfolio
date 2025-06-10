"use client";
import Image from "next/image";
import images from "../assets/images";

const skills = [
  { name: "Html", src: images.html },
  { name: "Css", src: images.css },
  { name: "Javascript", src: images.javascript },
  { name: "ReactJS", src: images.react },
  { name: "Tailwind Css", src: images.tailwind },
  { name: "Bootstrap", src: images.bootstrap },
  { name: "Express", src: images.express, className: "dark:invert" },
  { name: "PostgresQL", src: images.postgres },
  { name: "MongoDB", src: images.mongoDB },
  { name: "Shadcn UI", src: images.shadcn, className: "dark:invert" },
  {
    title: "Prisma ORM",
    src: images.prisma,
    className: "dark:invert",
  },
  {
    title: "Drizzle ORM",
    src: images.drizzle,
  },
];

const Skillsec = () => {
  return (
    <div>
      <div className="flex flex-col bg-settheme">
        <div className="px-6 py-6 sm:p-8 sm:pb-6">
          <div className="w-[94%] mx-auto">
            <h2 className="text-4xl font-semibold text-center md:text-start pb-5">
              Skills
            </h2>
            <h2 className="text-2xl font-semibold text-center md:text-start">
              Using Now:
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-10 gap-4 py-5 items-center justify-center w-full">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-center items-center w-20 h-20 mx-auto">
                  <Image
                    src={skill.src}
                    alt="Html"
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
    </div>
  );
};

export default Skillsec;
