import React from "react";
import DashboardGrid from "./DashboardGrid";
import TransitionChart from "./TransitionChart";
import TableView from "./TableView";

const Dashboard = () => {
  return (
    <div className="h-full" >
      <DashboardGrid/>
      <TransitionChart />
      <TableView/>
      
    </div>
  );
};

export default Dashboard;
