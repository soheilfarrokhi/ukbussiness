// MyContext.js
import React, { createContext, useContext, useState } from "react";

// Create a new context
const HomeContext = createContext();

// Create a provider component
export function HomeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <HomeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </HomeContext.Provider>
  );
}

// Create a custom hook to use the context
export function useHomeContext() {
  return useContext(HomeContext);
}
