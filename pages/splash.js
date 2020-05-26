import React, { Component } from 'react';
import { Text, View,Platform, TouchableOpacity,Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import HeaderLeft from './headerLeft';
import PulseAnim from './PulseAnim';
import PulseAnim1 from './PulseAnim1';
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

class Splash extends Component{
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

         // Return true to enable back button over ride.//<Image source={require('../images/GG.png')} style={styles.imageLogin} />

         return true;
       }

      componentDidMount (){
       setTimeout(()=>{
      this.props.navigation.navigate('LoginB')
     }, 5000)
      }

 render(){

  return(
       <View style={styles.MainContainer}>


       <View style={{position:'absolute',width:wp('80%'), height:hp('12%'),top:hp('10%'), justifyContent:'center', alignItems:'center', zIndex:9, right:wp('40%'),}}>
       <PulseAnim  />

       </View>

       <View style={{height:hp('100%'), width:wp('100%'),alignItems:'center', justifyContent:'center'}}>

       <MapView
                 style={styles.mapStyle}
                 showsUserLocation={false}
                 zoomEnabled={true}
                 zoomControlEnabled={true}
                 initialRegion={{
                   latitude: 9.06508,
                   longitude: 7.474652,
                   latitudeDelta: 0.1145,
                   longitudeDelta: 0.0035
                 }}>


       </MapView>

       </View>








   </View>

  )
 }
}
export default Splash ;




const styles = StyleSheet.create({

  MainContainer: {
width:wp('100%'),
 height:hp('100%'),
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
   height:hp('50%'),
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
 height:hp('45%'),
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
