import React, { Component } from 'react';

import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
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

class CompletedOrder extends Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }
 render(){

  return(
   <View style={styles.MainContainer}>
     <View style={{flexDirection:'row',width:width,height:hp('4%'),backgroundColor:'transparent', marginTop:9, }}>
      <Image source={require('../../images/data.png')} style={{height:hp('2.15%'), width:wp('6%'),marginLeft:30,alignItems:'center' }} />
     <Text style={{fontSize:12, fontWeight:'bold',alignItems:'center', marginLeft:10,}}>4 Ongoing orders</Text>
     </View>

     <View style={styles.bottom}>
          <ScrollView vertical={true}
          style={styles.scrollContainerDown}
           ref={(scrollView) => { _scrollView = scrollView; }}
          showsVerticalScrollIndicator={false}>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Tracker')}>

               <View style={styles.cardsDown}>
                       <View style={styles.cardsEnroute}>

                                     <View style={{justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                                            <Text style={{fontSize:12,color:'#00b300',fontWeight:'bold', alignItems:'center',justifyContent:'center'}}>Order Completed</Text>

                                     </View>
                       </View>
                                <View style={styles.cardsDown2}>
                                      <View>
                                           <View style={{flexDirection:'row'}}>
                                                <View style={styles.dot}></View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pick up location</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>182, Koda Market Southern Kaduna</Text>
                                                     </View>
                                                </View>
                                           <View style={{flexDirection:'row',}}>
                                                <View style={styles.square}></View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Delivery location</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>Plot 18, Badagry Road Lagos State</Text>
                                                     </View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Paid</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>N455,000</Text>
                                                     </View>
                                                </View>

                                      </View>

                                <View></View>
                                </View>
               </View>
           </TouchableOpacity>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Tracker')}>

               <View style={styles.cardsDown}>
                       <View style={styles.cardsEnroute}>

                                     <View style={{justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                                            <Text style={{fontSize:12,color:'#00b300',fontWeight:'bold', alignItems:'center',justifyContent:'center'}}>Order Completed</Text>

                                     </View>
                       </View>
                                <View style={styles.cardsDown2}>
                                      <View>
                                           <View style={{flexDirection:'row'}}>
                                                <View style={styles.dot}></View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pick up location</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>182, Koda Market Southern Kaduna</Text>
                                                     </View>
                                                </View>
                                           <View style={{flexDirection:'row',}}>
                                                <View style={styles.square}></View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Delivery location</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>Plot 18, Badagry Road Lagos State</Text>
                                                     </View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Paid</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>N455,000</Text>
                                                     </View>
                                                </View>

                                      </View>

                                <View></View>
                                </View>
               </View>
           </TouchableOpacity>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Tracker')}>

               <View style={styles.cardsDown}>
                       <View style={styles.cardsEnroute}>

                       <View style={{justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                              <Text style={{fontSize:12,color:'#00b300',fontWeight:'bold', alignItems:'center',justifyContent:'center'}}>Order Completed</Text>

                       </View>
                       </View>
                                <View style={styles.cardsDown2}>
                                      <View>
                                           <View style={{flexDirection:'row'}}>
                                                <View style={styles.dot}></View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pick up location</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>182, Koda Market Southern Kaduna</Text>
                                                     </View>
                                                </View>
                                           <View style={{flexDirection:'row',}}>
                                                <View style={styles.squareYellow}></View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Delivery location</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>Plot 18, Badagry Road Lagos State</Text>
                                                     </View>
                                                     <View style={{flexDirection:'column'}}>
                                                          <Text style={{fontSize:9,color:'#ff9900',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pending</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>N455,000</Text>
                                                     </View>
                                                </View>

                                      </View>

                                <View></View>
                                </View>
               </View>
           </TouchableOpacity>
           <View style={styles.cardsDown}>
                   <View style={styles.cardsEnroute}>

                                 <View style={{justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                                        <Text style={{fontSize:12,color:'#ff9900',fontWeight:'bold', alignItems:'center',justifyContent:'center'}}>Mustapha is en route to delivery Location</Text>

                                 </View>
                   </View>
                            <View style={styles.cardsDown2}>
                                  <View>
                                       <View style={{flexDirection:'row'}}>
                                            <View style={styles.dot}></View>
                                                 <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pick up location</Text>
                                                      <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>182, Koda Market Southern Kaduna</Text>
                                                 </View>
                                            </View>
                                       <View style={{flexDirection:'row',}}>
                                            <View style={styles.squareYellow}></View>
                                                 <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Delivery location</Text>
                                                      <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>Plot 18, Badagry Road Lagos State</Text>
                                                 </View>
                                                 <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Festus Obiligwe</Text>
                                                      <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>N455,000</Text>
                                                 </View>
                                            </View>

                                  </View>

                            <View></View>
                            </View>
           </View>
           <View style={styles.cardsDown}>
                   <View style={styles.cardsEnroute}>

                                 <View style={{justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                                        <Text style={{fontSize:12,color:'#ff9900',fontWeight:'bold', alignItems:'center',justifyContent:'center'}}>Yakubu is en route to delivery Location</Text>

                                 </View>
                   </View>
                            <View style={styles.cardsDown2}>
                                  <View>
                                       <View style={{flexDirection:'row'}}>
                                            <View style={styles.dot}></View>
                                                 <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pick up location</Text>
                                                      <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>182, Koda Market Southern Kaduna</Text>
                                                 </View>
                                            </View>
                                       <View style={{flexDirection:'row',}}>
                                            <View style={styles.squareYellow}></View>
                                                 <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Delivery location</Text>
                                                      <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>Plot 18, Badagry Road Lagos State</Text>
                                                 </View>
                                                 <View style={{flexDirection:'column'}}>
                                                      <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Festus Obiligwe</Text>
                                                      <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>N455,000</Text>
                                                 </View>
                                            </View>

                                  </View>

                            <View></View>
                            </View>
           </View>

          </ScrollView>
     <View>

   </View>
     </View>

   </View>

  )
 }
 }
 export default CompletedOrder ;




 const styles = StyleSheet.create({

  MainContainer: {
 width:wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flexDirection:'column',

  },
 navigation:{
 flexDirection:'row',
 width:width,
 height:'9%',
 justifyContent:'space-between',
 backgroundColor:'white',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('0.5%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('0.5%'),

 },

  bottom: {
 flex: 1,
 width:wp('96%'),
 marginRight:1,
 marginLeft:2,
  elevation: hp('1.5%'),

 },
 welcomeMessage:{
 marginLeft:20,
 },
 welcomeMessageText:{
 fontSize:17,
 fontWeight:'bold',
 padding:3,
 },
 scrollContainer:{
  flex: 1,
  flexDirection: 'row',
  marginLeft:20,
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
   width:wp('35%'),
   height:hp('14%'),
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
 width:wp('35%'),
 height:hp('14%'),
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
 width:wp('35%'),
 height:hp('14%'),
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
 width:wp('35%'),
 height:hp('14%'),
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
 scrollContainerDown:{
  flex: 1,
  flexDirection: 'column',
  marginLeft:1,
 },

 cardsDown:{
  width: wp('99%'),
  resizeMode: 'contain',
    height:hp('20%'),
    borderWidth: 0,
   borderRadius: 1.5,
   borderBottomWidth: 0,
    borderColor:'#f4f4f4',
   elevation: 2,
   marginTop: 10,
   flexDirection:'column',
   backgroundColor:'#fff',
   shadowOffset: {width: 0, height: 3},
   shadowOpacity: 0.10,
   shadowRadius: 3.65,
    elevation: 0.9,
 },
 cardsEnroute:{
  height:"24%",
   width: wp('97%'),
  resizeMode:'contain',
  backgroundColor:'#fff',
  flexDirection:'row',
  justifyContent:'center',
  borderBottomColor:'gray',
  borderStyle:'solid',
  borderBottomWidth:2,
  alignItems:'center',
 },
 cardsDown1:{
  height:"29%",
   width: wp('97%'),
  resizeMode:'contain',
  backgroundColor:'#fff',
  flexDirection:'row',
  justifyContent:'space-between',
  borderBottomColor:'gray',
  borderStyle:'solid',
  borderBottomWidth:1,
 },
 cardsDown2:{
  height:hp('10%'),
  width: wp('97%'),
  resizeMode:'contain',
  backgroundColor:'#fff',
  flexDirection:'column',
  justifyContent:'space-between',
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
 squareYellow:{
 width:wp('4%'),
 height:hp('1.9%'),
 backgroundColor:'#ff9900',
 justifyContent:'center',
 margin:10,
 },
 });
