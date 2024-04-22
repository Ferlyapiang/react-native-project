// HistoryList.js

import React from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';

const HistoryList = ({ history, darkMode }) => (
  <ScrollView style={[styles.historyContainer, { backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' }]}>
    {history.map((item, index) => (
      <Text key={index} style={[styles.historyText, { color: darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)' }]}>{item}</Text>
    ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  historyContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  historyText: {
    fontSize: 18, // Menyesuaikan ukuran teks
    marginBottom: 20,
  },
});

export default HistoryList;
