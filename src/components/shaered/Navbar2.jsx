import React, { useState } from "react";
import { navBarlinks, logoLink } from "../../dataObjects/navbar";
import { Link } from "react-router-dom";
import Search from "./Search";
import LoginSginUp from "./LoginSginUp";

export default function Navbar() {
  const [OpenSidebar, setOpenSidebar] = useState(false);
  const [OpenSearch, setOpenSearch] = useState(false);
  const [OpenLogin, setOpenLogin] = useState(false);
  return (
    <nav className="z-20 sticky top-0 left-0 w-full px-4 py-2 flex justify-between items-center bg-myBlue-100/90 text-slate-900 shadow-lg text-xl">
      {/* sidebar and avatar icon  */}
      <div className=" flex items-center gap-4">
        <button
          onClick={() => setOpenSidebar((pre) => !pre)}
          className="flex justify-center items-center w-8 h-8"
        >
          {OpenSidebar ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          )}
        </button>
        <button
          onClick={() => setOpenLogin((pre) => !pre)}
          className="flex justify-center items-center w-8 h-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
      </div>

      {/* logo  */}
      <Link className="inline-block w-auto h-14" to="/">
        <img src={logoLink} alt="logo" className="w-full h-full object-cover" />
      </Link>

      {/* search and cart icno  */}
      <div className=" flex items-center gap-4">
        <button
          className="flex justify-center items-center w-8 h-8"
          onClick={() => setOpenSearch((pre) => !pre)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <Link to={"/cart"} className="flex justify-center items-center w-8 h-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
            />
          </svg>
        </Link>
      </div>
      {/* sidebar  */}
      <div
        className={`fixed top-0 right-0 h-screen w-screen  transition-transform duration-500 ${
          OpenSidebar ? "translate-x-0" : "-translate-x-full"
        } `}
        onClick={() => setOpenSidebar((pre) => !pre)}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`w-full sm:w-[300px]  mt-[72px] bg-myBlue-100/90 text-slate-900 px-4 pt-4 shadow-lg flex flex-col justify-between`}
          style={{ height: "calc(100vh - 72px)" }}
        >
          {/* sidebar TOP  */}
          <div className="relative w-full"></div>
          {/* sidebar CENTER  */}
          <div className="flex-1 pl-4 mt-8 flex flex-col">
            <ul className="w-auto tracking-wider mt-4 flex-1 flex flex-col gap-4">
              {navBarlinks.map((item) => (
                <li
                  className="transition-colors duration-200"
                  key={item.title + "sidebar"}
                >
                  <Link
                    onClick={() => setOpenSidebar((pre) => !pre)}
                    to={item.link}
                    className="capitalize  hover:text-white"
                  >
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
      {/* serach  */}
      <Search open={OpenSearch} setOpen={() => setOpenSearch((pre) => !pre)} />
      <LoginSginUp
        open={OpenLogin}
        setOpen={() => setOpenLogin((pre) => !pre)}
      />
    </nav>
  );
}
