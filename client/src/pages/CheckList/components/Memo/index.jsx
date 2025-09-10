import React, { useState } from 'react';
import writer from '../../../../assets/images/checklist/writer.png';
import './style.css'

const Memo = () => {
    // 편집 상태
    const [isEditingGoal, setIsEditingGoal] = useState(false);
    const [isEditingMemo, setIsEditingMemo] = useState(false);

    // 실제 저장 값
    const [goalText, setGoalText] = useState('');
    const [memoText, setMemoText] = useState('');

    // 편집 중 임시 값
    const [tempGoal, setTempGoal] = useState(goalText);
    const [tempMemo, setTempMemo] = useState(memoText);

    // 블러 시 저장
    const handleBlurGoal = () => {
        setGoalText(tempGoal);
        setIsEditingGoal(false);
    };
    const handleBlurMemo = () => {
        setMemoText(tempMemo);
        setIsEditingMemo(false);
    };   

    return (
        <div>
            {/* 목표 영역 */}
            <div className='goal-box'>
                <div className='box-header'>
                    이달의 목표 
                    <img 
                        src={writer} 
                        alt="writer" 
                        id='writer'
                        onClick={() => {
                            setTempGoal(goalText);
                            setIsEditingGoal(true);
                        }}
                        style={{cursor: 'pointer'}}
                    />
                </div>
                {isEditingGoal ? (
                    <input
                        className='goal-write-input'
                        value={tempGoal}
                        onChange={(e) => setTempGoal(e.target.value)}
                        onBlur={handleBlurGoal}
                        placeholder="목표를 입력해주세요!"
                        autoFocus
                    />
                ) : (
                    <p className='goal-write'>{goalText || '목표를 입력해주세요!'}</p>
                )}  
            </div>

            {/* 메모 영역 */}
            <div className='memo-box'>
                <div className='box-header'>
                    메모 
                    <img 
                        src={writer} 
                        alt="writer" 
                        id='writer'
                        onClick={() => {
                            setTempMemo(memoText);
                            setIsEditingMemo(true);
                        }}
                        style={{cursor: 'pointer'}}
                    />
                </div>
                {isEditingMemo ? (
                    <textarea
                        className='memo-write-input'
                        value={tempMemo}
                        onChange={(e) => setTempMemo(e.target.value)}
                        onBlur={handleBlurMemo}
                        placeholder="메모를 입력해주세요!"
                        autoFocus
                    />
                ) : (
                    <div className='memo-write' style={{ whiteSpace: 'pre-wrap' }}>
                        {memoText || '메모를 입력해주세요!'}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Memo;
