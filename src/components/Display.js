import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Display = ({ display, darkMode }) => (
  <View style={[styles.displayContainer, { backgroundColor: darkMode ? '#222' : '#f0f0f0' }]}>
    <Text style={[styles.displayText, { color: darkMode ? '#fff' : '#000' }]}>{display}</Text>
  </View>
);

const styles = StyleSheet.create({
  displayContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 40,
  },
  displayText: {
    fontSize: 40,
  },
});

export default Display;
