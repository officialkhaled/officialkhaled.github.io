import React from "react";
import Image from "next/image";
import Profile from "../../../public/avatar.jpg";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-60 mx-auto min-h-3 bg-base-200">
      <div className="hero-content mx-auto max-w-screen-xl justify-between flex-col responsive lg:flex-row-reverse">
        <Image
          src={Profile}
          alt="Profile_Image"
          width={280}
          height={280}
          className="shadow-lg shadow-gray-300 rounded-3xl"
        />

        <div className="">
          <h1 className="text-5xl font-bold font-Obviously">Hello, World!</h1>
          <p className="py-8 text-lg text-justify pr-28">
            This is
            <span className="font-semibold text-orange-600">
              {" "}
              Khaled Hossain
            </span>
            , a software engineer looking for internship opportunities.
            Proficient in JavaScript, HTML & CSS. Currently learning ReactJS,
            TailwindCSS and TypeScript. I am a fast learner and a team player. I
            am also a good communicator and a problem solver.
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
