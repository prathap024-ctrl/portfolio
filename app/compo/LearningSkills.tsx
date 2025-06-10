"use client";
import Image from "next/image";
import images from "../assets/images";

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
    </div>
  );
};

export default LearningSkills;
