import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,TouchableOpacity,Image,Dimensions,ScrollView,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
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



 class Driver extends Component{
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

                         <View style={{flexDirection:'row',left:wp('10%'), position:'absolute', top:hp('2%')}}>
                                   <Text style={{fontSize:16, fontWeight:'bold'}}>All Drivers</Text>
                         </View>

              <View style={styles.list}>
              <ScrollView vertical={true}
              style={styles.scrollContainerDown}
               ref={(scrollView) => { _scrollView = scrollView; }}
              showsVerticalScrollIndicator={false}>
               <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('SelectDriver')}>

                   <View style={styles.cardsList}>

                               <View style={styles.listAvatar}>
                               <Image source={require('../../images/driver1.jpg')} style={{width:50,height:50,borderRadius:20}}  />
                               </View>
                       <View style={styles.listContent}>
                                    <View style={styles.driverName}>
                                              <Text style={styles.driverNameCaption}>Festus Obiligwe</Text>
                                    </View>

                                    <View style={styles.DetailContent}>

                                                    <View>

                                                    <View style={{flexDirection:'row', marginLeft:10,}}>
                                                            <View style={{width:wp('40%')}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>Deliveries</Text></View>
                                                             <View style={{width:wp('40%')}}><Text style={{fontSize:9,color:'gray',marginTop:1,flexWrap: 'wrap',fontWeight:'bold',marginLeft:8,}}>Assigned  Truck</Text></View>
                                                    </View>
                                                    <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                              <View style={{width:wp('40%')}}><Text style={{fontSize:12,color:'black',fontWeight:'bold',marginLeft:8, }}>9,890</Text></View>
                                                              <View style={{width:wp('30%')}}><Text style={{fontSize:11,color:'gray',flexWrap: 'wrap',fontWeight:'bold'}}>93,000,000 Kg</Text></View>
                                                    </View>

                                                    </View>
                                    <View></View>
                                    </View>
                       </View>

                   </View>
               </TouchableOpacity>
               <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('SelectDriver')}>

                   <View style={styles.cardsList}>

                               <View style={styles.listAvatar}>
                               <Image source={require('../../images/driver2.jpeg')} style={{width:54,height:52,borderRadius:20}}  />
                               </View>
                       <View style={styles.listContent}>
                                    <View style={styles.driverName}>
                                              <Text style={styles.driverNameCaption}>Kadiri Wani</Text>
                                    </View>

                                    <View style={styles.DetailContent}>

                                                    <View>

                                                    <View style={{flexDirection:'row', marginLeft:10,}}>
                                                            <View style={{width:wp('40%')}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>Deliveries</Text></View>
                                                             <View style={{width:wp('40%')}}><Text style={{fontSize:9,color:'gray',marginTop:1,flexWrap: 'wrap',fontWeight:'bold',marginLeft:8,}}>Assigned  Truck</Text></View>
                                                    </View>
                                                    <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                              <View style={{width:wp('40%')}}><Text style={{fontSize:12,color:'black',fontWeight:'bold',marginLeft:8, }}>16,890</Text></View>
                                                              <View style={{width:wp('30%')}}><Text style={{fontSize:11,color:'gray',flexWrap: 'wrap',fontWeight:'bold'}}>150,000,000 Kg</Text></View>
                                                    </View>

                                                    </View>
                                    <View></View>
                                    </View>
                       </View>

                   </View>
               </TouchableOpacity>


               <TouchableOpacity
                   onPress={() => this.props.navigation.navigate('SelectDriver')}>

                   <View style={styles.cardsList}>

                               <View style={styles.listAvatar}>
                               <Image source={require('../../images/babaG.png')} style={{width:50,height:50,}}  />
                               </View>
                       <View style={styles.listContent}>
                                    <View style={styles.driverName}>
                                              <Text style={styles.driverNameCaption}>Ahmed Bayaro</Text>
                                    </View>

                                    <View style={styles.DetailContent}>

                                                    <View>

                                                    <View style={{flexDirection:'row', marginLeft:10,}}>
                                                            <View style={{width:wp('40%')}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>Deliveries</Text></View>
                                                             <View style={{width:wp('40%')}}><Text style={{fontSize:9,color:'gray',marginTop:1,flexWrap: 'wrap',fontWeight:'bold',marginLeft:8,}}>Assigned  Truck</Text></View>
                                                    </View>
                                                    <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                              <View style={{width:wp('40%')}}><Text style={{fontSize:12,color:'black',fontWeight:'bold',marginLeft:8, }}>12,890</Text></View>
                                                              <View style={{width:wp('30%')}}><Text style={{fontSize:11,color:'gray',flexWrap: 'wrap',fontWeight:'bold'}}>100,000,000 Kg</Text></View>
                                                    </View>

                                                    </View>
                                    <View></View>
                                    </View>
                       </View>

                   </View>
               </TouchableOpacity>







              </ScrollView>

              </View>



              <View style={styles.buttonContainer}>

                       <View>
                       <TouchableOpacity
                           style = {styles.plusButton}
                         onPress={() => this.props.navigation.navigate('HomeNew')}>
                         <Image source={require('../../images/plus.png')} style={{width:45,height:45,}}  />
                        </TouchableOpacity>
                       </View>
              </View>

       </View>
    );
  }
}
export default Driver;



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
list:{
 position:'absolute',
  flexDirection:'column',
 width:wp('95%'),
 height:hp('50%'),
 top:hp('6%'),
},
cardsList:{
 width: wp('95%'),
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
listAvatar:{
 width:wp('17%'),
 height:hp('10%'),
 padding:10,
backgroundColor:'#f2f2f2',
borderRadius:50,
margin:10,
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
 width:wp('18%'),
 height:hp('10%'),
 top:hp('68%'),
 right:wp('5%'),
 position:'absolute',
 flexDirection:'row',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('2%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('2%'),
     backgroundColor:'transparent',
     alignItems:'center',
     justifyContent:'center',
     zIndex:20,

},

   plusButton:{
    backgroundColor:'transparent',
    padding: 10,
    margin:18,
    height:hp('5%'),
    width:wp('5%'),
    alignItems:'center',
    justifyContent:'center',
    resizeMode: 'contain',
    shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('0.5%') },
    shadowOpacity: 2,
    shadowRadius: 2,
    elevation: hp('0.5%'),
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
