import React from 'react';
import './DailyChecklist.css'
import ChecklistBox from './ChecklistBox';

const DailyChecklist = ({date, tasks, onMoveTask, onDeleteTask }) => {

    return (
        <div>
            <div className="daily-checklist">
                <h3 className='date-circle'>{date}</h3>
                <ChecklistBox 
                    items={tasks}
                    onArrowClick={onMoveTask}
                    onDeleteClick={onDeleteTask}
                />
            </div>
        </div>
    );
};
export default DailyChecklist;
