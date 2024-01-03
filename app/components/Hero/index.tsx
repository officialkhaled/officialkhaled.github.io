import React from "react";
import { FaPlay } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="py-60 hero min-h-3.5 bg-base-200 ">
      <div className="hero-content justify-between flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="image"
          className="max-w-md rounded-lg shadow-2xl"
        />
        <div className="px-20">
          <h1 className="text-5xl font-bold">Hello World!</h1>
          <p className="py-6 text-lg">
            This is Khaled Hossain, a software engineer looking for internship
            opportunities.
          </p>
          <button className="btn btn-primary hover:btn-neutral">
            Let&apos;s Go <FaPlay />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
