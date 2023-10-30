import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

export default function Layout() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden overflow-y-auto bg-slate-950 text-white">
      {/* <Navbar /> */}
      <Navbar2 />
      <div className="flex-1">
        <Outlet />
      </div>
      <div>footer</div>
    </div>
  );
}
