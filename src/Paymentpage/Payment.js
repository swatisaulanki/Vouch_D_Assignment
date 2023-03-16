import React, { useState } from "react";
import DashData from "../Data_Dashboard";
import PaymentF from "./PaymentF";
const Payment = () => {
  return (
    <div className="main-container">
      <div className="Ds_container">
        <DashData Acount_ids={2} />
        <PaymentF />
      </div>
    </div>
  );
};

export default Payment;
