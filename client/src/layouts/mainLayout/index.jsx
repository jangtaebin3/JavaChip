import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../navigationBar";
import "./style.css";

const MainLayout = () => {
  return (
    <div className="mainLayout">
      <NavigationBar />
      <main className="mainPageContent">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;