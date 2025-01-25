import { useState } from "react";
import { fetchPhotos } from "../API/API";

export const scrollToBottom = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(scrollBy(0, document.body.scrollHeight, { behavior: "smooth" }));
    }, 0);
  });

export const useGetImages = () => {
  const [gallery, setGallery] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getImgs = async (query) => {
    try {
      setIsLoading(true);
      const photos = await fetchPhotos(query);
      setGallery(photos);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getMoreImg = async (query, page) => {
    try {
      setIsLoading(true);
      const photos = await fetchPhotos(query, page);
      setGallery((prev) => [...prev, ...photos]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    gallery,
    isLoading,
    error,
    getImgs,
    getMoreImg,
  };
};