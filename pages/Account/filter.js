import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button,Dimensions,TouchableOpacity} from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


export default class Filterbutton extends Component {
  state={
    colors:['transparent'],
    buttonColor:'rgb(255,165,0)',
     width:width/3,
  };

  changeColor(){
    const colorArray= this.state.colors;
    var currentColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    this.setState({buttonColor:currentColor});
  }
  render() {
    return (
      <View style={styles.container}>
          <TouchableOpacity
              style={{backgroundColor:this.state.buttonColor}}
              onPress={()=>this.changeColor()}
                >
            <Text style={styles.text}>GENERAL</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
width:width/4,
    padding:7,
    alignItems: 'center',
   
  },

});
