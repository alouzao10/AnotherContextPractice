import React, { useState, createContext } from 'react';

//import ClassContext from './Components/ClassContext';
import FunctionContext from './Components/FunctionContext';

//export const ThemeContext = createContext();
import { ThemeProvider } from './Context/Context.js';

function App() {
  return (
    <ThemeProvider>
      <FunctionContext />
    </ThemeProvider>
  );
}

export default App;
