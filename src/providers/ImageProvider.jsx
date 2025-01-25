import { createContext, useState } from "react";

export const imageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [image, setImage] = useState("");

  return (
    <imageContext.Provider value={{ image, setImage }}>
      {children}
    </imageContext.Provider>
  );
};