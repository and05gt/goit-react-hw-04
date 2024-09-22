import style from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const { urls, alt_description } = image;
  const { regular, small } = urls;

  return (
    <div className={style.imgWrapper}>
      <img
        className={style.imgCard}
        src={small}
        alt={alt_description}
        onClick={() => openModal({ regular, alt_description })}
      />
    </div>
  );
};

export default ImageCard;
