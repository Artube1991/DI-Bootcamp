import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const body = document.getElementsByTagName("body")[0]

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("lightblue");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "lightblue" ? "darkslateblue" : "lightblue"));
    body.setAttribute('style', `background-color:${theme}`);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { ThemeProvider, useTheme };