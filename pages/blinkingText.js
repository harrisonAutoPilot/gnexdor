import React, { Component } from 'react';
import { Text, View,Platform, TouchableOpacity,Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import HeaderLeft from './headerLeft';
import PulseAnim from './PulseAnim';
import PulseAnim1 from './PulseAnim1';
import HeaderRight from './headerRight';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import BlinkView from 'react-native-blink-view'
import {singleScreenApplication} from './navigatorStyles'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class BlinkingText extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Change the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText };
      });
    },
    // Define any blinking time.
    1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style = {{ fontSize : 20 , marginTop : 10, color:'gray', textAlign:'center', width:300 }}>{display}</Text>
    );
  }
}
export default BlinkingText;
