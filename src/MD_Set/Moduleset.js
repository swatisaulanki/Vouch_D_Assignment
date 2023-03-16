import React, { useState } from "react";
import DashData from "../Data_Dashboard";
import Mdatas from "./Mdatas";
const Moduleset = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <DashData Acount_ids={2} />
        <Mdatas />
      </div>
    </div>
  );
};

export default Moduleset;
