import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/common/button';
import Pagination from '../../components/common/pagination';
import PostList from '../../components/contentList/postList';
import userIcon from '../../assets/images/userIcon.svg';
import rightArrow from '../../assets/images/rightArrow.svg';
import './style.css';

const Community = () => {
  const [activeTab, setActiveTab] = useState('커뮤니티');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(8);
  const location = useLocation();
  const navigate = useNavigate();

  // 네비게이션에서 커뮤니티로 이동할 때마다 상태 초기화
  useEffect(() => {
    setActiveTab('커뮤니티');
    setCurrentPage(1);
  }, [location.key]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setCurrentPage(1);
  };

  const handleWritePost = () => {
    navigate('/community/write');
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePostClick = (post) => {
    console.log('게시글 클릭:', post);
    // 추후 게시글 상세 페이지로 이동
  };

  const handleLikeClick = (postId) => {
    console.log('좋아요 클릭:', postId);
    // 추후 좋아요 API 호출
  };

  const handleBookmarkClick = (postId) => {
    console.log('북마크 클릭:', postId);
    // 추후 북마크 API 호출
  };

  const renderContent = () => {
    let postType = 'all'; // 기본값: 전체 글
    
    switch (activeTab) {
      case '내가 쓴 글':
        postType = 'myPosts';
        break;
      case '내가 쓴 댓글':
        postType = 'myComments';
        break;
      case '저장된 글':
        postType = 'savedPosts';
        break;
      default:
        postType = 'all';
    }

    return (
      <PostList
        type={postType}
        onPostClick={handlePostClick}
        onLikeClick={handleLikeClick}
        onBookmarkClick={handleBookmarkClick}
        className="community-post-list"
      />
    );
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
          <div className="content-main">
            {renderContent()}
          </div>

          {/* 모든 탭에서 페이지네이션 표시 (하단 고정) */}
          <div className="pagination-fixed">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              className="community-pagination"
            />
          </div>
        </div>

        {/* 오른쪽: 사이드바 */}
        <div className="community-sidebar">
          {/* 프로필 섹션 */}
          <div className="profile-section">
            <h3 className="profile-title">내 프로필</h3>
            <div className="profile-info">
              <div className="profile-avatar">
                <img src={userIcon} alt="User Avatar" />
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
              <h3 className="activity-title">내 활동</h3>
            </div>
            
            <div className="activity-tabs">
              <Button
                variant={activeTab === '내가 쓴 글' ? 'primary' : 'ghost'}
                size="small"
                className="activity-tab"
                onClick={() => handleTabClick('내가 쓴 글')}
              >
                내가 쓴 글 12
                <img src={rightArrow} alt="Right Arrow" className="activity-icon" />
              </Button>
              
              <Button
                variant={activeTab === '내가 쓴 댓글' ? 'primary' : 'ghost'}
                size="small"
                className="activity-tab"
                onClick={() => handleTabClick('내가 쓴 댓글')}
              >
                내가 쓴 댓글 35
                <img src={rightArrow} alt="Right Arrow" className="activity-icon" />
              </Button>
              
              <Button
                variant={activeTab === '저장된 글' ? 'primary' : 'ghost'}
                size="small"
                className="activity-tab"
                onClick={() => handleTabClick('저장된 글')}
              >
                저장된 글 7
                <img src={rightArrow} alt="Right Arrow" className="activity-icon" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
