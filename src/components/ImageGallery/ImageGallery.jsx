import css from "./ImageGallery.module.css";

import ImageCard from '../ImageCard/ImageCard';

import { useContext } from "react";
import { imageContext } from "../../providers/ImageProvider";

export const ImageGallery = ({ gallery, openModal }) => {
  const { setImage } = useContext(imageContext);

  return gallery.length > 0 ? (
    <>
      <ul className={css.gallery}>
        {gallery.map((img) => (
          <li
            key={img.id}
            className={css.item}
            onClick={() => {
              openModal();
              setImage(img.urls.regular);
            }}
          >
            <ImageCard src={img.urls.small} alt={img.alt_description} />
          </li>
        ))}
      </ul>
    </>
  ) : null;
};