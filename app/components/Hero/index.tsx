import React from "react";

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="px-36">
          <h1 className="text-5xl font-bold">Hello World!</h1>
          <p className="py-6 text-lg">
            This is Khaled Hossain, a software engineer looking for internship
            opportunities.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
