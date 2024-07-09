import css from './LoadMoreBtn.module.css';
import React from 'react';

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick} className={css.loadMore}>
        Load more
      </button>
    </>
  );
};
export default LoadMoreBtn;
