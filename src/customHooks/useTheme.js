import React, { createContext, useContext, useEffect, useState } from "react";

// Create a ThemeContext
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme") || "dark";
    const html = document.querySelector("html");
    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
      html.setAttribute("data-theme", "dark");
      html.setAttribute("style", "color-scheme: dark;");
    } else if (theme === "light") {
      localStorage.setItem("theme", "light");
      html.setAttribute("data-theme", "light");
      html.setAttribute("style", "color-scheme: light;");
    } else {
      setTheme(localTheme);
      localStorage.setItem("theme", localTheme);
      html.setAttribute("data-theme", localTheme);
      html.setAttribute("style", `color-scheme: ${localTheme};`);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
