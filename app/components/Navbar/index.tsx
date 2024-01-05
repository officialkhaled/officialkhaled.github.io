import React from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 mx-auto max-w-screen-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {/* Mobile Screen */}
            <li>
              <a href="#">About</a>
            </li>

            <li>
              <a href="#">Contact</a>
            </li>

            <li>
              <a>Projects</a>
              <ul className="p-2">
                <li>
                  <a href="#">Project 1</a>
                </li>
                <li>
                  <a href="#">Project 2</a>
                </li>
              </ul>
            </li>
            {/* Mobile Screen */}
          </ul>
        </div>
        <a href="#" className="m-0 p-0">
          <Image src={logo} alt="logo" width={60} height={60} />
        </a>
        {/* <a href="#" className="text-xl font-Obviously text-center">
          KHALED
        </a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-base">
            <a href="#">About</a>
          </li>
          <li className="text-base">
            <a href="#">Contact</a>
          </li>

          <li>
            <details>
              <summary className="text-base">Projects</summary>
              <ul className="p-2">
                <li>
                  <a href="#">Project 1</a>
                </li>
                <li>
                  <a href="#">Project 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>

      {/* Theme Switch */}
      <div className="navbar-end">
        <label className="swap swap-rotate py-2 px-6">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="winter" />

          {/* sun icon */}

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="swap-on fill-current w-6 h-6"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M23.464 12.698l-5.45 1.522-3.966-2.22 3.966-2.219 5.449 1.521.537-1.927-3.523-.982 3.125-1.762-.983-1.742-3.125 1.761.983-3.523-1.926-.537-1.52 5.449-4.031 2.256v-3.881l4-4-1.414-1.414-2.586 2.586v-3.586h-2v3.586l-2.586-2.586-1.414 1.414 4 4v3.881l-4.031-2.256-1.52-5.449-1.926.537.982 3.523-3.124-1.761-.982 1.742 3.124 1.762-3.523.982.537 1.927 5.449-1.521 3.966 2.219-3.966 2.22-5.45-1.522-.536 1.927 3.523.982-3.125 1.763.983 1.741 3.125-1.761-.984 3.523 1.927.536 1.521-5.448 4.03-2.255v3.88l-4 4 1.414 1.414 2.586-2.586v3.586h2v-3.586l2.586 2.586 1.414-1.414-4-4v-3.88l4.03 2.255 1.521 5.448 1.927-.536-.984-3.523 3.125 1.761.983-1.741-3.125-1.763 3.523-.982z" />
          </svg>

          {/* winter icon */}
          <svg
            width="24"
            height="24"
            className="swap-off fill-current w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M7.467 0c1.102.018 5.555 2.549 6.386 8.558.905-.889 1.409-3.664 1.147-4.843 3.952 2.969 6 6.781 6 11.034 0 5.094-3.43 9.251-8.963 9.251-5.728 0-9.037-3.753-9.037-8.276 0-6.26 5.052-7.62 4.467-15.724zm3.262 19.743c-.749.848-.368 1.945.763 2.045 1.035.093 1.759-.812 2.032-1.792.273-.978.09-2.02-.369-2.893-.998 1.515-1.52 1.64-2.426 2.64zm4.42 1.608c2.49-1.146 3.852-3.683 3.852-6.58 0-2.358-.94-4.977-2.5-7.04-.743 2.867-2.924 3.978-4.501 4.269.05-3.219-.318-6.153-2.602-8.438-.296 4.732-4.321 7.63-4.398 12.114-.029 1.511.514 3.203 1.73 4.415.491.489 1.054.871 1.664 1.16-.121-.608-.062-1.254.195-1.848.911-2.106 3.333-2.321 4.202-5.754.952.749 3.275 3.503 2.778 6.358-.082.469-.224.923-.42 1.344z" />
          </svg>
        </label>
        <a
          className="btn btn-accent text-white hover:btn-secondary hover:text-white"
          href="/Resume_Khaled.pdf"
          /* download={true} */
        >
          Resume/CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
