import React from "react";
import Image from "next/image";
import Project_1 from "../../../public/flavorverse.png";
import Project_2 from "../../../public/kothintrain.png";
import Project_3 from "../../../public/aiubred.png";

const Projects = () => {
  return (
    <div className="py-24 mx-auto max-w-screen-xl flex items-center justify-center gap-20 flex-wrap shrink-4 ">
      {" "}
      {/* Fix Responsiveness */}
      <div className="card card-compact mx-auto max-w-screen-xl bg-base-100 shadow-xl">
        <figure>
          <Image src={Project_1} alt="Project" width={900} height={100} />
        </figure>
        <div className="card-body glasss">
          <h2 className="text-xl font-bold  text-center">FlavorVerse</h2>
          <p className="text-center">Online Platform of Curated Recipes</p>
          <div className="card-actions py-3 justify-center gap-5">
            <a
              href="https://github.com/officialkhaled/flavorverse-webapp"
              target="_blank"
            >
              <button className="btn btn-primary w-36 hover:btn-secondary">
                Code
              </button>
            </a>
            <a href="https://flavorverse-webapp.vercel.app" target="_blank">
              <button className="btn btn-primary  w-36 hover:btn-secondary">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <Image
            src={Project_2}
            alt="Project"
            width={900}
            height={100}
            className=""
          />
        </figure>
        <div className="card-body glasss">
          <h2 className="text-xl font-bold  text-center">KothinTrain</h2>
          <p className="text-center">Train Ticket Management System</p>
          <div className="card-actions py-3 justify-center gap-5">
            <a
              href="https://github.com/officialkhaled/KothinTrain-Webtech-Project-2022"
              target="_blank"
            >
              <button className="btn btn-primary w-36 hover:btn-secondary">
                Code
              </button>
            </a>
            {/* <a href="https://flavorverse-webapp.vercel.app" target="_blank">
              <button className="btn btn-primary  w-36 hover:btn-secondary">
                Live
              </button>
            </a> */}
          </div>
        </div>
      </div>
      <div className="card card-compact w-auto bg-base-100 shadow-xl">
        <figure>
          <Image
            src={Project_3}
            alt="Project"
            width={900}
            height={100}
            className=""
          />
        </figure>
        <div className="card-body glasss">
          <h2 className="text-xl font-bold  text-center">AIUBReD</h2>
          <p className="text-center">
            AIUB ReD Club&apos;s Official Website (Under Development)
          </p>
          <div className="card-actions py-3 justify-center gap-5">
            <a href="https://aiub-red-main-website.vercel.app" target="_blank">
              <button className="btn btn-primary w-36 hover:btn-secondary">
                Live
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
