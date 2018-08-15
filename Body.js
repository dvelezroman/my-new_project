import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

const styles = StyleSheet.create ({
cajaTres: {
    backgroundColor: '#50ff50',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

class Body extends React.Component {
	render () {
		return (
			<Row style={styles.cajaTres} size={4}>
          		<Text>Numero: {this.props.numero}</Text>
        	</Row>
		)
	}
}

export default Body;