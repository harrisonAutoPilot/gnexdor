import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Dimensions,ScrollView,Image, StyleSheet } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {singleScreenApplication} from './navigatorStyles'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class HomeNew extends Component{
 static navigationOptions = {
  headerLeft: <HeaderLeft/>,
  headerRight:<HeaderRight/>,
 };


 constructor(props) {
   super(props);
   this.state = {




   }
 }

 render(){

  return(
   <View style={styles.MainContainer}>
     <View style={styles.top}>
            <View style={styles.welcomeMessage}>
                   <Text style={styles.welcomeMessageText}>Welcome back Malam Yusuf</Text>
                   <Text style={{ fontSize:12, marginLeft:5}}>You have <Text style={{color:'#00b300'}}>2 new orders</Text></Text>
            </View>

           <ScrollView horizontal={true}
           style={styles.scrollContainer}
            ref={(scrollView) => { _scrollView = scrollView; }}
           showsHorizontalScrollIndicator={false}>


            <View style={styles.earningCards}>
             <Image source={require('../images/money1.png')} style={{height:35, width:35,marginTop:10 }} />
            <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>EARNINGS</Text>
            <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>N980,000</Text>
            </View>
          <View style={styles.deliveryCards}>
          <Image source={require('../images/delivery1.png')} style={{height:35, width:35,marginTop:10}} />
          <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>DELIVERIES</Text>
          <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>1,200</Text>
          </View>
          <View style={styles.flightCards}>
          <Image source={require('../images/truckFace.png')} style={{height:35, width:35, marginTop:10}} />
          <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>MY FLEET</Text>
          <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>296,674</Text>
          </View>
          <View style={styles.orderCards}>
          <Image source={require('../images/document.png')} style={{height:35, width:35, marginTop:10 }} />
          <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>MY ORDERS</Text>
          <Text style={{fontSize:10, padding:1,color:'#fff',fontWeight:'bold'}}>296,674</Text>
          </View>
           </ScrollView>
     </View>
     <View style={{flexDirection:'row',width:width,height:hp('3%'),backgroundColor:'transparent', marginTop:10, }}>
      <Image source={require('../images/data.png')} style={{height:17, width:25,marginLeft:30,alignItems:'center' }} />
     <Text style={{fontSize:14,alignItems:'center', marginLeft:10,}}>Ongoing Orders</Text>
     </View>
     <View style={styles.enroute}>
          <ScrollView vertical={true}
          style={styles.scrollContainerDown}
           ref={(scrollView) => { _scrollView = scrollView; }}
          showsVerticalScrollIndicator={false}>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Tracker')}>

               <View style={styles.cardsDownEnroute}>
                       <View style={styles.cardsEnroute}>

                                     <View style={{justifyContent:'center', alignItems:'center',flexDirection:'column'}}>
                                            <Text style={{fontSize:12,color:'#00b300',fontWeight:'bold', alignItems:'center',justifyContent:'center'}}>En route to Pick up Location</Text>

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
                                                          <Text style={{fontSize:9,color:'gray',marginLeft:30,marginTop:8,fontWeight:'bold'}}>Festus Obiligwe</Text>
                                                          <Text style={{fontSize:11,color:'gray',marginLeft:30,marginTop:5,fontWeight:'bold'}}>N455,000</Text>
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
     <View style={{flexDirection:'row',width:width,height:hp('4%'),backgroundColor:'transparent', }}>
      <Image source={require('../images/data.png')} style={{height:17, width:25,marginLeft:30,alignItems:'center' }} />
     <Text style={{fontSize:14,alignItems:'center', marginLeft:10,}}>2 New Orders</Text>
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
export default HomeNew ;




const styles = StyleSheet.create({

  MainContainer: {
width:wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    flexDirection:'column',

  },

    top: {
     height:hp('25.3%'),
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
    width:wp('96%'),
    marginRight:1,
    marginLeft:2,
    elevation: hp('1.5%'),
},
  enroute: {
 width:wp('100%'),
 height:hp('23.5%'),



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
  borderColor:'#00b300',
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  flexDirection:'column',
 shadowOffset: {width: 0, height:3},
 shadowOpacity: 0.10,
 shadowRadius: 7.65,
  elevation: 3.9,
  backgroundColor:'#00b300',
  color:'#fff',
  alignItems:'center',
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
  flexDirection:'column',
 shadowOffset: {width: 0, height: 3},
 shadowOpacity: 0.10,
 shadowRadius: 3.65,
  elevation: 0.9,
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
 shadowOffset: {width: 0, height: 3},
 shadowOpacity: 0.10,
 shadowRadius: 3.65,
  elevation: 0.9,
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
 shadowOffset: {width: 0, height: 3},
 shadowOpacity: 0.10,
 shadowRadius: 3.65,
  elevation: 0.9,
  backgroundColor:'#C71818',
  alignItems:'center',
},
scrollContainerDown:{
  flex: 1,
  flexDirection: 'column',
  marginLeft:1,
},

cardsEnroute:{
 height:"24%",
  width: wp('92%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'row',
 justifyContent:'center',
 borderBottomColor:'gray',
 borderStyle:'solid',
 borderBottomWidth:2,
 alignItems:'center',


},
cardsDownEnroute:{
 width: wp('95%'),
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
     marginRight:1,
     marginLeft:8,

},
cardsDown:{
 width: wp('95%'),
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
     elevation: hp('1.5%'),
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
