import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const DataList = ({ Mode, insert, payed, themd }) => {
  return (
    <>
      <div className={insert ? "Add_Clint_Nav active" : "Add_Clint_Nav"}>
        <NavLink to="/Created_Profile">
          <div className="Add_Link">
            {payed || themd || Mode? (
              <span className="done">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.70457 9.27842L1.21934 6.7932C0.940018 6.51388 0.488809 6.51388 0.20949 6.7932C-0.0698299 7.07252 -0.0698299 7.52372 0.20949 7.80304L3.20322 10.7968C3.48254 11.0761 3.93375 11.0761 4.21307 10.7968L11.7905 3.21934C12.0698 2.94002 12.0698 2.48881 11.7905 2.20949C11.5112 1.93017 11.06 1.93017 10.7807 2.20949L3.70457 9.27842Z"
                    fill="white"
                  />
                </svg>
              </span>
            ) : (
              <span className="cout">01.</span>
            )}

            <span className="text">Create Profile </span>
          </div>
          <div className="bg-link"></div>
        </NavLink>
      </div>

      <div className={payed ? "Add_Clint_Nav active" : "Add_Clint_Nav"}>
        <NavLink to="/Paymentpage">
          <div className="Add_Link">
            {themd || Mode ? (
              <span className="done">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.70457 9.27842L1.21934 6.7932C0.940018 6.51388 0.488809 6.51388 0.20949 6.7932C-0.0698299 7.07252 -0.0698299 7.52372 0.20949 7.80304L3.20322 10.7968C3.48254 11.0761 3.93375 11.0761 4.21307 10.7968L11.7905 3.21934C12.0698 2.94002 12.0698 2.48881 11.7905 2.20949C11.5112 1.93017 11.06 1.93017 10.7807 2.20949L3.70457 9.27842Z"
                    fill="white"
                  />
                </svg>
              </span>
            ) : (
              <span className="cout">02.</span>
            )}
            <span className="text"> Payment Setup </span>
          </div>
          <div className="bg-link"></div>
        </NavLink>
      </div>

      <div className={themd ? "Add_Clint_Nav active" : "Add_Clint_Nav"}>
        <NavLink to="/Theme_Setup">
          <div className="Add_Link">
            {Mode ? (
              <span className="done">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.70457 9.27842L1.21934 6.7932C0.940018 6.51388 0.488809 6.51388 0.20949 6.7932C-0.0698299 7.07252 -0.0698299 7.52372 0.20949 7.80304L3.20322 10.7968C3.48254 11.0761 3.93375 11.0761 4.21307 10.7968L11.7905 3.21934C12.0698 2.94002 12.0698 2.48881 11.7905 2.20949C11.5112 1.93017 11.06 1.93017 10.7807 2.20949L3.70457 9.27842Z"
                    fill="white"
                  />
                </svg>
              </span>
            ) : (
              <span className="cout">03.</span>
            )}
            <span className="text"> Theme Setup </span>
          </div>
          <div className="bg-link"></div>
        </NavLink>
      </div>

      <div className={Mode ? "Add_Clint_Nav active" : "Add_Clint_Nav"}>
        <NavLink to="/Modules_Setup">
          <div className="Add_Link">
            <span className="cout">04.</span>
            <span className="text"> modules Setup </span>
          </div>
          <div className="bg-link"></div>
        </NavLink>
      </div>
    </>
  );
};

const ClientNav = ({ ContData }) => {
  const [show_mb, SetShow_mb] = useState(false);
  return (
    <div className="add-container">
      <div className="AddClintNav">
        <DataList {...ContData} />
      </div>
      <div className="mobile_AddClintNav">
        <div className="mb-toggle">
          <div className="toggleBtn" onClick={() => SetShow_mb(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ionicon"
              viewBox="0 0 512 512"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
              />
            </svg>
          </div>

          {show_mb ? (
            <div className="processList">
              <div className="close_btn">
                <div id="close_btn" onClick={() => SetShow_mb(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                      d="M368 368L144 144M368 144L144 368"
                    />
                  </svg>
                </div>
              </div>
              <DataList {...ContData} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientNav;
