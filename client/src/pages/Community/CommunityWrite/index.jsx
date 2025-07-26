import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/common/button';
import './style.css';

const CommunityWrite = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }
    
    // 글 작성 로직 (추후 API 연동)
    console.log('글 작성:', { title, content });
    
    // 성공 후 커뮤니티 페이지로 이동
    navigate('/community');
  };

  const handleCancel = () => {
    navigate('/community');
  };

  return (
    <div className="write-container">
      <div className="write-header">
        <h1 className="write-title">글 작성하기</h1>
      </div>
      
      <div className="write-content">
        <div className="write-form">
          <div className="write-form-group">
            <input
              id="post-title"
              type="text"
              className="write-form-input"
              placeholder="제목을 입력해 주세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div className="write-form-group">
            <textarea
              id="post-content"
              className="write-form-textarea"
              placeholder="내용을 입력해 주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={15}
            />
          </div>
          
          <div className="write-form-actions">
            <Button
              variant="ghost"
              size="medium"
              onClick={handleCancel}
              className="write-cancel-button"
            >
              취소
            </Button>
            <Button
              variant="warning"
              size="medium"
              onClick={handleSubmit}
              className="write-submit-button"
            >
              업로드
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityWrite;
