import React, {Component} from 'react';

import { View, Text, StyleSheet } from 'react-native';
console.disableYellowBox = true;
 class Details_Activity extends Component {

  static navigationOptions =
  {
     title: 'Details Activity',
  };

  render() {

    return (

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

        <Text>Details Activity Screen</Text>

      </View>

    );
  }
}
export default Details_Activity ;
