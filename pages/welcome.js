import React, {Component} from 'react';
import {AppRegistry, Text, View, StyleSheet,Image, Dimensions,StatusBar,} from 'react-native';
const width = Dimensions.get('window').width;

export default class Welcome extends Component{
 static navigationOptions = {
    title: 'Welcome',
  };
 render(){

  console.log('come chop knockle');
  return(

  <View style={styles.container}>
 <StatusBar barStyle="dark-content" />
   <View>
<Image source={require('../images/looog.png')} style={styles.imageSize} />
   </View>
<View>
<Text style={styles.caption}>Connect to Find Businesses Next Door</Text>
</View>

  </View>

  )
 }
}


AppRegistry.registerComponent('Welcome', ()=>Welcome);

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
 alignItems:'center',
 justifyContent:'center',
 },

imageSize:{
 marginTop:100,
 width:width,
 height:200,
},

caption:{
 color:'	rgb(255,165,0)',
 fontWeight:'bold',
 margin:10,
 fontSize:13,
}

})
