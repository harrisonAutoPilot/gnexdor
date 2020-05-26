import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  BackHandler
} from 'react-native';
import { RNCamera } from 'react-native-camera'
console.disableYellowBox = true;
export default class PhotoCamera extends Component {
 constructor(props) {
   super(props)
   this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
   this.state = {
     filepath: {
       data: '',
       uri: ''
     },
     fileData: '',
     fileUri: ''
   }
 }



                 componentWillMount() {
                 BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                 }

                 componentWillUnmount() {
                 BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                 }

                 handleBackButtonClick() {
                 this.props.navigation.navigate('SelectImage');
                 return true;
                 }


 render() {
  return (
    <View style={styles.container}>
      <RNCamera
        style={{ flex: 1, alignItems: 'center' }}
        ref={ref => {
          this.camera = ref
        }}
      />
    </View>
  )
}
}
const styles = StyleSheet.create({

 container: {
   flex: 1,
   flexDirection: 'row',
 },
 preview: {
   flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center'
 },
 capture: {
   flex: 0,
   backgroundColor: '#fff',
   borderRadius: 5,
   color: '#000',
   padding: 10,
   margin: 40
 }
});
