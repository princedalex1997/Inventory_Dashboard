import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Layout = () => {
  return (
    <div className=" flex flex-row bg-white h-screen w-screen overflow-hidden dark:bg-black dark:text-white ">
      <SideBar />
      <div className="w-screen">
        <div>
          <Header />
        </div>
        <div className="h-[calc(100vh-60px)] overflow-y-auto overflow-x-hidden p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
