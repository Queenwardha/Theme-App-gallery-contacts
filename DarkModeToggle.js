import React, { useContext } from 'react';
import { Switch } from 'react-native';
import { ThemeContext } from './ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <Switch
      value={darkMode}
      onValueChange={toggleDarkMode}
    />
  );
};

export default DarkModeToggle;
