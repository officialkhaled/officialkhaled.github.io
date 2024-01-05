import React from "react";
import Image from "next/image";
import Profile from "../../../public/avatar.jpg";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-60 mx-auto min-h-3.5 bg-base-200 ">
      <div className="hero-content mx-auto max-w-screen-xl justify-between flex-col lg:flex-row-reverse">
        <Image
          src={Profile}
          alt="Profile_Image"
          width={280}
          height={280}
          className="rounded-3xl"
        />

        <div className="">
          <h1 className="text-5xl font-bold font-Obviously">Hello, World!</h1>
          <p className="py-6 text-lg">
            This is
            <span className="font-semibold text-orange-600">
              {" "}
              Khaled Hossain
            </span>
            , a software engineer looking for internship opportunities.
          </p>
          <button className="btn btn-primary text-base text-white hover:btn-neutral">
            Portfolio <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
