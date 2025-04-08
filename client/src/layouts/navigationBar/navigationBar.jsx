// components/NavigationBar.jsx
import React from "react";

const navigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="nav-left">
        <div className="logo">로고</div>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">캘린더</li>
        <li className="nav-item">지출 목록</li>
        <li className="nav-item">지출 분석</li>
        <li className="nav-item">체크리스트</li>
        <li className="nav-item active">커뮤니티</li>
      </ul>
      <div className="nav-right">
        <button className="nav-icon user-icon" />
        <button className="nav-icon alert-icon" />
        <button className="nav-icon globe-icon" />
      </div>
    </nav>
  );
};

export default navigationBar;
