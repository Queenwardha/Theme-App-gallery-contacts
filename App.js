import React, { useState } from 'react';
import { ThemeContext, themes } from './ThemeContext';
import Navigation from './Navigation';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <Navigation />
      <DarkModeToggle /> {/* Add the DarkModeToggle component here */}
    </ThemeContext.Provider>
  );
};

export default App;
