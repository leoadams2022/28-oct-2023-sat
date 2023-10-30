import React, { useState } from "react";
import { navBarlinks, logoLink } from "../../dataObjects/navbar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [OpenSidebar, setOpenSidebar] = useState(false);
  return (
    <nav className="z-20 sticky top-0 left-0 w-full px-4 py-2 flex justify-between items-center bg-myBlue-100/90 text-slate-900 shadow-lg text-xl">
      {/* logo  */}
      <Link className="inline-block w-auto h-14" to="#">
        <img src={logoLink} alt="logo" className="w-full h-full object-cover" />
      </Link>
      {/* nav links */}
      <div className="flex items-center gap-2">
        <ul className={`hidden md:flex items-center gap-2 `}>
          {navBarlinks.map((item) => (
            <li key={item.title} className="transition-colors duration-200 ">
              <Link to={item.link} className="capitalize hover:text-white">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        {/* icons */}
        <div>
          {/* sidebar icon  */}
          <button
            onClick={() => setOpenSidebar((pre) => !pre)}
            className="md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* sidebar  */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-screen  transition-transform duration-500 ${
          OpenSidebar ? "translate-x-0" : "translate-x-full"
        } `}
        onClick={() => setOpenSidebar((pre) => !pre)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`w-full sm:w-[300px] h-screen float-right bg-myBlue-300/90 sm:bg-myBlue-300  text-slate-100 px-4 pt-4 shadow-lg flex flex-col justify-between`}
        >
          {/* sidebar TOP  */}
          <div className="relative w-full">
            <Link className="inline-block w-auto h-18">
              <img src={logoLink} alt="logo" className="w-full h-full " />
            </Link>
            <button
              onClick={() => setOpenSidebar((pre) => !pre)}
              className="sm:hidden absolute top-2 right-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </button>
          </div>
          {/* sidebar CENTER  */}
          <div className="flex-1 pl-4 mt-4 flex flex-col">
            <div>
              <input
                type="text"
                className="w-full mb-4 block mx-auto focus:outline-myBlue-100 px-2 py-1 text-slate-900 rounded-sm shadow-sm"
                placeholder="Search..."
              />
            </div>
            <ul className="w-auto tracking-wider mt-4 flex-1 flex flex-col gap-4">
              {navBarlinks.map((item) => (
                <li
                  className="transition-colors duration-200"
                  key={item.title + "sidebar"}
                >
                  <div className="inline-block w-6 h-6 mr-2">
                    <img
                      src={item.iconLink}
                      alt="home icon"
                      className="w-full h-full"
                    />
                  </div>
                  <Link to="#" className="capitalize  hover:text-myBlue-100">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* sidebar BOTTOM  */}
          <div className="bg-slate-950 text-slate-50 text-sm text-center py-1 rounded-sm transition-colors duration-300 cursor-pointer hover:bg-slate-50 hover:text-slate-950">
            <p>ReactApp by walid ali 2023</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
