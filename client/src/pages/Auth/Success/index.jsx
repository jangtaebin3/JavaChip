import React from "react"
import './style.css'

const Success=()=>{
  return(
    <div className="SuccessHtml">
      <div className='SuccessBody'>
        <div className="SuccessHeader">
        </div>

        <div className="SuccessMain">
            <div className="SuccessBox">
              <h3 className="BoxMainText">축하해요!</h3>
              <p className="BoxSubText1">돈바라기와 함께 내 자산을 똑똑하게 관리해 봐요</p>
              <button className="ToLoginButton">로그인하기</button>
              <button className="ToMainButton">메인화면으로 가기</button>
            </div>
        </div>

        <div className="SuccessFooter">
          <p className="SuccessCopyright">ⓒ 2024. 자바칩. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Success;