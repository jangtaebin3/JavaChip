// components/NavigationBar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import './style.css';
import userIcon from '../../assets/images/userIcon.svg';
import alertIcon from '../../assets/images/alertIcon.svg';
import globeIcon from '../../assets/images/globeIcon.svg';

const MenuItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "MenuItem active" : "MenuItem")}
    >
      {label}
    </NavLink>
  );
};

const navigationBar = () => {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <div className="logo"></div>
      </div>
      <ul className="navMenu">
        <li><MenuItem to="/calendar" label="캘린더" /></li>
        <li><MenuItem to="/expenses" label="지출 목록" /></li>
        <li><MenuItem to="/analysis" label="지출 분석" /></li>
        <li><MenuItem to="/checklist" label="체크리스트" /></li>
        <li><MenuItem to="/community" label="커뮤니티" /></li>
      </ul>
      <div className="navRight">
        <img src={alertIcon} alt="Alert" className="navIcon alertIcon" />
        <img src={userIcon} alt="User" className="navIcon userIcon" />
        <img src={globeIcon} alt="Globe" className="navIcon globeIcon" />
      </div>
    </nav>
  );
};

export default navigationBar;
