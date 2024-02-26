import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setResult(result + value);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <View>
      <Text>{result}</Text>
      <TouchableOpacity onPress={() => handlePress('1')}>
        <Text>1</Text>
      </TouchableOpacity>
      {/* Other calculator buttons */}
      <TouchableOpacity onPress={handleCalculate}>
        <Text>=</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calculator;
