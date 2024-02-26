import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from './ThemeContext'; // Import ThemeContext

const CalculatorScreen = () => {
  const { darkMode } = useContext(ThemeContext); // Access darkMode state from ThemeContext

  const [displayValue, setDisplayValue] = useState('0');
  const [prevValue, setPrevValue] = useState('');
  const [currentValue, setCurrentValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberPress = (num) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num.toString());
    }
  };

  const handleOperatorPress = (op) => {
    if (operator !== '') {
      handleEqualPress();
      setOperator(op);
      setPrevValue(displayValue);
      setCurrentValue('');
    } else {
      setOperator(op);
      setPrevValue(displayValue);
      setDisplayValue('0');
    }
  };

  const handleEqualPress = () => {
    const prev = parseFloat(prevValue);
    const current = parseFloat(displayValue);

    switch (operator) {
      case '+':
        setDisplayValue((prev + current).toString());
        break;
      case '-':
        setDisplayValue((prev - current).toString());
        break;
      case 'x':
        setDisplayValue((prev * current).toString());
        break;
      case '÷':
        setDisplayValue((prev / current).toString());
        break;
      default:
        break;
    }

    setOperator('');
    setPrevValue('');
    setCurrentValue('');
  };

  const handleClearPress = () => {
    setDisplayValue('0');
    setPrevValue('');
    setCurrentValue('');
    setOperator('');
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}> {/* Apply dark mode styles */}
      <Text style={[styles.display, darkMode && styles.darkModeText]}>{displayValue}</Text> {/* Apply dark mode text color */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.buttonGray} onPress={() => handleClearPress()}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => handleOperatorPress('÷')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(7)}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(8)}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(9)}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => handleOperatorPress('x')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(4)}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(5)}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(6)}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => handleOperatorPress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(1)}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(2)}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress(3)}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => handleOperatorPress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.buttonZero]} onPress={() => handleNumberPress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleNumberPress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => handleEqualPress()}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  darkModeContainer: {
    backgroundColor: '#333333', // Dark mode background color
  },
  display: {
    flex: 1,
    fontSize: 48,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 20,
    color: '#000000', // Default text color
  },
  darkModeText: {
    color: '#ffffff', // Dark mode text color
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 2,
  },
  button: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 45,
    height: 48, // Reduced size by 40%
  },
  buttonGray: {
    flex: 1,
    backgroundColor: '#a6a6a6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    borderRadius: 45,
    height: 48, // Reduced size by 40%
  },
  buttonZero: {
    flex: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#000000',
  },
});

export default CalculatorScreen;
