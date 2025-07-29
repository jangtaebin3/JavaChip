import React from 'react';
import './style.css';

const Pagination = ({
  currentPage = 1,
  totalPages = 2,
  onPageChange,
  className = ''
}) => {
  const handlePageClick = (page) => {
    if (page !== currentPage && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleFirst = () => {
    if (currentPage !== 1) {
      onPageChange(1);
    }
  };

  const handleLast = () => {
    if (currentPage !== totalPages) {
      onPageChange(totalPages);
    }
  };

  // 페이지 번호 배열 생성
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          className={`pagination-number ${i === currentPage ? 'active' : ''}`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className={`pagination-container ${className}`}>
      {/* 맨 처음으로 */}
      <button
        className={`pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handleFirst}
        disabled={currentPage === 1}
      >
        ≪
      </button>

      {/* 이전 페이지 */}
      <button
        className={`pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        ‹
      </button>

      {/* 페이지 번호들 */}
      {renderPageNumbers()}

      {/* 다음 페이지 */}
      <button
        className={`pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        ›
      </button>

      {/* 맨 마지막으로 */}
      <button
        className={`pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
        onClick={handleLast}
        disabled={currentPage === totalPages}
      >
        ≫
      </button>
    </div>
  );
};

export default Pagination;
