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
 class OrderDetailsMore extends Component{
  constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }


     static navigationOptions =
     {
        title: 'Order details',
        headerShown:'true',
        headerStyle:{
         backgroundColor:'#fff',
        }
     };

     componentDidMount() {
    loc(this);
  }
  componentDidMount() {
 loc(this);
 }

 componentWillMount() {
     BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
     rol();
 }

    handleBackButtonClick() {
        this.props.navigation.navigate('OrderDetails');
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
                                <View style={{width:wp('50%')}}><Text style={{fontSize:12,color:'gray',marginLeft:3,marginTop:8,fontWeight:'bold', marginLeft:7}}>Order</Text></View>
                                 <View style={{width:wp('30%')}}><Text style={{fontSize:10,color:'gray',marginTop:12,flexWrap: 'wrap',fontWeight:'bold',marginLeft:18,}}>Weight</Text></View>
                        </View>
                        <View style={{flexDirection:'row', marginLeft:10, padding:5}}>
                                  <View style={{width:wp('50%')}}><Text style={{fontSize:14,color:'black',marginTop:5,fontWeight:'bold', }}>Wheat</Text></View>
                                  <View style={{width:wp('30%')}}><Text style={{fontSize:13,color:'black',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:10,}}>100,000 Kg</Text></View>
                        </View>
                        <View style={{ borderBottomColor:'gray',borderBottomWidth:0.5,padding:5, width:wp('60%'), alignItems:'center', left:wp('6%')}}></View>

                        <View style={{flexDirection:'row', marginLeft:10,}}>
                                <View style={{width:wp('50%')}}><Text style={{fontSize:11,color:'gray',marginLeft:8,marginTop:8,fontWeight:'bold'}}>Packaging</Text></View>
                                 <View style={{width:wp('30%')}}><Text style={{fontSize:10,color:'gray',marginTop:10,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>Packaging Count</Text></View>
                        </View>

                        <View style={{flexDirection:'row', marginLeft:10,padding:5}}>
                                  <View style={{width:wp('50%')}}><Text style={{fontSize:15,color:'black',marginTop:5,fontWeight:'bold',marginLeft:0, }}>Sack</Text></View>
                                  <View style={{width:wp('30%')}}><Text style={{fontSize:15,color:'black',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>3,500</Text></View>
                        </View>

                        <View style={{ borderBottomColor:'gray',borderBottomWidth:0.4,padding:5, width:wp('60%'), alignItems:'center', left:wp('6%')}}></View>
                        </View>

                        </View>

                       </View>
                       <View>

                       <View style={styles.referenceTitle}>
                        <Text style={styles.referenceTitleCaption}>Reference number</Text>
                       </View>
                        <View style={styles.DetailContent}>

                        <View>

                        <View style={{flexDirection:'row', marginLeft:wp('8%'),}}>
                                <View style={{width:wp('50%')}}><Text style={{fontSize:12,color:'gray',marginLeft:15,marginTop:8,fontWeight:'bold'}}>Purchase Order#</Text></View>
                                 <View style={{width:wp('30%')}}><Text style={{fontSize:11,color:'gray',marginTop:12,flexWrap: 'wrap',fontWeight:'bold',marginLeft:28,}}>Delivery#</Text></View>
                        </View>
                        <View style={{flexDirection:'row', marginLeft:wp('8%'),padding:5, marginBottom:5}}>
                                  <View style={{width:wp('50%')}}><Text style={{fontSize:14,color:'black',marginTop:5,fontWeight:'bold',marginLeft:8, }}>123456 - LV78</Text></View>
                                  <View style={{width:wp('30%')}}><Text style={{fontSize:13,color:'black',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>1CS09876543</Text></View>
                        </View>

                        <View style={styles.buttonContainer}>
                                 <View>
                                 <TouchableOpacity
                                     style = {styles.declineButton}
                                    onPress = {() => {alert('Thanks Request Rejected Successfully')}}>
                                     <Text style = {{color:'red'}}  > DECLINE</Text>
                                  </TouchableOpacity>
                                 </View>
                                 <View>
                                 <TouchableOpacity
                                     style = {styles.acceptButton}
                                   onPress={() => this.props.navigation.navigate('SelectDriver')}>
                                     <Text style = {{color:'white'}}  > ACCEPT</Text>
                                  </TouchableOpacity>
                                 </View>
                        </View>
                        </View>
                        <View></View>
                        </View>
                         <View></View>
                       </View>
                </View>
       <View style={styles.swipe}>


             <View style={styles.swipeMajorContent}>

             <View>
                              <View style={{flexDirection:'row'}}>
                                   <View style={styles.dot}></View>
                                         <View style={{flexDirection:'column'}}>

                                               <View style={{flexDirection:'row', marginLeft:10,}}>
                                                       <View style={{width:wp('50%')}}><Text style={{fontSize:9,color:'gray',marginLeft:8,fontWeight:'bold'}}>Pickup location</Text></View>
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
                                                     <View style={{width:wp('50%')}}><Text style={{fontSize:9,color:'gray',marginLeft:8,marginTop:8,fontWeight:'bold'}}>Delivery location</Text></View>
                                                      <View style={{width:wp('30%')}}><Text style={{fontSize:9,color:'gray',marginTop:10,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>320 Km</Text></View>
                                             </View>
                                             <View style={{flexDirection:'row', marginLeft:10,}}>
                                                       <View style={{width:wp('50%')}}><Text style={{fontSize:10,color:'gray',marginTop:5,fontWeight:'bold',marginLeft:8, }}>Plot 18, Badagry Road Lagos State</Text></View>
                                                       <View style={{width:wp('30%')}}><Text style={{fontSize:10,color:'gray',marginTop:5,flexWrap: 'wrap',fontWeight:'bold',marginLeft:20,}}>N455,000</Text></View>
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
export default OrderDetailsMore;



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


swipeLabelCaption:{
 fontSize:11,
 fontWeight:'bold',
 color:'#fff',
},
map:{
 justifyContent:'center',
 alignItems:'center',
  width:width,
  height:hp('21%'),

},
detail:{
 width:width,
 height:hp('65%'),
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
 width:wp('88%'),
 height:hp('17%'),
alignItems:'center',
justifyContent:'center',
resizeMode: 'contain',
borderBottomRightRadius:30,
borderTopLeftRadius:30,
flexDirection:'column',
top:hp('15%'),
borderStyle:'solid',
borderWidth:0.3,
borderColor:'#fff',
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('1%') },
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
 width:wp('50%'),
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
 height:hp('15%'),
 alignItems:'center',
 justifyContent:'center',
 resizeMode: 'contain',
 //backgroundColor:'green',
},
DetailTitle:{
 padding:15,
},
DetailTitleCaption:{
 fontSize:14,
 fontWeight:'bold',
 textAlign:'left',

},
referenceTitle:{
 left:wp('9%'),
 marginTop:hp('2%'),
},
referenceTitleCaption:{
 fontSize:13,
 fontWeight:'bold',
 textAlign:'left',
 marginLeft:10,

},
DetailContent:{
 flexDirection:'column',
 justifyContent:'space-between',
 backgroundColor:'transparent',
},
buttonContainer:{
 width:wp('99%'),
 height:hp('14%'),
 flexDirection:'row',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('2%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('2%'),
     backgroundColor:'#f2f2f2',
     alignItems:'center',
     justifyContent:'center',
},

declineButton:{
 backgroundColor:'#fff',
 padding: 10,
 margin: 15,
  height: hp('7%'),
 width:wp('35%'),
 alignItems:'center',
 justifyContent:'center',
borderStyle:'solid',
borderColor:'#fff',
borderWidth:0.5,

},
   acceptButton:{
    backgroundColor:'#00b300',
    padding: 10,
    margin:15,
    height:hp('7%'),
    width:wp('35%'),
    alignItems:'center',
    justifyContent:'center',
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
scrollContainerDown:{
  flex: 1,
  flexDirection: 'column',
  marginLeft:1,
},

dot:{
 width:15,
 height:15,
 backgroundColor:'black',
 borderRadius:30,
 justifyContent:'center',
 marginTop:10,
 marginLeft:25

},
square:{
 width:15,
 height:15,
 backgroundColor:'blue',
 justifyContent:'center',
  marginLeft:25,
  marginTop:15,

},
});
