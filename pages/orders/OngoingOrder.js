import React, { Component } from 'react';

import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class OngoingOrder extends Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }
 render(){

  return(
   <View style={styles.MainContainer}>
   <View style={styles.map}>
   <MapView
             style={styles.mapStyle}
             showsUserLocation={false}
             zoomEnabled={true}
             zoomControlEnabled={true}
             initialRegion={{
               latitude: 28.579660,
               longitude: 77.321110,
               latitudeDelta: 0.0922,
               longitudeDelta: 0.0421,
             }}>
             <Marker
                   coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
                   title={"Segun Bolodeokun"}
                   description={"Segun is 20km away.tap to see details .."}
                    />


   </MapView>
   </View>
   </View>

  )
 }
 }
 export default OngoingOrder ;




 const styles = StyleSheet.create({

  MainContainer: {
 width:wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flexDirection:'column',

  },

 map:{
  justifyContent:'center',
  alignItems:'center',
   width:width,
   height:hp('100%'),
 },

 mapStyle: {
     position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
   },
 });
