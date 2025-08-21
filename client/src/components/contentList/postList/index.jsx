import React, { useState, useEffect } from 'react';
import './style.css';
import likeIcon from '../../../assets/icons/like.svg';
import likeActiveIcon from '../../../assets/icons/likeActive.svg';
import saveIcon from '../../../assets/icons/save.svg';
import saveActiveIcon from '../../../assets/icons/saveActive.svg';


const PostList = ({
  posts = [],
  type = 'all',
  onPostClick,
  onLikeClick,
  onBookmarkClick,
  className = ''
}) => {
  // 더미 데이터 생성 함수
  const getDummyPosts = (type) => {
    const basePosts = [
      { id: 1, title: '게시글 제목', author: '작성자', likes: 56, isBookmarked: false, createdAt: '25.00.00' },
      { id: 2, title: '두 번째 글 제목', author: '작성자', likes: 42, isBookmarked: true, createdAt: '25.00.00' },
      { id: 3, title: '세 번째 글 제목', author: '작성자', likes: 38, isBookmarked: false, createdAt: '25.00.00' },
      { id: 4, title: '네 번째 글 제목', author: '작성자', likes: 71, isBookmarked: false, createdAt: '25.00.00' },
      { id: 5, title: '다섯 번째 글 제목', author: '작성자', likes: 29, isBookmarked: true, createdAt: '25.00.00' },
      { id: 6, title: '여섯 번째 글 제목', author: '작성자', likes: 83, isBookmarked: false, createdAt: '25.00.00' },
      { id: 7, title: '일곱 번째 글 제목', author: '작성자', likes: 45, isBookmarked: false, createdAt: '25.00.00' },
      { id: 8, title: '여덟 번째 글 제목', author: '작성자', likes: 62, isBookmarked: true, createdAt: '25.00.00' },
      { id: 9, title: '아홉 번째 글 제목', author: '작성자', likes: 34, isBookmarked: false, createdAt: '25.00.00' },
      { id: 10, title: '열 번째 글 제목', author: '작성자', likes: 55, isBookmarked: false, createdAt: '25.00.00' },
    ];
    switch (type) {
      case 'myPosts':
        return basePosts.slice(0, 5).map(post => ({ ...post, title: `[내가 쓴] ${post.title}` }));
      case 'myComments':
        return basePosts.slice(2, 7).map(post => ({ ...post, title: `[댓글 단] ${post.title}` }));
      case 'savedPosts':
        return basePosts.filter(post => post.isBookmarked);
      default:
        return basePosts;
    }
  };

  // 북마크 상태 관리
  const [localPosts, setLocalPosts] = useState(posts.length > 0 ? posts : getDummyPosts(type));

  // type이나 posts가 바뀔 때마다 localPosts 동기화
  useEffect(() => {
    setLocalPosts(getDummyPosts(type));
  }, [type]);

  // 북마크 토글 핸들러
  const handleBookmarkClick = (e, postId) => {
    e.stopPropagation();
    setLocalPosts(prev =>
      prev.map(post =>
        post.id === postId ? { ...post, isBookmarked: !post.isBookmarked } : post
      )
    );
    if (onBookmarkClick) onBookmarkClick(postId);
  };

  // 좋아요 토글 핸들러
  const handleLikeClick = (e, postId) => {
    e.stopPropagation();
    setLocalPosts(prev =>
      prev.map(post => {
        if (post.id === postId) {
          const isLiked = !post.isLiked;
          const likes = isLiked ? post.likes + 1 : post.likes - 1;
          return { ...post, isLiked, likes };
        }
        return post;
      })
    );
    if (onLikeClick) onLikeClick(postId);
  };

  // 게시글 클릭 핸들러
  const handlePostClick = (post) => {
    if (onPostClick) onPostClick(post);
  };

  return (
    <div className={`post-list ${className}`}>
      {localPosts.map((post) => (
        <div
          key={post.id}
          className="post-item"
          onClick={() => handlePostClick(post)}
        >
          <div className="post-content">
            <h3 className="post-title">{post.title}</h3>
            <span className="post-author">{post.author}</span>
            <span className="post-date">{post.createdAt}</span>
          </div>
          <div className="post-actions">
            <button
              className={`like-button ${post.isLiked ? 'liked' : ''}`}
              onClick={(e) => handleLikeClick(e, post.id)}
            >
              <span className="like-count">{post.likes}</span>
              <img
                src={post.isLiked ? likeActiveIcon : likeIcon}
                alt="좋아요 아이콘"
                className="like-icon"
              />
            </button>
            <button
              className={`bookmark-button ${post.isBookmarked ? 'bookmarked' : ''}`}
              onClick={(e) => handleBookmarkClick(e, post.id)}
            >
              <img
                src={post.isBookmarked ? saveActiveIcon : saveIcon}
                alt="북마크 아이콘"
                className="bookmark-icon"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;