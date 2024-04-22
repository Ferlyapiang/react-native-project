// Calculator.js

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Switch } from 'react-native';
import HistoryList from './HistoryList';
import Display from './Display';
import ButtonRow from './ButtonRow';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      result: '',
      history: [],
      darkMode: false,
    };
  }

  handleButtonPress = (value) => {
    if (value === '=') {
      this.calculateResult();
    } else if (value === 'C') {
      this.clearDisplay();
    } else if (value === 'D') {
      this.deleteLastCharacter();
    } else {
      this.setState((prevState) => ({
        display: prevState.display === '0' ? value : prevState.display + value,
      }));
    }
  };

  calculateResult = () => {
    try {
      const expression = this.state.display;
      const result = eval(expression);
      const historyItem = `${expression} = ${result}`;
      this.setState((prevState) => ({
        result: result.toString(),
        display: result.toString(),
        history: [historyItem, ...prevState.history],
      }));
    } catch (error) {
      this.setState({ result: 'Error', display: '0' });
    }
  };

  clearDisplay = () => {
    this.setState({ display: '0', result: '' });
  };

  deleteLastCharacter = () => {
    this.setState((prevState) => ({
      display: prevState.display.length > 1 ? prevState.display.slice(0, -1) : '0',
    }));
  };

  toggleDarkMode = () => {
    this.setState((prevState) => ({
      darkMode: !prevState.darkMode,
    }));
  };

  render() {
    const { darkMode } = this.state;

    return (
      <View style={[styles.container, { backgroundColor: darkMode ? '#333' : '#fff' }]}>
        <HistoryList history={this.state.history} darkMode={darkMode} />
        <Display display={this.state.display} darkMode={darkMode} />
        <ButtonRow darkMode={darkMode} handleButtonPress={this.handleButtonPress} />
        <View style={styles.darkModeSwitchContainer}>
          <Text style={[styles.darkModeText, { color: darkMode ? '#fff' : '#000' }]}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={this.toggleDarkMode}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkModeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  darkModeText: {
    marginRight: 10,
  },
});

export default Calculator;
