import React, { Component } from 'react';
import { Text, View,Platform, TouchableOpacity,Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';

import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import HeaderLeft from './headerLeft';
import Pulse from './Pulse';
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

class Home_ActivityB extends Component{
 static navigationOptions = {
  headerShown:'false',
 };
 constructor(props) {
   super(props);
   this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }

 UNSAFE_componentWillMount() {

     BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
   }


   UNSAFE_componentWillMount() {

       BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
     }

   UNSAFE_componentWillMount() {

       BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
     }
     back_Button_Press = () => {

         // Put your own code here, which you want to exexute on back button press.
         Alert.alert(
           ' Exit From App ',
           ' Do you want to exit From App ?',
           [
             { text: 'Yes', onPress: () => BackHandler.exitApp() },
             { text: 'No', onPress: () => console.log('NO Pressed') }
           ],
           { cancelable: false },
         );

         // Return true to enable back button over ride.
         return true;
       }


 render(){

  return(
       <View style={styles.MainContainer}>

       <View style={{position:'absolute',width:wp('80%'), height:hp('12%'),top:hp('2%'), justifyContent:'center', alignItems:'center'}}>
<Image source={require('../images/GG.png')} style={styles.imageLogin} />
       </View>

       <View style={{height:hp('28%'), width:wp('100%'),alignItems:'center', justifyContent:'center'}}>

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


       </MapView>

       </View>
       <View style={styles.middle}>
          <Image source={require('../images/left.png')} style={{height:16, width:16,marginLeft:5  }} />
             <ScrollView horizontal={true}
             style={styles.scrollContainer}
              ref={(scrollView) => { scrollView = scrollView; }}
             showsHorizontalScrollIndicator={false}>

             <View>
              <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Select')}
               style = {styles.searchButtonTop}>
               <Text style={{color:'#000000', fontSize:12}}>Location</Text>
               </TouchableOpacity>
              </View>

              <View>
               <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Select')}
                style = {styles.searchButtonTop}>
               <Text style={{color:'#000000', fontSize:12}}>Most Searched</Text>
                </TouchableOpacity>
               </View>
               <View>
                <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Select')}
                 style = {styles.searchButtonTop}>
               <Text style={{color:'#000000', fontSize:12}}>Mobile Business</Text>
                 </TouchableOpacity>
                </View>
                <View>
                 <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Select')}
                  style = {styles.searchButtonTop}>
                <Text style={{color:'#000000', fontSize:12}}>Static Business</Text>
                  </TouchableOpacity>
                 </View>
             </ScrollView>
             <Image source={require('../images/right.png')} style={{height:15, width:15,marginRight:5 }} />
       </View>
         <View style={styles.top}>

       <View style={styles.SectionStyle}>

        <TextInput
         style={{width:wp('80%'), height:hp('15%'), paddingLeft:20,}}
        placeholder='What are you looking for, Abraham2'
        autoCapitalize="none"
        placeholderTextColor='gray'
        onChangeText={(searchVal) =>{
         this.setState({
          search:searchVal,
         });
        }}
        value={this.state.email}
         />
        <Image source={require('../images/business.png')} style={styles.ImageStyle} />
           </View>
         </View>



     <View style={styles.bottom}>

     <View style={styles.middleDown}>

        <Image source={require('../images/left.png')} style={{height:16, width:16,marginLeft:5  }} />
           <ScrollView horizontal={true}
           style={styles.scrollContainerDown}
            ref={(scrollView) => { scrollView = scrollView; }}
           showsHorizontalScrollIndicator={false}>
           <View style={styles.cardsDown}>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('OrderDetails')}>

              <View style={styles.square}>
              <Image source={require('../images/gra1.png')} style={{height:30, width:30, }} />
             <Text style={{fontSize:15, padding:1,color:'gray'}}>Artist</Text>
              </View>
               </TouchableOpacity>

              <View style={styles.square}>
              <Image source={require('../images/tap.png')} style={{height:30, width:30, }} />
             <Text style={{fontSize:15, padding:1,color:'gray',}}>Plumbing</Text>
              </View>

               <View style={styles.square}>
               <Image source={require('../images/curl.png')} style={{height:30, width:30, }} />
              <Text style={{fontSize:15, padding:1,color:'gray'}}>Hair Dresser</Text>
               </View>


               <View style={styles.square}>
               <Image source={require('../images/barber.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Barber</Text>
               </View>

               <View style={styles.square}>
               <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
              <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
               </View>
                <View style={styles.square}>
                <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                </View>
                <View style={styles.square}>
                <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                </View>
                <View style={styles.square}>
                <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                <View style={styles.square}>
                <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                </View>
                <View style={styles.square}>
                <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                </View>
                 <View style={styles.square}>
                 <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                 </View>
                 <View style={styles.square}>
                 <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                 </View>
                 <View style={styles.square}>
                 <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                 <View style={styles.square}>
                 <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                 </View>
                 <View style={styles.square}>
                 <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                 </View>
                  <View style={styles.square}>
                  <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                  </View>
                  <View style={styles.square}>
                  <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                  </View>
                  <View style={styles.square}>
                  <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                  <View style={styles.square}>
                  <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                  </View>

                  <View style={styles.square}>
                  <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                  </View>
                   <View style={styles.square}>
                   <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                   </View>
                   <View style={styles.square}>
                   <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                   </View>
                   <View style={styles.square}>
                   <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                   <View style={styles.square}>
                   <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                   </View>
                   <View style={styles.square}>
                   <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                   </View>
                    <View style={styles.square}>
                    <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                    </View>
                    <View style={styles.square}>
                    <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                    </View>
                    <View style={styles.square}>
                    <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                    <View style={styles.square}>
                    <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                    </View>
                    <View style={styles.square}>
                    <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                    </View>
                     <View style={styles.square}>
                     <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                     </View>
                     <View style={styles.square}>
                     <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                     </View>
                     <View style={styles.square}>
                     <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                     <View style={styles.square}>
                     <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                     </View>
                     <View style={styles.square}>
                     <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                     </View>
                      <View style={styles.square}>
                      <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                      </View>
                      <View style={styles.square}>
                      <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                      </View>
                      <View style={styles.square}>
                      <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                      <View style={styles.square}>
                      <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                      </View>

</View>
           </ScrollView>
           <Image source={require('../images/right.png')} style={{height:15, width:15,marginRight:5 }} />


     </View>



     <View>

   </View>
     </View>

<View style={styles.advert}>
<View style={styles.advertImage}>
<Image source={require('../images/splash2.jpg')} style={{height:100,width:80,borderRadius:20, alignSelf: 'center',
 resizeMode: 'contain',}} />

</View>
<View style={styles.advertContent}>
<View style={{width:wp('60%'), alignItems:'center',}}><Text style={styles.advertTitle}>Erikson Computers</Text></View>
<View style={{width:wp('60%'), alignItems:'center',}}><Text style={styles.advertProduct}>Computer Gadgets</Text></View>
<View style={{width:wp('60%'), alignItems:'center', flexDirection:'row', justifyContent:'center'}}><Image source={require('../images/loc.png')} style={{height:18, width:18,marginRight:5,}} /><Text style={styles.advertAddress}>2 Kwame, close ,Adetunkunbo, Wuse ,Abuja</Text></View>
<View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
<View><Image source={require('../images/facebook.png')} style={{height:22, width:22,marginRight:15,}} /></View>
<View><Image source={require('../images/google.png')} style={{height:22, width:22,marginRight:15,}} /></View>
<View><Image source={require('../images/twitter.png')} style={{height:22, width:22,marginRight:15,}} /></View>
<View><Image source={require('../images/instagram.png')} style={{height:22, width:22,marginRight:15,}} /></View>
</View>
</View>

</View>

   </View>

  )
 }
}
export default Home_ActivityB ;




const styles = StyleSheet.create({

  MainContainer: {
width:wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    flexDirection:'column',
  },
  middle:{
   width:wp('99%'),
   height:hp('8;%'),
   alignItems:'center',
   flexDirection:'row',
   zIndex:2,
top:hp('20%'),
   position:'absolute',
  },
  middleDown:{
   width:wp('100%'),
   height:hp('32%'),
   alignItems:'center',
   flexDirection:'row',
   justifyContent:'center',
   // borderStyle:'solid',
   // borderWidth:1,
   // borderColor:'gray',

  },
  bottom: {
 flex: 1,
 width:wp('100%'),
 elevation: hp('1.5%'),
},
searchButton:{
 height:hp('5%'),
 backgroundColor:'#fff',
 width:wp('20%'),
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:3,
},
searchB:{
 width:wp('12%'),
 height:hp('7%'),
 left:wp('40%'),
 zIndex:20,
  backgroundColor:'#fff',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('2%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:100,
 margin:10,
},
searchButtonTop:{
 height:hp('6%'),
 //backgroundColor:'rgb(255,165,0)',
  backgroundColor:'#efd69d',
 width:wp('25%'),
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:3,
 margin:5,
 marginRight:8,
},
  square:{
   width:wp('25.5%'),
   height:hp('13%'),
   borderWidth: 0.5,
  borderRadius: 6,
  borderStyle:'solid',
  borderColor:'#f2f2f2',
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
   justifyContent:'center',
   margin:5,
    zIndex:4,
  },
  seeMore:{
    width:wp('100%'),
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
  },
  regWith:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
  },

  Te:{
   color:'gray',
  },
  line:{
   color:'gray',
   alignItems:'center',
   justifyContent:'center',
   marginBottom:13,
   fontSize:15,
  },
  welcomeMessage:{
  marginLeft:20,
  marginTop:7
  },
  welcomeMessageText:{
  fontSize:14,
  padding:3,
  },
  scrollContainer:{
   width:wp('95%'),
   flexDirection: 'row',
   marginRight:10,
   marginLeft:10,
  },
  input1: {
     width: wp('90%'),
     height: hp('6%'),
     margin: 5,
     padding: 8,
     color: 'black',
     borderStyle:'solid',
     borderColor:'#999494',
     fontSize: 14,
     borderWidth:0.5,
     borderRadius:3,
     marginLeft:wp('5%'),
     marginRight:wp('5%'),
     flexDirection:'row',
   },
navigation:{
 flexDirection:'row',
 width:width,
 height:'9%',
 justifyContent:'space-between',
 backgroundColor:'#f2f2f2',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('0.5%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('0.5%'),

},
  top: {
   height:hp('10%'),
   backgroundColor:'#f2f2f2',
   width:wp('100%'),
   flexDirection:'row',

  },


cardsDown:{
 width: wp('230%'),
 resizeMode: 'contain',
 height:hp('30%'),
 flexWrap:'wrap',
 borderRadius: 1.5,
 borderBottomWidth: 0,
 borderColor:'#f2f2f2',
 flexDirection:'row',
 alignItems:'center',
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
  scrollContainerDown:{
  flex: 1,
  width:wp('99%'),
  flexDirection: 'row',
  marginLeft:1,

},
cardsDown1:{
 height:"26%",
  width: wp('92%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'row',
 justifyContent:'space-between',
 borderBottomColor:'gray',
 borderStyle:'solid',
 borderBottomWidth:1,
},
cardsDown2:{
 height:hp('12%'),
 width: wp('92%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'column',
 justifyContent:'space-between',

},
dot:{
 width:wp('3.5%'),
 height:hp('1.9%'),
 backgroundColor:'black',
 borderRadius:30,
 justifyContent:'center',
 margin:10,
},
mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  imageLogin:{
   width:wp('15%'),
   height:hp('15%'),
   alignItems:'center',
   justifyContent:'center',
   zIndex:3,
  },
  imageAdvert:{

   alignItems:'center',
   justifyContent:'center',

  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center',

},
SectionStyle: {
   flexDirection: 'row',
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#fff',
   borderWidth: .5,
   borderColor: '#000',
   height: hp('7%'),
   width:wp('92%'),
   borderRadius: 5 ,
   margin: 10
},

advert:{
 width:wp('95%'),
 height:hp('19%'),

 // borderColor:'#000000',
 // borderStyle:'solid',
 // borderWidth:1,
 margin:3,
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
 shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
 elevation: hp('0.8%'),
 backgroundColor:'#fff',
},
advertImage:{
 width:wp('23%'),
 height:hp('14%'),
 borderColor:'#f2f2f2',
 borderStyle:'solid',
 borderWidth:1,
 margin:1,
 justifyContent:'center',
 alignItems:'center',
 borderRadius:100
},
advertContent:{
 width:wp('69%'),
 height:hp('18%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderColor:'#f1f1f1',
 borderStyle:'solid',
 borderWidth:0.7,
 margin:2,
 flexDirection:'column',
},
advertTitle:{
 alignItems:'center',
 justifyContent:'center',
 fontSize:17,
 color:'#000000'
},

advertProduct:{
 alignItems:'center',
 justifyContent:'center',
 fontSize:13,
 color:'#000000',
},
advertAddress:{
 width:wp('50%'),
 alignItems:'center',
 justifyContent:'center',
 fontSize:13,
 color:'#000000',
 flexWrap:'wrap',
 margin:5,
 textAlign:'center'
},
});
