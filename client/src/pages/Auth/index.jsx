import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import './style.css';

const Auth = () => {
  return (
    <div className="authWrapper">
      <div className="authContainer">
        <div id="Logo">
          <img src={logo} alt="Logo" />
          <p id="logoTitle">돈바라기</p>
        </div>
        <div className="authContent">
          <Outlet />
        </div>
        <div className="authFooter">
          <p id="footerText">© 2023 돈바라기. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Auth;
