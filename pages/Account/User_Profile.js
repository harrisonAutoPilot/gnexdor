import React, {Component} from 'react';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountHeaderRight from '../header/accountHeader/accountHeaderRight';
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

export default class User_Profile extends Component {

 static navigationOptions = {
 headerShown:'false',
  //headerRight:<AccountHeaderRight/>,
 };
 constructor(props) {
   super(props);
   this.state = {

   }

 }
    render() {

      return (

        <View style={styles.MainContainer}>
                     <View style={styles.up}>
                     <View style={{height:hp('15%')}}></View>
                     <View style={{height:hp('10%')}}></View>
                   <View style={{height:hp('5%')}}></View>
                     <View style={{flexDirection:'column',left:wp('23%'), flexWrap:'wrap'}}><Text style={{fontSize:26, fontWeight:'bold',}}>DaregoBespoke</Text></View>
                     <View style={{flexDirection:'column',left:wp('23%'), flexWrap:'wrap'}}><Text style={{fontSize:26, fontWeight:'bold',}}>Fashion Line</Text></View>
                     </View>
                     <View style={styles.middle}>
                     <View style={{height:hp('5%'), width:wp('45%')}}><Text style={{fontSize:13,left:wp('25%')}}>Ademola Adetokunbo besides glo office wuse 2 Abuja</Text></View>
                     <View style={{height:hp('5%')}}></View>

                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                     <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{fontSize:30,  paddingLeft:20,paddingRight:20}}>20</Text>
                     <Text style={{fontSize:20, }}>POSTS</Text>
                     </View>

                     <View style={{flexDirection:'column', alignItems:'center'}}>
                     <Text style={{fontSize:30, paddingLeft:20,paddingRight:20}}>200</Text>
                     <Text style={{fontSize:20,paddingLeft:20,paddingRight:20 }}>PHOTOS</Text>
                     </View>

                     <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{fontSize:30, paddingLeft:20,paddingRight:20}}>20K</Text>
                     <Text style={{fontSize:20,  }}>FOLLOWERS</Text>
                     </View>

                     </View>


                     </View>

                     <View style={styles.down}>
                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>
                     <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{fontSize:15,padding:5}}>GENERAL</Text>
                     </View>

                     <View style={{flexDirection:'column', alignItems:'center'}}>
                     <Text style={{fontSize:15,padding:5,paddingLeft:20,paddingRight:20 }}>ABOUT</Text>
                     </View>

                     <View style={{flexDirection:'column',alignItems:'center'}}>
                     <Text style={{fontSize:15,padding:5, }}>SAVED LOCATIONS</Text>
                     </View>
                     </View>

                     </View>
                     <View style={styles.circle}>
                     </View>

        </View>

      );
    }
  }

  const styles = StyleSheet.create({

    MainContainer: {
      width:wp('100%'),
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      flexDirection:'column',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0.5 },
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: hp('0.9%'),

    },
    up:{
      backgroundColor: '#e6ffff',
      position:'absolute',
      width:wp('100%'),
      height:hp('45%'),
      top:hp('0%'),
      alignItems:'center',
      flexDirection:'column',
    },
    middle:{
      backgroundColor: '#fff',
      position:'absolute',
      width:wp('100%'),
      height:hp('27%'),
      top:hp('40%'),
      alignItems:'center',
      flexDirection:'column',
      borderBottomColor:'#a3c2c2',
      borderBottomWidth:1,
      borderTopColor:'#a3c2c2',
      borderTopWidth:1,
    },

    down:{
      backgroundColor: '#e6ffff',
      position:'absolute',
      width:wp('100%'),
      height:hp('27%'),
      top:hp('67%'),
      alignItems:'center',
      flexDirection:'column',
    },
        circle:{
          backgroundColor: 'gray',
          position:'absolute',
          width:wp('37%'),
          height:hp('22%'),
          top:hp('28%'),
          alignItems:'center',
          flexDirection:'column',
          borderRadius:100,
          left:wp('10%'),
        },

    image:{
     width:wp('19%'),
     height:hp('11%'),
     alignItems:'center',
     backgroundColor:'#f2f2f2',
     justifyContent:'center',
     borderRadius:100,
     top:hp('1%'),
     position:'absolute',

    },
    Name:{
     position:'absolute',
     top:hp('12%'),
    },
    Scroll:{
     position:'absolute',
     top:hp('22%'),
     width:wp('100%'),
     height:hp('16%'),
     justifyContent:'center',

    },
    top:{
      width:wp('100%'),
      height:hp('18%'),
      },

    bottom: {
   flex: 1,
   width:wp('96%'),


  },
  welcomeMessage:{
  marginLeft:20,
  },
  welcomeMessageText:{
  fontSize:17,
  fontWeight:'bold',
  padding:3,
  },

  listAvatar:{
   width:wp('13%'),
   height:hp('7%'),
   padding:10,
  backgroundColor:'#fff',
  borderRadius:50,
  margin:10,
  marginLeft:20,
  borderRadius:50,
  borderStyle:'solid',
  borderWidth:0.9,
  borderColor:'#f2f2f2',
  },

  cards:{
     width:wp('40%'),
     height:hp('15%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#f4f4f4',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
   shadowOffset: {width: 0, height: 3},
   shadowOpacity: 0.10,
   shadowRadius: 3.65,
    elevation: 0.9,
    backgroundColor:'#fff',
    alignItems:'center',
  },
  earningCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
    backgroundColor:'#fff',
    color:'#00b300',
    alignItems:'center',
    shadowColor: '#00b300',
       shadowOffset: { width: 0, height:hp('1.5%') },
       shadowOpacity: 2,
       shadowRadius: 1,
        elevation: hp('0.8%'),
  },
  deliveryCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
     shadowColor: '#DA0CE1',
    shadowOffset: { width: 0, height:hp('1.5%') },
    shadowOpacity: 2,
    shadowRadius: 1,
     elevation: hp('0.8%'),
    backgroundColor:'#fff',
    alignItems:'center',
  },
  flightCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
    shadowColor: '#fff',
   shadowOffset: { width: 0, height:hp('1.5%') },
   shadowOpacity: 2,
   shadowRadius: 1,
    elevation: hp('0.8%'),
    backgroundColor:'#fff',
    alignItems:'center',
  },
  orderCards:{
   width:wp('30%'),
   height:hp('12%'),
     borderWidth: 1,
    borderRadius: 6,
    borderStyle:'solid',
    borderColor:'#fff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flexDirection:'column',
    shadowColor: '#fff',
   shadowOffset: { width: 0, height:hp('1.5%') },
   shadowOpacity: 2,
   shadowRadius: 1,
    elevation: hp('0.8%'),
    backgroundColor:'#fff',
    alignItems:'center',
  },


  list:{
   height:hp('41%'),
   width: wp('99%'),
   resizeMode:'contain',
   backgroundColor:'#f2f2f2',
   top:hp('40%'),
   position:'absolute'
  },
listContent:{
 height:hp('10%'),
 width: wp('97%'),
 resizeMode:'contain',
 backgroundColor:'#ffffff',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-between',
 margin:5,
 shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('0.5%'),
},

  dot:{
   width:wp('4%'),
   height:hp('1.9%'),
   backgroundColor:'black',
    borderRadius:30,
     justifyContent:'center',
     margin:10,
  },
  square:{
   width:wp('4%'),
   height:hp('1.9%'),
   backgroundColor:'#00b300',
   justifyContent:'center',
   margin:10,
  },
  });
