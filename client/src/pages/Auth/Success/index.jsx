import React from "react"
import { useNavigate } from "react-router-dom"
import './style.css'

const Success=()=>{
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/auth/login");
  };

  const handleMainClick = () => {
    navigate("/");
  };

  return(
    <div className="SuccessHtml">
      <div className='SuccessBody'>
        <div className="SuccessMain">
            <div className="SuccessBox">
              <h3 className="BoxMainText">축하해요!</h3>
              <p className="BoxSubText1">돈바라기와 함께 내 자산을 똑똑하게 관리해 봐요</p>
              <button className="ToLoginButton" onClick={handleLoginClick}>로그인하기</button>
              <button className="ToMainButton" onClick={handleMainClick}>메인화면으로 가기</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Success;