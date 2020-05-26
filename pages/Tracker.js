import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,TouchableOpacity,Image,Dimensions,ScrollView,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import TrackerNavBar from './TrackerNavBar';
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


 class Tracker extends Component{
  constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }


     static navigationOptions =
     {
       headerRight:<TrackerNavBar/>,
        headerShown:'true',
        headerStyle:{
         backgroundColor:'#fff',
        }
     };

     componentDidMount() {
    loc(this);
  }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        rol();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('OrderDetailsMore');
        return true;
    }

  render() {

    return (

      <View style={styles. MainContainer}>

      <View style={styles.cardsTop}>


          <View style={styles.listContent}>
                       <View style={styles.cardsTopBox}>

                                       <View>

                                       <View style={{flexDirection:'row', marginLeft:10,}}>
                                               <View style={{width:wp('40%')}}><Text style={{fontSize:13,color:'gray',marginLeft:15,fontWeight:'bold'}}>Product name</Text></View>
                                                <View style={{width:wp('40%')}}><Text style={{fontSize:13,color:'gray',marginTop:1,flexWrap: 'wrap',fontWeight:'bold',marginLeft:8,}}>Estimated arrival</Text></View>
                                       </View>
                                       <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                 <View style={{width:wp('40%')}}><Text style={{fontSize:15,color:'black',fontWeight:'bold',marginLeft:9, }}>Wheat</Text></View>
                                                 <View style={{width:wp('30%')}}><Text style={{fontSize:15,color:'#000000',flexWrap: 'wrap',fontWeight:'bold'}}>4:20</Text></View>
                                       </View>
                                       <View style={{flexDirection:'row',width:width,height:hp('4%'),backgroundColor:'transparent', marginTop:2, }}>
                                        <Image source={require('../images/down-button.png')} style={{height:hp('1.15%'), width:wp('4%'),marginLeft:30,alignItems:'center', marginTop:hp('1%') }} />
                                       <Text style={{fontSize:14,alignItems:'center', marginLeft:10,color:'#0E32F1'}}>View order details</Text>
                                       </View>
                                       </View>

                       </View>
          </View>

      </View>


                    <View style={styles.list}>
                    <ScrollView vertical={true}
                    style={styles.scrollContainerDown}
                     ref={(scrollView) => { _scrollView = scrollView; }}
                    showsVerticalScrollIndicator={false}>
                     <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('SelectDriver')}>

                         <View style={styles.list1}>

                                            <View style={styles.trackerContent}>
                                                    <View style={styles.smallDotContainer}>
                                                           <View style={styles.smallDot}></View>
                                                     </View>
                                           <View style={styles.estimatedTime}>
                                                    <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>14:20 </Text>
                                    </View>
                                            <View style={styles.colorContainer}>

                                                         <View style={styles.listAvatar}>
                                                         <Image source={require('../images/location.png')} style={{width:40,height:40,}}  />
                                                         </View>
                                                         <View style={{flexDirection:'row',alignItems:'center'}}>
                                                                   <View style={{width:wp('45%')}}><Text style={{fontSize:13,color:'#fff',marginTop:5,fontWeight:'bold',marginLeft:8,zIndex:21}}>Festus is en route to the pickup location </Text></View>

                                                         </View>

                                            </View>
                              </View>
                         </View>
                     </TouchableOpacity>
                     <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('SelectDriver')}>

                         <View style={styles.list2}>

                                    <View style={styles.trackerContent}>
                                   <View style={styles.smallDotContainer}>
                                   <View style={styles.smallDot}></View>
                                   </View>
                                    <View style={styles.estimatedTime}>
                                    <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>15:30 </Text>
                                    </View>
                                    <View style={styles.colorContainer1}>

                                    <View style={styles.listAvatar1}>
                                    <Image source={require('../images/location.png')} style={{width:40,height:40,}}  />
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                              <View style={{width:wp('45%')}}><Text style={{fontSize:13,color:'#fff',marginTop:5,fontWeight:'bold',marginLeft:8,zIndex:21}}>Festus has arrived at the pickup location </Text></View>

                                    </View>

                                    </View>
                              </View>
                         </View>
                     </TouchableOpacity>


                     <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('SelectDriver')}>

                         <View style={styles.list3}>

                                    <View style={styles.trackerContent}>
                                             <View style={styles.smallDotContainer}>
                                             <View style={styles.smallDot}></View>
                                   </View>
                                    <View style={styles.estimatedTime}>
                                    <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>17:30 </Text>
                                    </View>
                                    <View style={styles.colorContainer2}>

                                    <View style={styles.listAvatar2}>
                                    <Image source={require('../images/location.png')} style={{width:40,height:40,}}  />
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                              <View style={{width:wp('45%')}}><Text style={{fontSize:13,color:'#fff',marginTop:5,fontWeight:'bold',marginLeft:8,zIndex:21}}>Festus is en route to the delivery location </Text></View>

                                    </View>

                                    </View>
                              </View>
                         </View>
                     </TouchableOpacity>

                     <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('SelectDriver')}>

                         <View style={styles.list4}>

                                    <View style={styles.trackerContent}>
                                   <View style={styles.smallDotContainer}>
                                   <View style={styles.smallDot}></View>
                                   </View>
                                    <View style={styles.estimatedTime}>
                                    <Text style={{fontSize:13,color:'black',fontWeight:'bold'}}>22:40 </Text>
                                    </View>
                                    <View style={styles.colorContainer3}>

                                    <View style={styles.listAvatar3}>
                                    <Image source={require('../images/location.png')} style={{width:40,height:40,}}  />
                                    </View>
                                    <View style={{flexDirection:'row',alignItems:'center'}}>
                                              <View style={{width:wp('45%')}}><Text style={{fontSize:13,color:'#fff',marginTop:5,fontWeight:'bold',marginLeft:8,zIndex:21}}>Festus has arrived at the delivery location </Text></View>

                                    </View>

                                    </View>
                              </View>
                         </View>
                     </TouchableOpacity>







                    </ScrollView>

                    </View>






              <View style={styles.buttonContainer}>
                       <View>
                       <TouchableOpacity
                           style = {styles.acceptButton}
                         onPress={() => this.props.navigation.navigate('HomeNew')}>
                           <Text style = {{color:'#fff', fontSize:18}}  > CALL FESTUS</Text>
                        </TouchableOpacity>
                       </View>
              </View>

       </View>
    );
  }
}
export default Tracker;



