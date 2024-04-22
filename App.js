import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Switch } from 'react-native';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
      result: '',
      history: [],
      darkMode: false, // Tambahkan state untuk mode gelap
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

    // Tentukan warna berdasarkan mode yang dipilih
    const containerBackgroundColor = darkMode ? '#333' : '#fff';
    const historyContainerBackgroundColor = darkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const historyTextColor = darkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)';
    const displayContainerBackgroundColor = darkMode ? '#222' : '#f0f0f0';
    const buttonContainerBackgroundColor = darkMode ? '#444' : '#d0d0d0';
    const buttonBackgroundColor = darkMode ? '#555' : '#e0e0e0';
    const specialButtonBackgroundColor = darkMode ? '#666' : '#f0f0f0';
    const buttonText = darkMode ? '#fff' : '#000';

    return (
      <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
        <ScrollView style={[styles.historyContainer, { backgroundColor: historyContainerBackgroundColor }]}>
          {this.state.history.map((item, index) => (
            <Text key={index} style={[styles.historyText, { color: historyTextColor }]}>{item}</Text>
          ))}
        </ScrollView>
        <View style={[styles.displayContainer, { backgroundColor: displayContainerBackgroundColor }]}>
          <Text style={[styles.displayText, { color: buttonText }]}>{this.state.display}</Text>
        </View>
        <View style={[styles.buttonContainer, { backgroundColor: buttonContainerBackgroundColor }]}>
          <View style={styles.row}>
            {['C', 'D', '%', '/'].map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, styles.specialButton, { backgroundColor: specialButtonBackgroundColor }]}
                onPress={() => this.handleButtonPress(button)}
              >
                <Text style={[styles.buttonText, { color: buttonText }]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {['7', '8', '9', '*'].map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
                onPress={() => this.handleButtonPress(button)}
              >
                <Text style={[styles.buttonText, { color: buttonText }]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {['4', '5', '6', '-'].map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
                onPress={() => this.handleButtonPress(button)}
              >
                <Text style={[styles.buttonText, { color: buttonText }]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {['1', '2', '3', '+'].map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, { backgroundColor: buttonBackgroundColor }]}
                onPress={() => this.handleButtonPress(button)}
              >
                <Text style={[styles.buttonText, { color: buttonText }]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.row}>
            {['0', '='].map((button) => (
              <TouchableOpacity
                key={button}
                style={[styles.button, styles.doubleButton, { backgroundColor: buttonBackgroundColor }]}
                onPress={() => this.handleButtonPress(button)}
              >
                <Text style={[styles.buttonText, { color: buttonText }]}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.darkModeSwitchContainer}>
          <Text style={[styles.darkModeText, { color: buttonText }]}>Dark Mode</Text>
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
  historyContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 5,
  },
  displayContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  displayText: {
    fontSize: 40,
  },
  buttonContainer: {},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 1,
  },
  button: {
    flex: 1,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  specialButton: {},
  doubleButton: {
    flex: 2,
  },
  buttonText: {
    fontSize: 24,
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
