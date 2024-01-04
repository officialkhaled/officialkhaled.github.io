import React from "react";
import Image from "next/image";
import Profile from "../../../public/avatar.png";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-60 hero min-h-3.5 bg-base-200 ">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse">
        <Image
          src={Profile}
          alt="Profile_Image"
          width={280}
          height={280}
          className="rounded-full"
        />

        <div className="px-20">
          <h1 className="text-5xl font-bold">Hello World!</h1>
          <p className="py-6 text-lg">
            This is Khaled Hossain, a software engineer looking for internship
            opportunities.
          </p>
          <button className="btn btn-primary text-base text-white hover:btn-neutral">
            Let&apos;s Go <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
