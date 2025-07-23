import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./style.css";

const Main = () => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  if (!isLoggedIn) {
    return (
      <div className="mainPage">
        <div className="loginPrompt">
          <h1>돈바라기에 오신 것을 환영합니다!</h1>
          <p>로그인하여 내 자산을 똑똑하게 관리해보세요.</p>
          <button className="loginButton" onClick={handleLoginClick}>
            로그인하러 가기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mainPage">
      <h1>환영합니다, {user?.name || user?.userid}님!</h1>
      <p>돈바라기와 함께 내 자산을 관리해보세요.</p>
    </div>
  );
};

export default Main;