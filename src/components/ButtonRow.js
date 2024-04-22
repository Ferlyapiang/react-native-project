// ButtonRow.js

import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const ButtonRow = ({ darkMode, handleButtonPress }) => (
  <View style={styles.buttonContainer}>
    {[['C', 'D', '%', '/'], ['7', '8', '9', '*'], ['4', '5', '6', '-'], ['1', '2', '3', '+'], ['0', '=']].map((row, rowIndex) => (
      <View key={rowIndex} style={styles.row}>
        {row.map((button) => (
          <TouchableOpacity
            key={button}
            style={[
              styles.button,
              button === '0' ? styles.doubleButton : null,
              {
                backgroundColor:
                  darkMode ? (button === '=' ? '#FFA500' : button === 'D' ? '#FF0000' : '#555') : 
                  (button === '=' ? '#FFA500' : button === 'D' ? '#FF0000' : '#e0e0e0'),
                borderRadius: 10, // Menambahkan efek curve
              },
            ]}
            onPress={() => handleButtonPress(button)}
          >
            <Text style={[styles.buttonText, { color: darkMode ? '#fff' : '#000' }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  button: {
    flex: 1,
    aspectRatio: 3 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doubleButton: {
    flex: 1.5,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default ButtonRow;
