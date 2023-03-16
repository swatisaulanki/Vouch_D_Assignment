import "./style.css";
import React, { useState } from "react";
import Asidebar from "./Asidebar";
import Blockboard from "./Blockboard";

const DashData = ({ Acount_ids }) => {
  const [Toggle, setToggle] = useState(false);
  return (
    <>
      <Asidebar Toggle={Toggle} Acount_ids={Acount_ids} />
      <Blockboard setToggle={setToggle} />
    </>
  );
};

export default DashData;
