import React, { Component } from 'react';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import {singleScreenApplication} from './navigatorStyles'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class Home_Activity extends Component{
 static navigationOptions = {
  headerLeft: <HeaderLeft/>,
  headerRight:<HeaderRight/>,
 };
 constructor(props) {
   super(props);
   this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }

 componentWillMount() {

     BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
   }


   componentWillUnmount() {

       BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
     }

   componentWillUnmount() {

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

<View style={styles.navigation}>
<HeaderLeft/>
<HeaderRight/>
</View>
     <View style={styles.top}>
            <View style={styles.welcomeMessage}>
                   <Text style={styles.welcomeMessageText}>Welcome back <Text style={{color:'gray', fontWeight:'bold'}}>Malam Yusuf</Text></Text>
                   <Text style={{ fontSize:12}}>You have <Text style={{color:'#00b300', fontWeight:'bold'}}>3 new orders</Text></Text>
            </View>

           <ScrollView horizontal={true}
           style={styles.scrollContainer}
            ref={(scrollView) => { _scrollView = scrollView; }}
           showsHorizontalScrollIndicator={false}>


            <View style={styles.earningCards}>
             <Image source={require('../images/money.png')} style={{height:35, width:35,marginTop:10 }} />
            <Text style={{fontSize:12, padding:1,color:'#00b300',fontWeight:'bold'}}>EARNINGS</Text>
            <Text style={{fontSize:13, padding:1,color:'#00b300',fontWeight:'bold'}}>N980,000</Text>
            </View>
          <View style={styles.deliveryCards}>
          <Image source={require('../images/delivery1.png')} style={{height:35, width:35,marginTop:10}} />
          <Text style={{fontSize:12, padding:1,color:'#fff',fontWeight:'bold'}}>DELIVERIES</Text>
          <Text style={{fontSize:13, padding:1,color:'#fff',fontWeight:'bold'}}>1,200</Text>
          </View>
          <View style={styles.flightCards}>
          <Image source={require('../images/truckFace.png')} style={{height:35, width:35, marginTop:10}} />
          <Text style={{fontSize:12, padding:1,color:'#fff',fontWeight:'bold'}}>MY FLEET</Text>
          <Text style={{fontSize:13, padding:1,color:'#fff',fontWeight:'bold'}}>296,674</Text>
          </View>
          <View style={styles.orderCards}>
          <Image source={require('../images/document.png')} style={{height:35, width:35, marginTop:10 }} />
          <Text style={{fontSize:12, padding:1,color:'#fff',fontWeight:'bold'}}>MY ORDERS</Text>
          <Text style={{fontSize:13, padding:1,color:'#fff',fontWeight:'bold'}}>296,674</Text>
          </View>
           </ScrollView>
     </View>

     <View style={{flexDirection:'row',width:width,height:hp('4%'),backgroundColor:'transparent', marginTop:9, }}>
      <Image source={require('../images/data.png')} style={{height:17, width:25,marginLeft:30,alignItems:'center' }} />
     <Text style={{fontSize:14, fontWeight:'bold',alignItems:'center', marginLeft:10,}}>3 New Orders</Text>
     </View>

     <View style={styles.bottom}>
          <ScrollView vertical={true}
          style={styles.scrollContainerDown}
           ref={(scrollView) => { _scrollView = scrollView; }}
          showsVerticalScrollIndicator={false}>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('OrderDetails')}>

               <View style={styles.cardsDown}>
                       <View style={styles.cardsDown1}>
                                <View style={{justifyContent:'center', padding:10}}><Text style={{fontSize:15,color:'#00b300',}}>N455,000</Text></View>
                                     <View style={{justifyContent:'center', marginRight:25,padding:20,flexDirection:'column'}}>
                                            <Text style={{fontSize:9,color:'gray',fontWeight:'bold'}}>Total Weight 320 Mt</Text>
                                            <Text style={{fontSize:9,color:'gray',fontWeight:'bold'}}>Distance 2010 Km</Text>
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
                                                </View>
                                      </View>

                                <View></View>
                                </View>
               </View>
           </TouchableOpacity>

           <TouchableOpacity
                onPress={() => this.props.navigation.navigate('OrderDetails')}>
           <View style={styles.cardsDown}>
                   <View style={styles.cardsDown1}>
                            <View style={{justifyContent:'center', padding:10}}><Text style={{fontSize:15,color:'#00b300',}}>N800,210</Text></View>
                                 <View style={{justifyContent:'center', marginRight:25,padding:20,flexDirection:'column'}}>
                                        <Text style={{fontSize:9,color:'gray',fontWeight:'bold'}}>Total Weight 300 Mt</Text>
                                        <Text style={{fontSize:9,color:'gray',fontWeight:'bold'}}>Distance 3900 Km</Text>
                                 </View>
                   </View>
                            <View style={styles.cardsDown2}>
                                  <View>
                                                   <View style={{flexDirection:'row'}}>
                                                        <View style={styles.dot}></View>
                                                              <View style={{flexDirection:'column'}}>
                                                                     <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Pick up location</Text>
                                                                     <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>house 10, Keffi Road Nassarawa State</Text>
                                                                </View>
                                                       </View>
                                                       <View style={{flexDirection:'row',}}>
                                                            <View style={styles.square}></View>
                                                                  <View style={{flexDirection:'column'}}>
                                                                         <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Delivery location</Text>
                                                                         <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>Independent Warehouse,Yasawa Road, Kebbi State</Text>
                                                                    </View>
                                                           </View>
                                   </View>

                            <View></View>
                            </View>
           </View>
           </TouchableOpacity>

           <TouchableOpacity
                onPress={() => this.props.navigation.navigate('OrderDetails')}>
           <View style={styles.cardsDown}>
                   <View style={styles.cardsDown1}>
                            <View style={{justifyContent:'center', padding:10}}><Text style={{fontSize:15,color:'#00b300'}}>N455,000</Text></View>
                                 <View style={{justifyContent:'center', marginRight:25,padding:20,flexDirection:'column'}}>
                                        <Text style={{fontSize:9,color:'gray'}}>Total Weight 320 Mt</Text>
                                        <Text style={{fontSize:9,color:'gray'}}>Distance 20 Km</Text>
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
                                                           </View>
                                   </View>

                            <View></View>
                            </View>
           </View>
           </TouchableOpacity>

          </ScrollView>
     <View>

   </View>
     </View>

   </View>

  )
 }
}
export default Home_Activity ;




