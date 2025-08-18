import React, { useState } from 'react';
import './ChecklistBox.css'; 
import check from '../../../assets/images/checklist/check.svg';
import x from '../../../assets/images/checklist/x.svg';
import arrow from '../../../assets/images/checklist/arrow.svg';

const ChecklistBox = ({ items, onArrowClick, onDeleteClick }) => {
    return (
        <div className="checklistbox">
            <ul className="checklist-ul">
                {items.length > 0 ? (
                    items.map((item, index) => (
                    <ChecklistItem 
                        key={index} 
                        text={item} 
                        onArrowClick={() => onArrowClick(index)} 
                        onDeleteClick={() => onDeleteClick(index)}/>
                    ))
                ) : (
                    <ul className="no-item">항목이 없어요!</ul>
                )}
            </ul>
        </div>
    );
};
export default ChecklistBox;


//체크리스트 한줄한줄에 이용할 컴포넌트
const ChecklistItem = ({ text, onArrowClick, onDeleteClick }) => {
    const [checked, setChecked] = useState(false);

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

    return (
        <li className={`checklist-item ${checked ? 'checked' : ''}`}>
            <span className="checklist-text">{text}</span>
            <div className="checklist-icons">
                <img src={check} alt="check" id="check" onClick={handleCheck} />
                <img src={x} alt="x" id="x" onClick={handleDelete} />
                <img src={arrow} alt="arrow" id="arrow" onClick={handleNextDay} />
            </div>
        </li>
    );
};

