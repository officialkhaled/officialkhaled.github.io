import React from "react";

const Projects = () => {
  return (
    <div className="py-24 mx-auto max-w-screen-xl flex items-center justify-center gap-20 flex-wrap">
      {" "}
      {/* Fix Responsiveness */}
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body glasss">
          <h2 className="text-xl font-bold  text-center">KothinTrain</h2>
          <p className="text-center">Train Ticket Management System</p>
          <div className="card-actions py-3 justify-center gap-5">
            <button className="btn btn-primary w-36 hover:btn-secondary">
              Code
            </button>
            <button className="btn btn-primary  w-36 hover:btn-secondary">
              Live
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body glasss">
          <h2 className="text-xl font-bold  text-center">KothinTrain</h2>
          <p className="text-center">Train Ticket Management System</p>
          <div className="card-actions py-3 justify-center gap-5">
            <button className="btn btn-primary w-36 hover:btn-secondary">
              Code
            </button>
            <button className="btn btn-primary  w-36 hover:btn-secondary">
              Live
            </button>
          </div>
        </div>
      </div>
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body glasss">
          <h2 className="text-xl font-bold  text-center">AIUBReD</h2>
          <p className="text-center">
            AIUB ReD Club&apos;s Official Website (Under Development)
          </p>
          <div className="card-actions py-3 justify-center gap-5">
            <button className="btn btn-primary w-36 hover:btn-secondary">
              Code
            </button>
            <button className="btn btn-primary  w-36 hover:btn-secondary">
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
