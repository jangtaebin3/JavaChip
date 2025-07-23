import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import './style.css';

const Auth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/auth/login";

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="authWrapper">
      <div className="authContainer">
        <div id="Logo" className={isLoginPage ? "logoLogin" : ""} onClick={handleLogoClick} style={{cursor: 'pointer'}}>
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
