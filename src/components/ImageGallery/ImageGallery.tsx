// import { nanoid } from 'nanoid';
import { FC } from 'react';
import css from './ImageGallery.module.css';
import { ImageCard } from '../ImageCard/ImageCard';
import { UnsplashPhoto } from '../../App/App.types';

export interface ImageGalleryProps {
  items: UnsplashPhoto[];
  onClick: (items: UnsplashPhoto) => void;
}
const ImageGallery: FC<ImageGalleryProps> = ({ items, onClick }) => {
  return (
    <ul className={css.galleryList}>
      {items.map(item => (
        <ImageCard key={item.id} item={item} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
