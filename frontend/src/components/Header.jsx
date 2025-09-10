import React from "react";
import Login from "./Login";

function Header() {
  return (
    <>
      <div>
        <div className="navbar fixed bg-amber-200 top-0 left-0 w-full h-25 z-50 ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/story">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <img className="h-15 w-20" src="./images/logo.webp" alt="" />
            <h1 className="ml-1 text-2xl font-bold">Get Laddu</h1>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl font-bold">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/story">About</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <button
              className="btn bg-orange-400 text-white hover:bg-orange-300 transition-300 md:mr-6"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Admin
            </button>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
