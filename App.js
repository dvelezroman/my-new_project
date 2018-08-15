import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numero: 0,
    }
  }

  aumentar = () => {
    this.setState({
      numero: this.state.numero +1,
    })
  }

  disminuir = () => {
    this.setState({
      numero: this.state.numero ? this.state.numero -1 : 0,
    })
  }

  render() {
    return (
      <Grid style={styles.container}>
        <Row style={styles.cajaHead} size={1}>
          <Text>Aplicación que incrementa y decrementa un numero</Text>
        </Row>
        <Row style={styles.cajaTres} size={4}>
          <Text>Numero: {this.state.numero}</Text>
        </Row>
        <Row size={4}>
          <Col style={styles.cajaUno}>
            <Button style={styles.button} title='Aumentar' onPress={() => {this.aumentar()}}/>
          </Col>
          <Col style={styles.cajaDos}>
            <Button style={styles.button} title='Disminuir' onPress={() => {this.disminuir()}}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cajaHead: {
    alignItems: 'flex-end', 
    justifyContent: 'center',
  },
  cajaUno: {
    backgroundColor: '#00ff00',
    justifyContent: 'flex-start',
    alignItems: 'center',  
  },
  cajaDos: {
    backgroundColor: '#90ff90',
    justifyContent: 'flex-start',
    alignItems: 'center', 
  },
  cajaTres: {
    backgroundColor: '#50ff50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});