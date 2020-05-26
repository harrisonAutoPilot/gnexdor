import React, { Component } from 'react';

import { Text, View, TouchableOpacity, StyleSheet} from 'react-native';
console.disableYellowBox = true;

export default class Farmers_Activity extends Component {

 static navigationOptions =
 {
    title: 'Details Activity',
 };

  render() {
    return (
      <View style={styles.MainContainer}>


        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Account')}>

            <Text style={styles.text}>Go to settngs Tab</Text>

          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Details')}>

            <Text style={styles.text}>Goto Details Screen</Text>

          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
    padding: 11

  },

  button: {
    alignItems: 'center',
    backgroundColor: '#43A047',
    padding: 12,
    width: 280,
    marginTop: 12,
  },

  text: {

    color: '#fff'
  }

});
