import { useState, useEffect } from 'react'

import Calendar from '../../components/expenseAnalysis/calendar/index.jsx';
import ExpenseList from '../../components/expenseAnalysis/expenseList/index.jsx';
import UserProfile from '../../components/expenseAnalysis/userInfo/index.jsx';
import EAModal from '../../components/expenseAnalysis/EAModal/index.jsx';
import './style.css';



const ExpenseAnalysis = () => {//당 월 1일부터 31일 혹은 30일까지의 소비 및 소비 카테고리 배열을 받아옴
let userId = ""
let userPW = "examplePW"

const exampleExpenseData=[["식비",24200],["교통비", 123000],["쇼핑",434000],["보험,적금",700000],["구독료",38900],["기타", 20000]];
const exampleImportData=[["송금",24200],["이자", 2000],["월급",4340000],["ㅇㅇ",700000],["bb",38900]];

const [isLogin, setIsLogin] = useState(false)
const [userName, setUserName] = useState(userId)
const [userProfileIcon, setUserProfileIcon] = useState('../../assets/images/userIcon.svg')
const [openModal, setOpenModal] = useState(false);
const [select, setSelect] = useState("")

//월별 소비현황
const MonthExpense = ({ consumptionExpense, consumptionImport }) => {
  return (
    <div className='monthExpenseContainer'>
      <div className="consumptionText">월별 소비현황</div>
      
      {/*토글형 버튼*/}
      <button 
        className={`consumptionBt${select === "소비" ? "on" : "off"}`}
        onClick={() => {
            setSelect(select === "소비" ? "" : "소비");
            setOpenModal(openModal?setOpenModal(false):setOpenModal(true));           
        }}
      >
        <div className='consumptionData'>
          <div className="consumptionBtText">지출</div>
          <div className="consumptionPrice">{"- " + consumptionExpense.toLocaleString()}</div>
        </div>
      </button>
      {/*토글형 버튼*/}
      <button
        className={`consumptionBt${select === "수입" ? "on" : "off"}`}
        onClick={() => {            
            setSelect(select === "수입" ?"" : "수입");
            setOpenModal(openModal?setOpenModal(false):setOpenModal(true)); 
          }}
      >
        <div className='consumptionData'>
          <div className="consumptionBtText">수입</div>
          <div className="consumptionPrice">{consumptionImport.toLocaleString()}</div>
        </div>
      </button>
      <button className="consumptionSum">{/*div로 바꾸는 경우 CSS 다 다시 수정;*/}
        <div className='consumptionData'>
          <div className="consumptionBtText">합계</div>
          <div className="consumptionPrice">{(consumptionImport - consumptionExpense).toLocaleString()}</div>
        </div>
      </button>
    </div>
  );
}
    useEffect(() => {
        if (userId && userPW) {
            setIsLogin(true);
            setUserName(userName);
            setUserProfileIcon(userProfileIcon)
        } else {
            setIsLogin(false);
            setUserName("로그인>");
        }
    }, [isLogin,userId,userPW,userName,userProfileIcon]);
    return (
    
      <div className={`EAcontainer${openModal?'Open':''}`}>
        <div className='EAmodal'> 
          <EAModal select={select} modalExpenseList={exampleExpenseData} modalImportList={exampleImportData} openModal={true} onClose={()=>{setOpenModal(false); setSelect('');}} onChange={(change)=>setSelect(change)}/>
          
        </div>
          <div className={`EAaside${openModal?'Open':''}`}>
              <div className='EAasideTab'>
                  <UserProfile isLogin={isLogin} userIcon={userProfileIcon} userName={userName} /> 
                  <MonthExpense consumptionExpense={(exampleExpenseData || []).reduce((acc, [_, amount]) => acc + amount, 0)} consumptionImport={(exampleImportData || []).reduce((acc, [_, amount]) => acc + amount, 0)} />
                  <ExpenseList exampleData={exampleExpenseData} />
              </div>
          </div>
          <div className={`EAcalendar${openModal?'Open':''}`}>
              <Calendar />
          </div>
        </div>
    );
}

export default ExpenseAnalysis;


//할 일
//캘린더 마무리

//월 별 지출 탭 컴포넌트로 다시 나누기

//모달 텝 합쳐서 만들기
    //모달 --매인
    //       └수입  
    //       └지출
    //       └추가 <<<<얘 만들기
    //