import React, { useState } from 'react'; 
import './CheckList.css'
import writer from '../../assets/images/checklist/writer.png'
import DailyChecklist from './components/DailyChecklist/index.jsx'
import Memo from './components/Memo/index.jsx'

const checklistData = [{
    month: "7월",
    days: [
        { date: "2일", tasks: ["뭐뭐 하기", "뭐뭐 하기", "뭐뭐 하기"] },
        { date: '3일', tasks: [] },
        { date: "4일", tasks: ["뭐뭐 하기", "뭐뭐 하기", "뭐뭐 하기"] },
        { date: "5일", tasks: ["뭐뭐 하기", "뭐뭐 하기", "뭐뭐 하기"] },
        { date: "6일", tasks: ["뭐뭐 하기", "뭐뭐 하기"] },
        { date: "7일", tasks: ["뭐뭐 하기"] },
        { date: "8일", tasks: [] }]
    }
]


const ChecklistPage = () => {
    const [data, setData] = useState(checklistData);
    const [isEditing, setIsEditing] = useState(false);

    //체크리스트 항목을 다음 날로 이동
    const handleMoveTaskToNextDay = (monthIndex, dayIndex, taskIndex) => {
        setData(prev => {
            const newData = JSON.parse(JSON.stringify(prev));  //복사
            const currentMonth = newData[monthIndex];
            const currentDay = currentMonth.days[dayIndex];

            //다음 날짜가 존재할 경우에만 이동
            if (dayIndex < currentMonth.days.length - 1) {
                const task = currentDay.tasks.splice(taskIndex, 1)[0]; //현재 날짜에서 제거
                currentMonth.days[dayIndex + 1].tasks.push(task);  //다음 날짜에 추가
            } else {
                alert('다음 날짜가 없습니다.');
            }
            return newData;
        });
    };

    //항목 삭제 기능 (수정모드)
    const handleDeleteTask = (monthIndex, dayIndex, taskIndex) => {
        setData(prev => {
            const newData = JSON.parse(JSON.stringify(prev));
            newData[monthIndex].days[dayIndex].tasks.splice(taskIndex, 1);
            return newData;
        });
    }   

    //항목 추가 (수정모드)
    const handleAddTask = (monthIndex, dayIndex, newTask) => {
        if (!newTask.trim()) return;
        setData(prev => {
            const newData = JSON.parse(JSON.stringify(prev));
            newData[monthIndex].days[dayIndex].tasks.push(newTask);
            return newData;
        });
    };

    //항목 수정 (수정모드)
    const handleUpdateTask = (monthIndex, dayIndex, taskIndex, newText) => {
        setData(prev=> {
            const newData = JSON.parse(JSON.stringify(prev));
            newData[monthIndex].days[dayIndex].tasks[taskIndex] = newText;
            return newData;
        })
    };

    return (
        <div className='page-container'>
            <div className="checklist-page">
                <h2 style={{ fontSize: '28px', fontWeight: 700, marginTop: '0px'}}>체크리스트</h2>
                {data.map((monthData, monthIdx) => (
                    <div key={monthData.month}>
                        <div className='checklist-header'>
                            <h2>{monthData.month}</h2>
                            <button className='edit-button' 
                            onClick={() => setIsEditing(!isEditing)}>
                                {isEditing ? '수정완료' : '수정하기'}
                                <img src={writer} alt="writer" id='writer'/>
                            </button>
                        </div>
                        <div className='checklist-main'>
                        {monthData.days.map((day, dayIdx) => (
                            <DailyChecklist
                                key={day.date}
                                month={monthData.month}
                                date={day.date}
                                tasks={day.tasks}
                                onMoveTask={(taskIndex) =>
                                    handleMoveTaskToNextDay(monthIdx, dayIdx, taskIndex)
                                }
                                onDeleteTask={(taskIndex) =>
                                    handleDeleteTask(monthIdx, dayIdx, taskIndex)
                                }
                                isEditing={isEditing}
                                onAddTask={(newTask) =>
                                    handleAddTask(monthIdx, dayIdx, newTask)
                                }
                                onUpdateTask={(taskIndex, newText) =>
                                    handleUpdateTask(monthIdx, dayIdx, taskIndex, newText)
                                }/>                       
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className='memo-page'>
                <Memo />
            </div>
        </div>
    );
};
export default ChecklistPage;
