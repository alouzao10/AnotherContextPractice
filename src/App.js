import React, { useState } from 'react';

import ClassContext from './Context/ClassContext';
import FunctionalContext from './Context/FunctionContext';

export const ThemeContext = React.createContext();

function App() {
  const [darkTheme, setTheme] = useState(true);

  function toggleTheme() {
    setTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <FunctionalContext />
      <ClassContext />
    </ThemeContext.Provider>
  );
}

export default App;
