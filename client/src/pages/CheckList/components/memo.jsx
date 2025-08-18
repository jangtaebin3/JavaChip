import React from 'react';
import writer from '../../../assets/images/checklist/writer.png';
import './memo.css'

const Memo = () => {
    return (
        <div>
            <div className='goal-box'>
                <div className='box-header'>
                    이달의 목표 <img src={writer} alt="writer" id='writer'/>
                </div>
                <p className='goal-write'>목표를 입력하세요!</p>
            </div>
            <div className='memo-box'>
                <div className='box-header'>
                    메모 <img src={writer} alt="writer" id='writer'/>
                </div>
            </div>
        </div>
    );
};
export default Memo;