const styles = StyleSheet.create({

  MainContainer: {
width:wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    flexDirection:'column',

  },
navigation:{
 flexDirection:'row',
 width:width,
 height:'10%',
 justifyContent:'space-between',
 backgroundColor:'white',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('0.5%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('1%'),

},
  top: {
   height:hp('23%'),
   backgroundColor:'#fff',
   width:width,
   shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 2,
      shadowRadius: 2,
       elevation: hp('0.5%'),
  },

  bottom: {
 flex: 1,
 width:wp('99%'),
 marginRight:1,
 marginLeft:2,
  elevation: hp('1.5%'),

},
welcomeMessage:{
marginLeft:20,
},
welcomeMessageText:{
fontSize:14,
fontWeight:'bold',
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
 // shadowOffset: {width: 0, height:3},
 // shadowOpacity: 0.10,
 // shadowRadius: 7.65,
 //  elevation: 3.9,
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
  borderColor:'#DA0CE1',
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
   shadowColor: '#DA0CE1',
  shadowOffset: { width: 0, height:hp('1.5%') },
  shadowOpacity: 2,
  shadowRadius: 1,
   elevation: hp('0.8%'),
  backgroundColor:'#DA0CE1',
  alignItems:'center',
},
flightCards:{
 width:wp('35%'),
 height:hp('14%'),
   borderWidth: 1,
  borderRadius: 6,
  borderStyle:'solid',
  borderColor:'#590CE1',
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  flexDirection:'column',
  shadowColor: '#590CE1',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  backgroundColor:'#590CE1',
  alignItems:'center',
},
orderCards:{
 width:wp('35%'),
 height:hp('14%'),
   borderWidth: 1,
  borderRadius: 6,
  borderStyle:'solid',
  borderColor:'#C71818',
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  flexDirection:'column',
  shadowColor: '#C71818',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  backgroundColor:'#C71818',
  alignItems:'center',
},
scrollContainerDown:{
  flex: 1,
  flexDirection: 'column',
  marginLeft:1,
},

cardsDown:{
 width: wp('97%'),
 resizeMode: 'contain',
   height:hp('20%'),
   borderWidth: 1,
  borderRadius: 1.5,
  borderBottomWidth: 0,
   borderColor:'#f4f4f4',
  elevation: 2,
  marginTop: 5,
  flexDirection:'column',
  backgroundColor:'#fff',
  shadowColor: '#000',
     shadowOffset: { width: 0, height: 3 },
     shadowOpacity: 2,
     shadowRadius: 2,
     elevation: 3,
},
cardsDown1:{
 height:"29%",
  width: wp('95%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'row',
 justifyContent:'space-between',
 borderBottomColor:'gray',
 borderStyle:'solid',
 borderBottomWidth:1,
},
cardsDown2:{
 height:hp('14%'),
 width: wp('95%'),
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
});
