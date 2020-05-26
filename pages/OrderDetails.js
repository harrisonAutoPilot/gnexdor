import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,TouchableOpacity,Image,Dimensions,ScrollView,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
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

 class OrderDetails extends Component{
  constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  static navigationOptions =
  {
     title: 'Order details',
     headerStyle:{
      backgroundColor:'#fff',
     }
  };



  componentWillMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
      this.props.navigation.navigate('Home');
      return true;
  }


  render() {

    return (

      <View style={styles. MainContainer}>
                <View style={styles.navTitle}>
                       <Text style={styles.navCaption}>Order Details</Text>
                </View>
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
                                title={"Truck Location"}
                                description={"Truck in Transit to .."}
                                 />


                </MapView>
                </View>
                <View style={styles.detail}>
                       <View>

                       <View style={styles.DetailTitle}>
                        <Text style={styles.DetailTitleCaption}>Order Details</Text>
                       </View>
                        <View style={styles.DetailContent}>

                                        <View>

                                        <View style={{flexDirection:'row', marginLeft:10,}}>
                                                <View style={{width:wp('50%')}}><Text style={{fontSize:13,color:'gray',marginLeft:12,marginTop:5,fontWeight:'bold'}}>Order</Text></View>
                                                 <View style={{width:wp('30%')}}><Text style={{fontSize:10,color:'gray',marginTop:10,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>Weight</Text></View>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10,padding:5}}>
                                                  <View style={{width:wp('50%')}}><Text style={{fontSize:12,color:'black',marginTop:5,fontWeight:'bold',marginLeft:8, }}>Wheat</Text></View>
                                                  <View style={{width:wp('30%')}}><Text style={{fontSize:11,color:'gray',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>100,000 Kg</Text></View>
                                        </View>
                                        <View style={{ borderBottomColor:'gray',borderBottomWidth:0.2,padding:5, width:wp('70%'), alignItems:'center', left:wp('5%')}}></View>
                                        <View style={{flexDirection:'row', marginLeft:10,}}>
                                                <View style={{width:wp('50%')}}><Text style={{fontSize:11,color:'gray',marginLeft:8,marginTop:8,fontWeight:'bold'}}>Packaging</Text></View>
                                                 <View style={{width:wp('30%')}}><Text style={{fontSize:10,color:'gray',marginTop:10,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>Packaging Count</Text></View>
                                        </View>
                                        <View style={{flexDirection:'row', marginLeft:10,borderStyle: 'solid', borderBottomColor:'gray',padding:5}}>
                                                  <View style={{width:wp('50%')}}><Text style={{fontSize:13,color:'black',marginTop:5,fontWeight:'bold',marginLeft:8, }}>Sack</Text></View>
                                                  <View style={{width:wp('30%')}}><Text style={{fontSize:11,color:'gray',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>3,500</Text></View>
                                        </View>
                                        </View>
                        <View></View>
                        </View>
                         <View></View>
                       </View>
                </View>
       <View style={styles.swipe}>
       <TouchableOpacity
            onPress={() => this.props.navigation.navigate('OrderDetailsMore')}>
       <View style={styles.swipeLabel}>
           <Text style={styles.swipeLabelCaption}>Tap to View more Details</Text>
       </View>
</TouchableOpacity>
             <View style={styles.swipeMajorContent}>

             <View>
                              <View style={{flexDirection:'row'}}>
                                   <View style={styles.dot}></View>
                                         <View style={{flexDirection:'column',marginTop:-40}}>

                                               <View style={{flexDirection:'row', marginLeft:0,}}>
                                                       <View style={{width:wp('50%')}}><Text style={{fontSize:10,color:'gray',marginLeft:20,marginTop:8,fontWeight:'bold'}}>Pickup location</Text></View>
                                                        <View style={{width:wp('30%')}}></View>
                                               </View>

                                                <View style={{flexDirection:'row', marginLeft:10,}}>
                                                          <View style={{width:wp('50%')}}><Text style={{fontSize:10,color:'gray',marginTop:5,fontWeight:'bold',marginLeft:8, }}>Plot 18, Badagry Road Lagos State</Text></View>
                                                          <View style={{width:wp('30%')}}></View>
                                                </View>
                                           </View>
                                  </View>
                                  <View style={{flexDirection:'row',}}>
                                       <View style={styles.square}></View>
                                             <View style={{flexDirection:'column'}}>
                                             <View style={{flexDirection:'row', marginLeft:10,}}>
                                                     <View style={{width:wp('50%')}}><Text style={{fontSize:10,color:'gray',marginLeft:8,marginTop:8,fontWeight:'bold'}}>Delivery location</Text></View>
                                                      <View style={{width:wp('30%')}}><Text style={{fontSize:8,color:'gray',marginTop:10,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>320 Km</Text></View>
                                             </View>
                                             <View style={{flexDirection:'row', marginLeft:10,}}>
                                                       <View style={{width:wp('50%')}}><Text style={{fontSize:10,color:'gray',marginTop:5,fontWeight:'bold',marginLeft:8, }}>73 Akolazo, Creacent, Airport Road Zamfara State</Text></View>
                                                       <View style={{width:wp('30%')}}><Text style={{fontSize:9,color:'gray',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>N455,000</Text></View>
                                             </View>
                                               </View>
                                      </View>
              </View>






             </View>

                    <View style={{postion:'absolute'}} ></View>

             </View>
      </View>

    );
  }
}
export default OrderDetails;



const styles = StyleSheet.create({

  MainContainer: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  backgroundColor: '#f2f2f2',
    flexDirection:'column',
    resizeMode: 'contain',

  },
navTitle:{
 width:width,
 height:'10%',
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'transparent',
 resizeMode: 'contain',

},
navCaption:{
 fontSize:20,
 fontWeight:'bold',
 marginTop:15,

},
swipeLabelCaption:{
 fontSize:11,
 fontWeight:'bold',
 color:'#fff',
},
map:{
 justifyContent:'center',
 alignItems:'center',
  width:width,
  height:hp('50%'),

},
detail:{
 width:width,
 height:hp('40%'),
 justifyContent:'center',
 alignItems:'center',
 backgroundColor: '#f2f2f2',
 resizeMode: 'contain',
 borderStyle:'solid',
 borderWidth:0.3,
 borderColor:'gray',
},
swipe:{
 position:'absolute',
 zIndex:3,
 backgroundColor:'white',
 width:wp('85%'),
height:hp('18%'),
alignItems:'center',
justifyContent:'center',
resizeMode: 'contain',
borderBottomRightRadius:30,
borderTopLeftRadius:30,
flexDirection:'column',
bottom:hp('24%'),
borderStyle:'solid',
borderWidth:0.3,
borderColor:'#fff',
shadowColor: '#000',
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity: 2,
   shadowRadius: 2,
    elevation: hp('0.5%'),
 backgroundColor:'#fff',
 alignItems:'center',
},

swipeLabel:{
 position:'relative',
 zIndex:3,
 backgroundColor:'black',
 width:wp('48%'),
 height:hp('5%'),
 alignItems:'center',
 justifyContent:'center',
 resizeMode: 'contain',
 borderRadius:5,


},
swipeMajorContent:{
 zIndex:3,
 position:'relative',
 width:wp('80%'),
 height:hp('18%'),
 alignItems:'center',
 justifyContent:'center',
 resizeMode: 'contain',
 //backgroundColor:'green',
},
DetailTitle:{
 padding:5,
},
DetailTitleCaption:{
 fontSize:16,
 fontWeight:'bold',
 textAlign:'left',
 marginLeft:10,

},
DetailContent:{
 flexDirection:'column',
 justifyContent:'space-between',
 backgroundColor:'transparent',


},
mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  top: {
   height:height/4.2,
   backgroundColor:'#fff',
   width:width,

  },
  backgroundImage:{
  width:hp('100%'),
  height: hp('90%'),
  alignSelf: 'center',
  resizeMode: 'contain',
position:'relative',
zIndex:0,
 },

welcomeMessage:{
marginLeft:20,
},
welcomeMessageText:{
fontSize:18,
fontWeight:'bold',
},
scrollContainer:{
  flex: 1,
  flexDirection: 'row',
  marginLeft:20,
},
cards:{
   width:100,
   height:100,
   borderWidth: 1,
  borderRadius: 6,
  borderStyle:'solid',
  borderColor:'#F0F0F0',
  marginLeft: 5,
  marginRight: 5,
  marginTop: 10,
  flexDirection:'column',
 shadowOffset: {width: 0, height: 2},
},
scrollContainerDown:{
  flex: 1,
  flexDirection: 'column',
  marginLeft:1,
},

cardsDown:{
 width: wp('100%'),
 resizeMode: 'contain',
   height:180,
   borderWidth: 0,
  borderRadius: 1.5,
  borderBottomWidth: 0,
  shadowColor: '#fff',
  shadowOffset: {width: 0, height: 2},
  shadowRadius: 1,
  elevation: 2,
  marginTop: 10,
  flexDirection:'column',
  backgroundColor:'#fff',
 shadowOffset: {width: 0, height: 2},
},
cardsDown1:{
 height:"30%",
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'row',
 justifyContent:'space-between',
 borderBottomColor:'black',
 borderStyle:'solid',
 borderBottomWidth:2,
},
cardsDown2:{
 height:"70%",
 width:wp('100%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'column',
 justifyContent:'space-between',
},
dot:{
 width:15,
 height:15,
 backgroundColor:'black',
 borderRadius:30,
 justifyContent:'center',
 marginTop:-22,
 marginLeft:25

},
square:{
 width:15,
 height:15,
 backgroundColor:'#00b300',
 justifyContent:'center',
  marginLeft:25,
  marginTop:15,

},
});
