import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create({
cajaHead: {
    alignItems: 'flex-end', 
    justifyContent: 'center',
  },
})

class Inicio extends React.Component{
	render() {
		return (
		<Row style={styles.cajaHead} size={1}>
          <Text>{this.props.titulo}</Text>
        </Row>
		);
	}
};

export default Inicio;