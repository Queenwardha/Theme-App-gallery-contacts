import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const AboutScreen = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode state from ThemeContext

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}> {/* Apply dark mode styles */}
      {darkMode ? (
        <Text style={[styles.message, styles.darkModeText]}>
          This is a React Native app.
        </Text>
      ) : (
        <Text style={styles.message}>
          This is a React Native app.
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  darkModeContainer: {
    backgroundColor: '#333333', // Dark mode background color
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    color: '#000000', // Default text color
  },
  darkModeText: {
    color: '#ffffff', // Dark mode text color
  },
});

export default AboutScreen;
