import React, { useState } from 'react';
import './calender.css'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, isSunday, getMonth, setMonth} from 'date-fns';
const Calendar = () => {
  console.log("Rendering Calendar");

  const [currentDate, setCurrentDate] = useState(new Date());

  const days = ['SUN', 'MON', 'TUE ', 'WED', 'THU', 'FRI', 'SAT'];
  const exampleExpense = [["2025-04-23", 24000,400000],["2025-07-07", 32000, 200000],["2025-08-13", 2200000, 243000]];

  //캘린더 해더
  const CalendarHeader = ({ date, setDate }) => {
    const monthNames = [];
    for (let i = 1; i <= 12; i++) {
      monthNames.push(format(new Date(2020, i - 1), "MMMM"));
    }
      const options=monthNames.map((month, idx)=>(<option key={idx} value={idx}>
              {month}
            </option>))
    const handleMonthChange = (e) => {
      const selectedMonth = parseInt(e.target.value);
      const updatedDate = setMonth(date, selectedMonth);
      setDate(updatedDate);
  };

  return (
    <div className="calendar-header">
      <div className='calendar-month'>{format(date, 'MMMM')}</div>
      <select
        className="select-month"
        value={getMonth(date)} // 현재 월을 select에 보여주기 위해 value 설정
        onChange={handleMonthChange}
        >
        {options}
      </select>
    </div>
  );
};

// document.getElementById("mySelect")로 셀렉트 값 가져올수있음
  //캘린더 그리드
  const CalendarGrid = ({ date }) => {
    const startDate = startOfWeek(startOfMonth(date));
    const endDate = endOfWeek(endOfMonth(date));
    const days = [];

    let current = startDate;
    while (current <= endDate) {
      days.push(new Date(current));      
      current = addDays(current, 1);
    }

    //캘린더 각 날짜
    const CalendarCell = ({ date, isCurrentMonth,idx }) => {
      const [isSelected,setIsSelected]=useState(false);
      function dailyExpenseImport(){
        return isCurrentMonth?(
          <div className='daily-expense-import'>  
              <div className='daily-expense'>소비</div>          
              <div className='daily-import'>수입</div>
          </div>
        ):(null);
      }

      return (
        <button className={`calendar-cell ${isCurrentMonth ? '' : 'dimmed' }${isSelected?'selected':''}${idx}`} onClick={()=>setIsSelected(!isSelected)}>
          <div className={`date-number${isCurrentMonth?'':'-dimmed'}${isSunday(date)&&!isCurrentMonth?'-past':''}${ isSunday(date)&&isCurrentMonth?'-sunday':''}`}>{format(date, 'd')}</div>
          {dailyExpenseImport()}
        </button>
      );
    };
    return (
      <div className="calendar-grid">
        <div className='calendar-grid-cell'>
        {days.map((day, idx) => (
          <CalendarCell key={idx} date={day} isCurrentMonth={isSameMonth(day, date)} idx={idx}/>
        ))}
        </div>
      </div>
    );
  };
  
  //캘린더 요일
  const CalendarWeekDays = () => {
    return (
      <div className="weekdays">
        {days.map(day => (
          <div className="weekday" key={day}>{day}</div>
        ))}
      </div>
    );
  };



  //캘린더 메인 리턴
  return (
    <div className="calendar">
      <CalendarHeader date={currentDate} setDate={setCurrentDate} />
      <CalendarWeekDays />
      <CalendarGrid date={currentDate} />
      </div>
  );
};



export default Calendar;