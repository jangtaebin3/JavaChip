import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./navigationBar/navigationBar.jsx";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="layout">
      <NavigationBar />
      <main className="mainContent">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;