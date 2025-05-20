import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import './Auth.css';

const Auth = () => {
  return (
    <div>
      <div className="authContainer">
        <div id="Logo">
          <img src={logo} alt="Logo" />
          <p id="logoTitle">돈바라기</p>
        </div>
        <div className="authContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Auth;
