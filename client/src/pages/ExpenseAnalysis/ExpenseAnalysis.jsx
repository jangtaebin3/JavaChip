import { useState, useEffect } from 'react'

import Calendar from './calendar/calendar.jsx';
import ExpenseList from './expenseList/expenseList.jsx';
import UserProfile from './userInfo/userInfo.jsx';
import EAModal from './modal/EAModal.jsx';
import './ExpenseAnalysis.css';



const ExpenseAnalysis = () => {//당 월 1일부터 31일 혹은 30일까지의 소비 및 소비 카테고리 배열을 받아옴
let category = "category"
let userId = ""
let userPW = "examplePW"

const exampleExpenseData=[["식비",24200],["교통비", 123000],["쇼핑",434000],["보험,적금",700000],["구독료",38900]];
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
          setOpenModal(openModal?setOpenModal(false):setOpenModal(true)) 
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
          setSelect(select === "수입" ? "" : "수입"); 
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

//지출 합계
function ELCalc(expense) {//(expense, category)//소비 하나 배열이[category, price]인가?
    let ELsum = 0;
    for (let i = 0; i < expense.length; i++) {//나중에 useState를 이용해서 소비가 선택된경우 입력된 금액은 expense로 수입으로 입력된 경우는 import로
        if (expense[i]) {//조건에 카테고리도 넣기{"식비"}<<<<얘도 선택????
            ELsum += expense[i]
        }
        else {

        }
    }
    return ELsum;
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
        <div className='EAOverlay'>
        <div className='EAcontainer'>
            <div className='EAaside'>
                <div className='EAasideTab'>
                    <UserProfile isLogin={isLogin} userIcon={userProfileIcon} userName={userName} />
                    <MonthExpense consumptionExpense={  (exampleExpenseData || []).reduce((acc, [_, amount]) => acc + amount, 0)} consumptionImport={(exampleImportData || []).reduce((acc, [_, amount]) => acc + amount, 0)} />
                    <ExpenseList categoryIndex={1} category={category} sum={ELCalc([23000, 1023510])} />
                </div>
            </div>
            <div className="EAcalendar">
                {/* <Calendar /> */}
            </div>
            <div className='EAmodal'> 
                <EAModal select={select} modalPriceList={exampleExpenseData} modalImportList={exampleImportData} openModal={openModal}/>
            </div>
        </div>
            
        </div>
    );
}

export default ExpenseAnalysis;