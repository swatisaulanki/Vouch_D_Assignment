import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Payment from "./Paymentpage/Payment";
import VeiwClint from "./Datav_Clients";
import CrpData from "./Created_Profile";

import Login from "./LoginPage";
import Output from "./SFinish";
import PageNF from "./PageNF/PageNF";
import Themes from "./MT_Set/Themes.jsx";
import Moduleset from "./MD_Set/Moduleset";

const Allrouteshome = () => {
  const [Tok, SetTok] = useState(true);
  useEffect(() => {
    const GetTok = localStorage.getItem("token");
    if (GetTok !== "") {
      SetTok(true);
    } else {
      SetTok(false);
    }
  });
  return (
    <>
      <div className="containers">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<PageNF />} />
            <Route path="/Datav_Clients" element={<VeiwClint />} />
            <Route path="/Created_Profile" element={<CrpData />} />
            <Route path="/Paymentpage" element={<Payment />} />
            <Route path="/MT_Set" element={<Themes />} />
            <Route path="/MD_Set" element={<Moduleset />} />
            <Route path="/Output" element={<Output />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default Allrouteshome;
