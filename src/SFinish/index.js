import React from "react";
import DashData from "../Data_Dashboard";
import FinishOutput from "./FinishOutput";
const Output = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <DashData Acount_ids={2} />
        <FinishOutput />
      </div>
    </div>
  );
};

export default Output;
