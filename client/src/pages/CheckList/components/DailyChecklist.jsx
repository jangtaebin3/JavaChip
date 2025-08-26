import React, { useState } from 'react';
import './DailyChecklist.css'
import ChecklistBox from './ChecklistBox';

const DailyChecklist = ({date, tasks, onMoveTask, onDeleteTask, isEditing, onAddTask, onUpdateTask }) => {
    const [newTask, setNewTask] = useState('');
    const [isAdding, setIsAdding] = useState(false);

    const handleAdd = () => {
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask('');
            setIsAdding(false);
        }
    };

    return (
        <div className="daily-checklist">
            <h3 className='date-circle'>{date}</h3>
            <div className='daily-checklist-content'>
                <ChecklistBox 
                    items={tasks} 
                    onArrowClick={onMoveTask} 
                    onDeleteClick={onDeleteTask}
                    isEditing={isEditing}
                    onUpdateTask={onUpdateTask}
                />
                {isEditing && (
                    <div className="add-task-box">
                        <div>
                            <input
                                type="text"
                                placeholder='추가할 항목을 입력해주세요!'
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                className='add-task-input' 
                            />
                            <button onClick={handleAdd} className='add-btn'>추가</button>
                        </div>   
                    </div>
                )}
            </div>
        </div>
    );
};
export default DailyChecklist;
