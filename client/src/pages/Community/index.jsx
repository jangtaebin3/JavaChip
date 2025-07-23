import React, { useState } from 'react';
import Button from '../../components/common/button';
import './style.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('커뮤니티');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleWritePost = () => {
    // 글 작성 페이지로 이동하는 로직 (추후 구현)
    console.log('글 작성하기');
  };

  return (
    <div className="community-container">
      {/* 헤더 */}
      <div className="community-header">
        <h1 className="community-title">{activeTab}</h1>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="community-content">
        {/* 왼쪽: 현재 선택된 탭의 내용 표시 */}
        <div className="content-section">
          <div className="content-placeholder">
            {activeTab === '커뮤니티' ? (
              <>
                <h2>커뮤니티에 오신 것을 환영합니다!</h2>
                <p>우측 메뉴에서 원하는 활동을 선택해주세요.</p>
                <p>내가 쓴 글, 댓글, 저장된 글을 확인할 수 있습니다.</p>
              </>
            ) : (
              <>
                <h2>{activeTab} 목록입니다</h2>
                <p>이 영역에 {activeTab}에 해당하는 컴포넌트가 들어갈 예정입니다.</p>
              </>
            )}
          </div>
        </div>

        {/* 오른쪽: 사이드바 */}
        <div className="community-sidebar">
          {/* 프로필 섹션 */}
          <div className="profile-section">
            <h3 className="profile-title">내 프로필</h3>
            <div className="profile-info">
              <div className="profile-avatar">
                <div className="avatar-circle">
                  <div className="avatar-icon">👤</div>
                </div>
              </div>
              <div className="profile-name">사용자 이름</div>
            </div>
            
            {/* 글 작성하기 버튼 */}
            <div className="write-button-container">
              <Button 
                variant="warning"
                size="medium"
                className="write-button"
                onClick={handleWritePost}
              >
                글 작성하기
              </Button>
            </div>
          </div>

          {/* 내 활동 섹션 */}
          <div className="activity-section">
            <div className="activity-header">
              <h3 className="activity-title">내 활동 {'>'}</h3>
            </div>
            
            <div className="activity-tabs">
              <Button
                variant={activeTab === '내가 쓴 글' ? 'primary' : 'ghost'}
                size="small"
                className="activity-tab"
                onClick={() => handleTabClick('내가 쓴 글')}
              >
                내가 쓴 글 12
              </Button>
              
              <Button
                variant={activeTab === '내가 쓴 댓글' ? 'primary' : 'ghost'}
                size="small"
                className="activity-tab"
                onClick={() => handleTabClick('내가 쓴 댓글')}
              >
                내가 쓴 댓글 35
              </Button>
              
              <Button
                variant={activeTab === '저장된 글' ? 'primary' : 'ghost'}
                size="small"
                className="activity-tab"
                onClick={() => handleTabClick('저장된 글')}
              >
                저장된 글 7
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
