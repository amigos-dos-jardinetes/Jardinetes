import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonWithOptions = () => {
  const [showOptions1, setShowOptions1] = useState(false);
  const [selectedOption1, setSelectedOption1] = useState(null);
  
  const [showOptions2, setShowOptions2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState(null);

  const [showOptions3, setShowOptions3] = useState(false);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [showOptions4, setShowOptions4] = useState(false);
  const [selectedOption4, setSelectedOption4] = useState(null);

  const options1 = ["Opção 1", "Opção 2", "Opção 3", "Opção 4"];
  const options2 = ["Opção A", "Opção B", "Opção C", "Opção D"];
  const options3 = ["Opção X", "Opção Y", "Opção Z"];
  const options4 = ["Opção Alpha", "Opção Beta", "Opção Gamma"];

  const handleOptionPress1 = (option) => {
    setSelectedOption1(option);
    setShowOptions1(false);
  };

  const handleOptionPress2 = (option) => {
    setSelectedOption2(option);
    setShowOptions2(false);
  };

  const handleOptionPress3 = (option) => {
    setSelectedOption3(option);
    setShowOptions3(false);
  };

  const handleOptionPress4 = (option) => {
    setSelectedOption4(option);
    setShowOptions4(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setShowOptions1(!showOptions1)} style={styles.button}>
        <Text style={styles.buttonText}>{selectedOption1 || "Selecionar Opção 1"}</Text>
      </TouchableOpacity>

      {showOptions1 && (
        <View style={styles.optionsContainer}>
          {options1.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress1(option)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity onPress={() => setShowOptions2(!showOptions2)} style={styles.button}>
        <Text style={styles.buttonText}>{selectedOption2 || "Selecionar Opção 2"}</Text>
      </TouchableOpacity>

      {showOptions2 && (
        <View style={styles.optionsContainer}>
          {options2.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress2(option)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity onPress={() => setShowOptions3(!showOptions3)} style={styles.button}>
        <Text style={styles.buttonText}>{selectedOption3 || "Selecionar Opção 3"}</Text>
      </TouchableOpacity>

      {showOptions3 && (
        <View style={styles.optionsContainer}>
          {options3.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress3(option)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <TouchableOpacity onPress={() => setShowOptions4(!showOptions4)} style={styles.button}>
        <Text style={styles.buttonText}>{selectedOption4 || "Selecionar Opção 4"}</Text>
      </TouchableOpacity>

      {showOptions4 && (
        <View style={styles.optionsContainer}>
          {options4.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleOptionPress4(option)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  optionButton: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
    margin: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

export default ButtonWithOptions;
