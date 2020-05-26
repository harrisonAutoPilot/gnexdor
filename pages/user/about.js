import React, { Component } from 'react';

import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import { NavigationActions } from 'react-navigation';
import {jobs} from '../../util/profile/jobsData';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class About extends Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }
 render(){

  return(
   <View style={styles.MainContainerAbout}>
     <View style={styles.bottom}>
          <ScrollView vertical={true}
          style={styles.scrollContainerDown}
           ref={(scrollView) => { scrollView = scrollView; }}
          showsVerticalScrollIndicator={false}>

           <View>
               <View style={styles.cardsDown}>
                   <View style={styles.top}>
                      <View style={styles.title}>
                            <View><Text style={styles.titleText}>Top Class Food Vendor</Text></View>
                            <View style={styles.editTitleIcon}>

                               </View>

                        </View>
                      <View style={styles.message}><Text style={styles.messageText}>Choice Caterers and food vendors for Organizations, companies, get togethers, high Profile events. We have served thousands in major cites around the nation.</Text></View>

                     </View>

               </View>
                <Text style={{fontSize:16,fontWeight:'bold',color:'#34B44B', marginLeft:19, marginTop:12, marginBottom:12,fontFamily:'Roboto', }}>Previous Jobs</Text>
               {
              jobs && jobs.length > 0 && jobs.map(val => {
                return (
               <View style={styles.galleryDown}>
               <View style={styles.gallery} key={val.id}>
                     <Image source={val.img} style={{height:160,width:wp('95%'), borderRadius:10, alignItems:'center',justifyContent:'center'}}/>
                     <View style={styles.galleryFooter}>
                        <View style={styles.jobInfo}>
                         <Text style={{fontSize:18, color:'gray', width:270, marginTop:5,fontFamily:'Roboto', }}>{val.name}</Text>
                           <Image source={require('../../assets/likeee.png')} style={{height:17, width:17, }}/>
                          <Text style={{color:'gray',fontSize:14, width:50, marginLeft:5,fontFamily:'Roboto', }}>{val.like}</Text>
                        </View>

                     </View>

                     <View style={{flexDirection:'row', width:370, justifyContent:'flex-start', alignItems:'center',marginLeft:35}}>
                          <Text style={{fontSize:14, color:'#EBB81D', minWidth:90, marginBottom:18,fontFamily:'Roboto',marginRight:10 }}>{val.buyer}</Text>
                          <Image source={require('../../assets/locc.png')} style={{height:12, width:12, marginRight:2,marginBottom:18}}/>
                           <Text style={{fontSize:13, color:'#ebb81d',marginBottom:18,fontFamily:'Roboto', }}>{val.location}</Text>
                     </View>

                     </View>


               </View>
              )
               })
                }

               <View style={styles.certificate}>
                   <Image source={require('../../assets/certificate.png')} style={{height:100, width:100,resizeMode:'contain', marginTop:-50}}/>
              <View style={{flexDirection:'row',width:width, height:30, alignItems:'center', justifyContent:'center'}}>
                  <Text style={{fontSize:17, color:'#34B44B',alignSelf:'center', width:140, fontWeight:'bold',fontFamily:'Roboto', }}>Gnexdor verified!</Text>
                <Image source={require('../../assets/correct.png')} style={{height:20, width:20,resizeMode:'contain'}}/>
              </View>
                 <Text style={{fontSize:17, color:'gray',alignItems:'center',fontFamily:'Roboto', }}>Account Created 31st January 2014</Text>
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
 export default About ;




 const styles = StyleSheet.create({

  MainContainerAbout: {
  width:wp('100%'),
  height:hp('100%'),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  flexDirection:'column',
  },
  scrollContainerDown:{
   flex: 1,
   flexDirection: 'column',
  },

    bottom: {
    height:hp('48%'),
    width:wp('99%'),
    elevation: hp('1.5%'),
    top:hp('0%'),
    position:'absolute',
alignItems:'center'
   },

  cardsDown:{
   width: wp('99%'),
   resizeMode: 'contain',
   height:hp('15%'),
   borderWidth: 0,
   borderRadius: 1.5,
   borderBottomWidth: 0,
   borderColor:'transparent',
   elevation: 2,
   flexDirection:'column',
   backgroundColor:'#fff',
   shadowOffset: {width: 0, height: 3},
   shadowOpacity: 0.10,
   shadowRadius: 3.65,
   elevation: 0.9,
  },
top:{
 height:hp('12%'),
 width:wp('95%'),
 borderStyle:'solid',
 borderWidth:1,
 borderColor:'transparent',
 alignItems:'center',
 padding:5,
 margin:3,
},
title:{
 width:wp('92%'),
 flexDirection:'row',
 paddingLeft:wp('2%'),
},
titleText:{
fontWeight:'bold',
width:wp('60%'),
fontSize:16,
paddingBottom:5,
fontFamily:'Roboto',
},
editTitleIcon:{
 width:wp('25%'),
 flexDirection:'row',

},
message:{
 width:wp('93%'),
 paddingLeft:wp('3%'),
},
messageText:{
color:'gray',
flexWrap:'wrap',
fontSize:14,
lineHeight:17,
fontFamily:'Roboto',
},
galleryDown:{
 width:wp('98%'),
 height:220,
 // borderWidth: 0,
 // borderRadius: 1.5,
 // borderBottomWidth: 0,
 // elevation: 2,
 // flexDirection:'column',
 // backgroundColor:'#fff',
 // shadowOffset: {width: 0, height: 3},
 // shadowOpacity: 0.10,
 // shadowRadius: 3.65,
 // elevation: 0.9,
 flexDirection:'row',
 flexWrap:'wrap',
 alignItems:'center',
 marginTop:10,
 marginLeft:3,
},
gallery:{
 width:wp('96%'),
height:210,
resizeMode: 'contain',
borderWidth: 0,
borderRadius: 10,
elevation: 2,
flexDirection:'column',
backgroundColor:'#fff',
shadowOffset: {width: 0, height: 3},
shadowOpacity: 0.10,
shadowRadius: 3.65,
elevation: 0.9,
alignItems:'center',
justifyContent:'center',


},
jobInfo:{
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'flex-start',
 marginLeft:9
},
galleryFooter:{
 flexDirection:'column',
},
certificate:{
 flexDirection:'column',
 width:width,
 height:230,
 alignItems:'center',
 justifyContent:'center',
}



 });
