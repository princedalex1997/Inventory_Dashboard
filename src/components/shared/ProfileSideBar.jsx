import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { RiBillLine } from "react-icons/ri";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";
import { FaQuestion } from "react-icons/fa6";

const ProfileSideBar = () => {
  return (
    <div className="mx-2 dark:bg-slate-800" >
      <div className="flex flex-row w-full mb-4">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQGG_dUBY2odfw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1671052328516?e=2147483647&v=beta&t=J_pfBZUgA44Wy925sRFnsjVfML3zvGmcudef5zlOGKY"
          alt="Profile"
          className="w-[45px] h-[45px] rounded-full"
        />

        <div className="ml-3">
          <div className="w-full text-balance">ANGEL MARIA</div>
          <div className="text-lime-700">Admin</div>
        </div>
      </div>
      <div className="flex flex-row gap-4 border p-2 rounded-md hover:bg-fuchsia-400 hover:text-white cursor-pointer">
        <CgProfile fontSize={24} />
        My Profile
      </div>
      <div className="flex flex-row gap-4 my-4 border p-2 rounded-md hover:bg-fuchsia-400 hover:text-white cursor-pointer">
        <IoSettingsOutline fontSize={24} />
        Settigns
      </div>
      <div className="flex flex-row gap-4 my-4 border p-2 rounded-md hover:bg-fuchsia-400 hover:text-white cursor-pointer">
        <RiBillLine fontSize={24} />
        Billing
      </div>
      <div className="flex flex-row gap-4 my-4 border p-2 rounded-md hover:bg-fuchsia-400 hover:text-white cursor-pointer">
        <LiaMoneyCheckAltSolid fontSize={24} />
        Pricing
      </div>
      <div className="flex flex-row gap-4 my-4 border p-2 rounded-md hover:bg-fuchsia-400 hover:text-white cursor-pointer">
        <FaQuestion fontSize={24} />
        FAQ
      </div>
    </div>
  );
};

export default ProfileSideBar;
