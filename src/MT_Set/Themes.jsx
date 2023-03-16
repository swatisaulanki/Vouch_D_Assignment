import React from "react";
import DashData from "../Data_Dashboard";
import ThemsF from "./ThemsF";
const Themes = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <DashData Acount_ids={2} />
        <ThemsF />
      </div>
    </div>
  );
};

export default Themes;
