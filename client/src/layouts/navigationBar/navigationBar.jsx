// components/NavigationBar.jsx
import React from "react";
import './navigationBar.css';
import userIcon from '../../assets/images/userIcon.svg';
import alertIcon from '../../assets/images/alertIcon.svg';
import globeIcon from '../../assets/images/globeIcon.svg';

const navigationBar = () => {
  return (
    <nav className="navBar">
      <div className="navLeft">
        <div className="logo"></div>
      </div>
      <ul className="navMenu">
        <li className="navItem">캘린더</li>
        <li className="navItem">지출 목록</li>
        <li className="navItem">지출 분석</li>
        <li className="navItem">체크리스트</li>
        <li className="navItem active">커뮤니티</li>
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