const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: '#fff',
    flexDirection:'column',
    resizeMode: 'contain',

  },
navTitle:{
 width:width,
 height:hp('10%'),
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'#fff',
 resizeMode: 'contain',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 position:'absolute',
 top:hp('0%'),

},
navCaption:{
 fontSize:20,
 justifyContent:'center',
 alignItems:'center',
 color:'black',
},
cardsTop:{
 position:'absolute',
 top:hp('-1%'),
 width: wp('100%'),
 height:hp('13%'),
 resizeMode: 'contain',
   borderWidth: 0,
  borderRadius: 1.5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  marginTop: 5,
  flexDirection:'row',
  backgroundColor:'#fff',
},
trackerList:{
 position:'absolute',
  flexDirection:'column',
 width:wp('95%'),
 height:hp('50%'),
 top:hp('1%')

},
cardsTopBox:{
 flexDirection:'column',
 justifyContent:'space-between',
 backgroundColor:'#fff',
 marginTop:10,

},
colorContainer:{
 flexDirection:'row',
 width:wp('70%'),
 backgroundColor:'#00b300',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 marginTop: 5,
 flexDirection:'row',
 backgroundColor:'#00b300',
},

colorContainer1:{
 flexDirection:'row',
 width:wp('70%'),
 backgroundColor:'#00b300',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 marginTop: 5,
 flexDirection:'row',
 backgroundColor:'#e0ebeb',
},
colorContainer2:{
 flexDirection:'row',
 width:wp('70%'),
 backgroundColor:'#00b300',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 marginTop: 5,
 flexDirection:'row',
 backgroundColor:'#e0ebeb',
},
colorContainer3:{
 flexDirection:'row',
 width:wp('70%'),
 backgroundColor:'#00b300',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 marginTop: 5,
 flexDirection:'row',
 backgroundColor:'#e0ebeb',
},
estimatedTime:{
 alignItems:'center',
 justifyContent:'center',
 width:wp('15%'),
},
smallDotContainer:{
 width:wp('13%'),
 justifyContent:'center',
 alignItems:'center',
},
smallDot:{
 width:wp('4%'),
 height:hp('2.5%'),
 backgroundColor:'black',
  borderRadius:50,
   justifyContent:'center',
 alignItems:'center',
},

list:{
 position:'absolute',
  flexDirection:'column',
 width:wp('95%'),
 height:hp('60%'),
 top:hp('15%'),
},


trackerContent:{
 width: wp('95%'),
 height:hp('11%'),
 resizeMode: 'contain',
   borderWidth: 0,
  borderRadius: 1.5,
  shadowColor: '#000',
  flexDirection:'row',
  marginTop:hp('1%'),

},
listAvatar:{
 width:wp('15%'),
 height:hp('9%'),
 padding:10,
backgroundColor:'#ccffdd',
borderRadius:50,
margin:5,
},
listAvatar1:{
 width:wp('15%'),
 height:hp('9%'),
 padding:10,
backgroundColor:'#e0ebeb',
borderRadius:50,
margin:5,
borderColor:'#fff',
borderStyle:'solid',
borderWidth:0.5,
},
listAvatar2:{
 width:wp('15%'),
 height:hp('9%'),
 padding:10,
backgroundColor:'#e0ebeb',
borderRadius:50,
margin:5,
borderColor:'#fff',
borderStyle:'solid',
borderWidth:0.5,
},
listAvatar3:{
 width:wp('15%'),
 height:hp('9%'),
 padding:10,
backgroundColor:'#e0ebeb',
borderRadius:50,
margin:5,
borderColor:'#fff',
borderStyle:'solid',
borderWidth:0.5,
},
listContent:{
 flexDirection:'column',

},
driverName:{
 padding:5,
 marginTop:hp('2%'),
},

driverNameCaption:{
 fontSize:13,
 fontWeight:'bold',
 textAlign:'left',
 marginLeft:wp('5%')

},

buttonContainer:{
 width:wp('99%'),
 height:hp('14%'),
 top:hp('68%'),
 position:'absolute',
 flexDirection:'row',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('2%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('2%'),
     backgroundColor:'#fff',
     alignItems:'center',
     justifyContent:'center',

},

   acceptButton:{
    backgroundColor:'#00b300',
    padding: 10,
    margin:18,
    height:hp('10%'),
    width:wp('95%'),
    alignItems:'center',
    justifyContent:'center',
   },

detail:{
 width:width,
 height:hp('40%'),
 justifyContent:'center',
 alignItems:'center',
 backgroundColor:'#fff',
 resizeMode: 'contain',
 borderStyle:'solid',
 borderWidth:0.3,
 borderColor:'gray',
},

DetailContent:{
 flexDirection:'column',
 justifyContent:'space-between',
 backgroundColor:'transparent',

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

});
