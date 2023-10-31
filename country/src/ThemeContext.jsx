import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const handleTheme = () => {
    setTheme(!theme);
  };
  console.log(theme, "count");

  const contextValue = { theme, handleTheme };
  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
