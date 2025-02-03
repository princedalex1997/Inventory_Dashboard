import React from "react";
import { GRID_LIST_ITEM } from "./Images/link";
import { Link } from "react-router-dom";

const DashboardGrid = () => {
  return (
    <div className="flex flex-row mt-1 g-5 justify-evenly pb-3 dark:border-white ">
      <div className="flex flex-row ">
        {GRID_LIST_ITEM.map((item) => (
          <GridList key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardGrid;

function GridList({ item }) {
  
  console.log(item);

  return (
    <Link to={item.path} className="w-[270px]  h-[80px] mx-2 rounded-lg shadow-md flex flex-row items-center
     hover:bg-sky-200 cursor-pointer duration-200 hover:translate-y-1 hover:scale-105 border dark:border-white  hover:text-black">
      <div className="w-10 h-10items-center justify-center mx-3 dark:border-white ">
        <span className="text-4xl">{item.icon}</span>
      </div>
      <div>
        <div className="pb-2 font-bold text-slate-500">{item.label}</div>
        <div className="flex flex-row">
          <div className="">{item.count} </div>
          <div className="text-sm text-slate-500 ml-2"> +{item.balance} </div>
        </div>
      </div>
    </Link>
  );
}
