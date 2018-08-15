import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cajaUno}/>
        <View style={styles.cajaDos}>
          <Text>Esta es la caja Dos</Text>
        </View>
        <View style={styles.cajaTres}/>
        <View style={styles.cajaCuatro}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaUno: {
    flex: 1,
    backgroundColor: '#00ff00',
  },
  cajaDos: {
    flex: 6,
    backgroundColor: '#90ff90',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  cajaTres: {
    flex: 15,
    backgroundColor: '#70ff70',
  },
  cajaCuatro: {
    flex: 1,
    backgroundColor: '#50ff50',
  }
});