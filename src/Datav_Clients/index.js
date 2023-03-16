import React from "react";
import "./style.css";
import DashData from "../Data_Dashboard";
import TableData from "./TableView";

const VeiwClint = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <DashData Acount_ids={1} />
        <TableData />
      </div>
    </div>
  );
};

export default VeiwClint;
