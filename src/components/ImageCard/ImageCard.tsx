import css from './ImageCard.module.css';
interface Image {
  id: string;
  urls: {
    small: string;
  };
  slug: string;
}

interface ImageCardProps {
  image: Image;
  onClick: (image: Image) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div>
      {/* <img src={image.webformatURL} alt={image.tags} /> */}
      <img
        className={css.itemImg}
        src={image.urls.small}
        alt={image.slug}
        key={image.id}
        onClick={() => onClick(image)}
      />
      {/* <p>{image.description}</p> */}
    </div>
  );
};

export default ImageCard;
