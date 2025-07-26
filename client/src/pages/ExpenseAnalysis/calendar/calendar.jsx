import React, { useState } from 'react';
import './calender.css'
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays, format, isSameMonth, setMonth } from 'date-fns';
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [month,setMonth]=useState({currentDate})
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const CalendarWeekDays = () => {
    return (
      <div className="weekdays">
        {days.map(day => (
          <div className="weekday" key={day}>{day}</div>
        ))}
      </div>
    );
  };
  const CalendarGrid = ({ date }) => {
    const startDate = startOfWeek(startOfMonth(date));
    const endDate = endOfWeek(endOfMonth(date));
    const days = [];

    let current = startDate;
    while (current <= endDate) {
      days.push(new Date(current));
      current = addDays(current, 1);
    }

    return (
      <div className="calendar-grid">
        {days.map((day, idx) => (
          <CalendarCell key={idx} date={day} isCurrentMonth={isSameMonth(day, date)} />
        ))}
      </div>
    );
  };
  const CalendarHeader = ({ date,month }) => {
    return (
      <div className="calendar-header">
        <h2>{format(date, 'MMMM')}</h2>
        <button onClick={month}>▽</button>
      </div>
    );
  };

  const CalendarCell = ({ date, isCurrentMonth }) => {
    return (
      <button className={`calendar-cell ${isCurrentMonth ? '' : 'dimmed'}`}>
        <div className="date-number">{format(date, 'd')}</div>
      </button>
    );
  };



  return (
    <div className="calendar">
      <CalendarHeader date={currentDate} month={month} />
      <CalendarWeekDays />
      <CalendarGrid date={currentDate} />
    </div>
  );
};



export default Calendar;