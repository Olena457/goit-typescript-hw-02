import { nanoid } from 'nanoid';

import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { UnsplashPhoto } from '../../App/App.types';
interface Image {
  id: string;
  urls: {
    small: string;
  };
  slug: string;
}

interface ImageGalleryProps {
  images: Image[];
  onClick: () => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onClick }) => {
  const transformedImages = images.map(image => ({
    ...image,
    urls: {
      small: image.urls.small,
    },
  }));

  return (
    <ul className={css.galleryList}>
      {transformedImages.map(image => (
        <ImageCard key={nanoid()} image={image} onClick={onClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
