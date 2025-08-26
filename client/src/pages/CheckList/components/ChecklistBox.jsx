import React, { useState } from 'react';
import './ChecklistBox.css'; 
import check from '../../../assets/images/checklist/check.svg';
import arrow from '../../../assets/images/checklist/arrow.svg';

const ChecklistBox = ({ items, onArrowClick, onDeleteClick, isEditing, onUpdateTask }) => {
    if (items.length === 0 && isEditing) {
        return null;
    }
    
    return (
        <div className="checklistbox">
            <ul className="checklist-ul">
                {items.length > 0 ? (
                    items.map((item, index) => (
                    <ChecklistItem 
                        key={index} 
                        text={item}
                        onArrowClick={() => onArrowClick(index)} 
                        onDeleteClick={() => onDeleteClick(index)}
                        isEditing={isEditing}
                        onUpdate={(newText) => onUpdateTask(index, newText)}
                    />
                    ))
                ) : (
                    <li className="no-item">항목이 없어요!</li>
                )}
            </ul>
        </div>
    );
};
export default ChecklistBox;


//체크리스트 한줄한줄에 이용할 컴포넌트
const ChecklistItem = ({ text, onArrowClick, onDeleteClick, isEditing, onUpdate }) => {
    const [checked, setChecked] = useState(false);
    const [isEditingItem, setIsEditingItem] = useState(false);
    const [editValue, setEditValue] = useState(text);

    const handleCheck = (e) => {
        e.stopPropagation();
        setChecked(!checked);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        const confirmDelete = window.confirm("이 항목을 삭제하시겠습니까?");
        if (confirmDelete && onDeleteClick) {
            onDeleteClick();
        }
    };

    const handleNextDay = (e) => {
        e.stopPropagation();
        if (onArrowClick) onArrowClick()
    };

    const handleBlur = () => {
        setIsEditingItem(false);
        onUpdate(editValue);
    }

    return (
        <li className={`checklist-item ${checked ? 'checked' : ''}`}>
            <div className='checklist-content'>
            {isEditing && isEditingItem ? (
            <input
                className="checklist-edit-input"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={handleBlur}
                autoFocus
            />
            ) : (
            <span 
                className="checklist-text"
                onClick={() => isEditing && setIsEditingItem(true)}
                > {editValue}</span>
            )}
            </div>
            
            {isEditing ? (
            <button className='delete-btn' onClick={handleDelete}>삭제</button>
            ) : (
            <div className="checklist-icons">
                <img src={check} alt="check" id="check" onClick={handleCheck} />
                <img src={arrow} alt="arrow" id="arrow" onClick={handleNextDay} />
            </div>
            )}
        </li>
    );
};

