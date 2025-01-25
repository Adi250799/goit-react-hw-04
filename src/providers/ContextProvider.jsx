import { createContext, useState } from "react";

export const queryContext = createContext();

export const ContextProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <queryContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </queryContext.Provider>
  );
};