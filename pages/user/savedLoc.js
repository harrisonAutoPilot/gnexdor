import React, { Component } from 'react';

import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import { NavigationActions } from 'react-navigation';
import {saveData} from '../../util/profile/savedData';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class SavedLocation extends Component{
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
                            <View><Text style={styles.titleText}>Accounts & Profiles</Text></View>

                        </View>


                     </View>

               </View>
               {
              saveData && saveData.length > 0 && saveData.map(val => {
                return (
               <View style={styles.galleryDown}>
               <View style={styles.gallery} key={val.id}>
                     <Image source={val.img} style={{height:160,width:wp('95%'), borderRadius:10, alignItems:'center',justifyContent:'center'}}/>
                     <View style={styles.galleryFooter}>
                        <View style={styles.jobInfo}>
                         <Text style={{fontSize:18, color:'gray', width:270,}}>{val.name}</Text>
                           <Image source={require('../../assets/share.png')} style={{height:20, width:20, marginRight:3}}/>
                          <Image source={require('../../assets/trash.png')} style={{height:20, width:20,marginRight:40 }}/>
                        </View>

                     </View>

                     <View style={{flexDirection:'row', width:370, justifyContent:'flex-start', alignItems:'center',marginLeft:30}}>
                          <Text style={{fontSize:15, color:'#EBB81D', minWidth:100, marginBottom:27, }}>{val.buyer}</Text>
                          <Image source={require('../../assets/locc.png')} style={{height:12, width:12, marginBottom:27}}/>
                           <Text style={{fontSize:13, color:'#EBB81D', marginBottom:27}}>{val.location}</Text>
                     </View>

                     </View>


               </View>
              )
               })
                }


 </View>



          </ScrollView>
     <View>

   </View>
     </View>

   </View>

  )
 }
 }
 export default SavedLocation ;




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

   },

  cardsDown:{
   width: wp('99%'),
   resizeMode: 'contain',
   height:hp('8%'),
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
   width:wp('95%'),
   borderStyle:'solid',
   borderWidth:1,
   borderColor:'transparent',
   alignItems:'center',
   padding:5,
   margin:5,
  },
title:{
 width:wp('92%'),
 flexDirection:'row',
 paddingLeft:wp('3%'),
},
titleText:{
fontWeight:'bold',
width:wp('60%'),
fontSize:16,
paddingBottom:5,
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
 marginTop:20,
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
 margin:3,
 marginLeft:15,
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
