import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "./navigationBar/navigationBar.jsx";

const Layout = () => {
  return (
    <div className="app-container">
      <NavigationBar />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;