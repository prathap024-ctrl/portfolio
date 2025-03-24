"use client";
import Image from "next/image";
import React from "react";
import images from "../assets/images";

const HeroSec = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center relative">
      <div className="absolute md:static md:w-[50%] w-full h-auto flex flex-col justify-center items-center md:items-start md:px-28 px-10 ">
        <h4 className="text-2xl">Hi i&apos;m</h4>
        <h1 className="text-2xl md:text-4xl font-bold">Prathap L</h1>
      </div>
      <div className="md:w-[50%] w-full h-auto object-cover flex justify-center md:opacity-[100%] opacity-[25%]">
        <Image
          src={images.HeroImage}
          alt="hero"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};

export default HeroSec;
