import React, { useContext, useState } from 'react';

// Cretae Context for the different levels of the Components
const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

// Custom Hooks to access the individual Context
export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeUpdateContext);
}

// Main Provider that will pass down values to nested Components
export function ThemeProvider({ children }) {
  // Create the state we want to use
  const [darkTheme, setTheme] = useState(false);

  // Any function for how we manage our state
  function toggleTheme() {
    setTheme((prevDarkTheme) => !prevDarkTheme);
  }

  // Pass the values down into the children using the created Context variables
  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
