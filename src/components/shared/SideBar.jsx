import React from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../Images/logo.png";
import { IoIosLogOut } from "react-icons/io";
import classNames from "classnames";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../Images/link";
import Swal from "sweetalert2";

const SideBar = () => {
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Log out!",
          text: "Your Account has been Logout.",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div className="bg-sky-400 w-[220px] p-3 flex flex-col text-white h-screen dark:bg-slate-900">
      <Link to="/" className="hover:no-underline ">
        <div className="flex flex-row items-center pb-[20px]">
          <img src={img} alt="logo" className="w-[60px] h-[60px]" />
          <p className="pl-3 text-white uppercase ">exoduss</p>
        </div>
      </Link>
      <div className="flex-1">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
      </div>

      <div className="py-2 flex flex-col  ">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SideBarLinks key={item.key} item={item} />
        ))}
        <div
          onClick={handleLogOut}
          className="flex flex-row pl-3 h-9 mt-4 items-center hover:bg-red-500 hover:text-white rounded-lg font-bold text-white focus:bg-red-800"
        >
          <IoIosLogOut className="mr-3" fontSize={23} />

          <Link>LogOut</Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

function SideBarLinks({ item }) {
  const { pathname } = useLocation();
  const linkClass =
    "flex items-center gap-2 font-light px-3 py-2 mb-1 hover:bg-fuchsia-300 hover:no-underline rounded-lg text-base";

  return (
    <div className="flex flex-col mb-2">
      <Link
        to={item.path}
        className={classNames(
          linkClass,
          pathname === item.path
            ? "bg-white text-black "
            : "text-white hover:text-black font-bold"
        )}
      >
        <span>{item.icon}</span>
        <span className="">{item.label}</span>
      </Link>
    </div>
  );
}
