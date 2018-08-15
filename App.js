import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Inicio from './Inicio';
import Body from './Body';
import Final from './Final';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      numero: 0,
      titulo: 'Sumadora',
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
        <Inicio titulo={this.state.titulo}/>
        <Body numero={this.state.numero}/>
        <Final sumar={this.aumentar} restar={this.disminuir}/>
      </Grid>
    );
  }
}

export default App;