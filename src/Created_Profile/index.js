import React from "react";
import DashData from "../Data_Dashboard";
import Contents from "./Contents";
const CrpData = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <DashData Acount_ids={2} />
        <Contents />
      </div>
    </div>
  );
};

export default CrpData;
