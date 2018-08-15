import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
cajaUno: {
	backgroundColor: '#00ff00',
    justifyContent: 'flex-start',
    alignItems: 'center',  
  },
})

class Final extends React.Component {
	render () {
		return (
		<Row size={4}>
          <Col style={styles.cajaUno}>
            <Button style={styles.button} title='Aumentar' onPress={() => {this.aumentar()}}/>
          </Col>
          <Col style={styles.cajaDos}>
            <Button style={styles.button} title='Disminuir' onPress={() => {this.disminuir()}}/>
          </Col>
        </Row>
		)
	}
}

export default Final;