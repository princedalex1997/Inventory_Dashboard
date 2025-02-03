import React, { Fragment, useEffect, useState } from "react";
import { FaRegMessage } from "react-icons/fa6";
import { PiBellRingingDuotone } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { FaMoon  } from "react-icons/fa";
import { CgSun } from "react-icons/cg";
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import ProfileSideBar from "./ProfileSideBar";
import Swal from "sweetalert2";

const Header = () => {
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
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
    <div className="h-[70px] border-b-[3px] flex flex-row justify-between rounded-md mx-2 dark:bg-gray-900">
      <div className="flex flex-row items-center pl-10">
        <IoIosSearch fontSize={30} className="mr-3 cursor-pointer" />
        <input
          type="text"
          placeholder="Search"
          className="w-[240px] h-8 text-m focus:outline-none rounded-lg p-2 pl-2 dark:text-black"
        />
      </div>
      <div className="flex flex-row gap-5 items-center mr-5">
        <div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={classNames(
                    open && "bg-gray-100",
                    "group inline-flex items-center rounded-lg p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 dark:text-white"
                  )}
                >
                  <FaRegMessage fontSize={30} className="decoration-white " />
                </PopoverButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute right-0 z-10 mt-4 w-80">
                    <div className="flex flex-col bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 dark:text-black">
                      <strong className="text-gray-700 pb-5  ">Messages</strong>
                      This is Message Panel
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <div>
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={classNames(
                    open && "bg-gray-100",
                    "group inline-flex items-center rounded-lg p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100 dark:text-white"
                  )}
                >
                  <PiBellRingingDuotone fontSize={30} />
                </PopoverButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute right-0 z-10 mt-4 w-80">
                    <div className="flex flex-col bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 dark:text-black">
                      <strong className="text-gray-700 pb-5">Alert</strong>
                      This is Alert Panel
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <div className=" dark:text-black" >
          <button
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? <p><CgSun color="white" fontSize={26} /> </p> : <p><FaMoon fontSize={26}/></p>} 
          </button>
        </div>
        <div>
          <Popover className="relative dark:bg-slate-800">
            {({ open }) => (
              <>
                <PopoverButton
                  className={classNames(
                    open && "",
                    "group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none "
                  )}
                >
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4E03AQGG_dUBY2odfw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671052328516?e=2147483647&v=beta&t=J_pfBZUgA44Wy925sRFnsjVfML3zvGmcudef5zlOGKY"
                    alt="Profile"
                    className="w-[45px] h-[45px] rounded-full"
                  />
                </PopoverButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <PopoverPanel className="absolute right-0 z-10 mt-4 w-[240px] dark:bg-slate-800">
                    <div className="flex flex-col bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5 dark:bg-slate-800">
                      <strong className="text-gray-700 pb-5 text-center dark:text-white">
                        Profile
                      </strong>
                      <ProfileSideBar />
                      <Link
                        onClick={handleLogOut}
                        className="text-center bg-red-600 text-white rounded-md h-10 py-2 font-serif font-bold"
                      >
                        Logout
                      </Link>
                    </div>
                  </PopoverPanel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
