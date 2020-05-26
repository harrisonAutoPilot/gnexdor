import React, {Component} from 'react';
import styled from 'styled-components/native';
import HeaderLeft from '../headerLeft';
import ProfileTab from './profileTab';
import ProfileTabTwo from './profileTabTwo';
import ProfileTabJob from './profileTabJob';
import Filterbutton from './filter';
import HeaderRight from '../headerRight';
import StarRating from '../StarRating/star-rating';
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
// modules
import {
  handleAndroidBackButton,
  removeAndroidBackButtonHandler
} from '../modules/androidBackButton';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;





class Profile_Activity_Short_Modal extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {


       }

   }




                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('MapInfo');
                return true;
                }




    render() {
     const ratingObj = {
       ratings: 3,
       views: 34000
     }
      return (

        <View style={styles.MainContainer}>

                     <View style={styles.up}>
                     <TouchableOpacity
 activeOpacity = { .5 } style={styles.backArrow}>

                     <View>
                      <Image source={require('../../assets/Back_100.png')} style={styles.backImg}  />
                     </View>
                     </TouchableOpacity>

                     <Image source={require('../../assets/sun.jpeg')} style={{width:wp('100%'), height:150,resizeMode:'cover'}}  />
                     <View style={{flexDirection:'column',marginTop:-70}}>

                               <View style={{height:hp('1%'),flexDirection:'row', width:280,left:150}}>
                                                   <View style={{ width:200,justifyContent:'center', alignItems:'center', zIndex:4}}>
                                                        <Text style={{fontSize:15,fontWeight:'bold', alignItems:'center', justifyContent:'center',  color:'#fff'}}>DaregoBespoke Fashion Line</Text>
                                                   </View>
                                                    <View style={{ width:wp('8%'),justifyContent:'center', flexDirection:'row', marginTop:-3}}>
                                                        <View style={styles.online}>
                                                        </View>
                                                     </View>
                               </View>
                                                    <View style={{  width:300,justifyContent:'center', alignItems:'center', marginLeft:100,marginTop:18}}>
                                                         <Text style={{fontSize:11, alignItems:'center', justifyContent:'center',color:'#fff'}}>Designer of all kinds of Fabrics Bespoke </Text>
                                                    </View>
                      </View>

                   </View>
                     <View style={styles.middle}>
                     <View style={{height:hp('7%'), width:wp('45%'), justifyContent:'center', alignItems: 'center', left:wp('7%'), flexDirection:'column'}}>
                           <StarRating ratingObj={ratingObj}/>

                     </View>
                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>


                     <View style={{flexDirection:'column', alignItems:'center'}}>
                       <Text style={{fontSize:20, paddingLeft:20,paddingRight:20,color:'#EBB81D',fontWeight:'bold',fontFamily:'Roboto', }}>19</Text>
                       <Text style={{fontSize:12,paddingLeft:20,paddingRight:20,color:'#EBB81D',fontWeight:'bold',fontFamily:'Roboto',  }}>JOBS COMPLETED</Text>
                     </View>


                     </View>

                     </View>

                     <View style={styles.down}>
                     <View style={styles.downHeader}>


                        <ProfileTabTwo/>

                     </View>

                     </View>
                     <View style={styles.circle}>
                     <Image source={require('../../assets/woman.webp')} style={{width:100, height:100,borderRadius:50,borderColor:'gray', border:'solid', borderWidth:0, resizeMode:'cover'}}  />
                     </View>

        </View>


      );
    }
  }

export default Profile_Activity_Short_Modal;


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

      position:'absolute',
      width:wp('100%'),
      height:160,
      top:hp('0%'),
      alignItems:'center',
      flexDirection:'column',
    },
    middle:{
      backgroundColor: '#fff',
      position:'absolute',
      width:wp('100%'),
      height:hp('14%'),
      top:hp('21%'),
      alignItems:'center',
      flexDirection:'column',
      borderBottomColor:'#fff',
      borderBottomWidth:1,
      borderTopColor:'#f2f2f2',
     // borderTopColor:'#a3c2c2',
      borderTopWidth:1,
    },

    down:{
      backgroundColor: '#e6ffff',
      position:'absolute',
      width:wp('100%'),
      //height:hp('67%'),
      top:hp('35%'),
      alignItems:'center',
      flexDirection:'column',
    },
    downHeader:{
     width:wp('99%'),
     //height:hp('50%'),
      flex:1,
     backgroundColor:'rgb(255,165,0)',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',


    },
    circle:{
    backgroundColor: 'gray',
    position:'absolute',
    top:70,
    alignItems:'center',
    flexDirection:'column',
    borderRadius:100,
    borderColor:'#e6ffff',
    borderWidth:0,
    borderStyle:'solid',
    left:wp('6%'),
    marginRight:20,
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
  text1:{
   color:'green',

  },
  text2:{
   color:'white',
  },
  online:{
   width:15,
   height:15,
   backgroundColor:'#00b300',
   borderRadius:100,
   flexDirection:'column',
  },
  jobs:{
   backgroundColor:'#34B44B',
  flexDirection:'row',
  alignItems:'center',
  marginLeft:20,
  padding:5,
  width:60,
  height:30,
  borderRadius:2,
  justifyContent:'space-evenly',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  },
  editButton:{
   position:'absolute',
  width:200,
  left:-30,
 },
 backArrow:{
  width:width,
  flexDirection:'row',
 justifyContent:'space-between',
position:'absolute',
top:10,
height:60,
zIndex:20,
},
backImg:{
 width:24,
 height:20,
 top:15,
 left:20,
 shadowColor: '#fff',
shadowOffset: { width: 0, height:hp('1.5%') },
shadowOpacity: 2,
shadowRadius: 1,
 elevation: hp('0.8%'),

}
  });
