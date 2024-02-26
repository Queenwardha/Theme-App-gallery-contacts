import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DarkModeToggle from './DarkModeToggle';
import OnlineStatusIndicator from './OnlineStatusIndicator';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const HomeScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { darkMode } = useContext(ThemeContext); // Access darkMode state from ThemeContext

  const handleLogin = () => {
    // Your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}> {/* Apply dark mode styles */}
      <DarkModeToggle />
      <OnlineStatusIndicator />
      <View style={styles.formContainer}>
        <Text style={[styles.title, darkMode && styles.darkModeText]}>Login</Text> {/* Apply dark mode text color */}
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={[styles.button, darkMode && styles.darkModeButton]} onPress={handleLogin}> {/* Apply dark mode button color */}
          <Text style={[styles.buttonText, darkMode && styles.darkModeButtonText]}>Login</Text> {/* Apply dark mode text color */}
        </TouchableOpacity>
      </View>
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
  formContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000', // Default text color
  },
  darkModeText: {
    color: '#ffffff', // Dark mode text color
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#000000', // Default text color
    backgroundColor: '#ffffff', // Default background color
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  darkModeButton: {
    backgroundColor: 'black', // Dark mode button color
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  darkModeButtonText: {
    color: '#ffffff', // Dark mode button text color
  },
});

export default HomeScreen;
