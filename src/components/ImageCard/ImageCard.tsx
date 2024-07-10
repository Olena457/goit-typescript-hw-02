import { FC } from 'react';
import css from './ImageCard.module.css';
import { UnsplashPhoto } from '../../App/App.types';

interface ImageCardProps {
  item: UnsplashPhoto;
  onClick: (item: UnsplashPhoto) => void;
}

export const ImageCard: FC<ImageCardProps> = ({ item, onClick }) => {
  const { urls, alt_description } = item;
  const handlerClick = () => {
    onClick(item);
  };
  return (
    <div>
      <img
        className={css.itemImg}
        src={urls.small}
        alt={alt_description}
        onClick={handlerClick}
      />
    </div>
  );
};
