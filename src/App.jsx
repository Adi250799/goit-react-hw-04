import { useGetImages } from "./Hooks/useGetImages";

import { SearchBar } from "./components/SearchBar/SearchBar";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage";
import { Loader } from "./components/Loader/Loader";
import { ImageGallery } from "./components/ImageGallery/ImageGallery";
import { LoadMoreBtn } from "./components/LoadMoreBtn/LoadMoreBtn";
import { ModalWindow } from "./components/ModalWindow/ModalWindow";
import { useContext, useState } from "react";
import { imageContext } from "./providers/ImageProvider";

export const App = () => {
  const { gallery, isLoading, error, getImgs, getMoreImg } = useGetImages();
  const [modalIsOpen, setIsOpen] = useState(false);
  const { image } = useContext(imageContext);

  const openModal = (src) => {
    setIsOpen(true);
    console.log(src);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar getImgs={getImgs} />
      {error ? (
        <ErrorMessage />
      ) : (
        <ImageGallery gallery={gallery} openModal={openModal} />
      )}
      {isLoading ? <Loader /> : null}
      {gallery.length > 0 ? (
        <LoadMoreBtn getMoreImg={getMoreImg} />
      ) : error ? (
        <ErrorMessage />
      ) : null}
      <ModalWindow src={image} open={modalIsOpen} close={closeModal} />
    </>
  );
};