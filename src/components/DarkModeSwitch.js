import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

const DarkModeSwitch = ({ darkMode, onToggle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        trackColor={{ false: '#d0d0d0', true: '#333' }} // Warna latar belakang switch dalam mode gelap dan mode terang
        thumbColor={darkMode ? '#fff' : '#fff'} // Warna toggle switch
        value={darkMode}
        onValueChange={onToggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  text: {
    marginRight: 10,
    fontSize: 16,
    color: '#000', // Warna teks
  },
});

export default DarkModeSwitch;
