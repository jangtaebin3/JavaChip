import React from "react";
import { Outlet } from "react-router-dom";
import './Auth.css';

const Auth = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Auth;
