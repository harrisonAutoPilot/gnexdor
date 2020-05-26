import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,TouchableOpacity,Image,Dimensions,ScrollView,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import ClientJobTab from './Account/clientJobTab';
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



 class Settings extends Component{
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
        this.props.navigation.navigate('MapInfo');
        return true;
    }

  render() {
 const {navigate} = this.props.navigation;
    return (

      <View style={styles. MainContainer}>

                         <View style={styles.titleBar}>
                         <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile_Activity_Client')}  activeOpacity = { .5 } style={styles.backArrow}>
                            <View>
                               <Image source={require('../assets/settings_200.png')} style={styles.backImg}  />
                            </View>
                         </TouchableOpacity>
                             <Text style={{fontSize:18,color:'#fff', fontWeight:'bold',marginRight:240, marginBottom:10}}>Settings</Text>

                         </View>
                            <View style={styles.tabContainer}>
                            <View style={styles.listContainer} >

                                <Image source={require('../assets/User_100.png')} style={{height:35, width:35,alignItems:'center',margin:10, marginLeft:40, marginTop:25 }}/>
                                  <View style={styles.listContent}>
                                      <View style={styles.secondRow}>
                                      <View style={{flexDirection:'row', width:300,justifyContent:'space-evenly', alignItems:'center'}}>
                                      <Text style={styles.secondRowText}>Account</Text></View>
                                       </View>
                                       <Text style={styles.locTextMessage}>Privacy, Security, Change ID, Phone, Delete</Text>
                                   </View>

                             </View>
                             <View style={styles.listContainer} >
                                 <Image source={require('../assets/notification.png')} style={{height:35, width:35,alignItems:'center',margin:10, marginLeft:40, marginTop:25 }}/>
                                   <View style={styles.listContent}>
                                      <View style={styles.secondRow}>
                                       <View style={{flexDirection:'row', width:300,justifyContent:'space-evenly', alignItems:'center'}}>
                                       <Text style={styles.secondRowText}>Notification</Text></View>
                                        </View>
                                        <Text style={styles.locTextMessage}>Notification Tones, Vibrate</Text>
                                    </View>

                              </View>
                              <View style={styles.listContainer} >
                                  <Image source={require('../assets/question.png')} style={{height:35, width:35,alignItems:'center',margin:10, marginLeft:40, marginTop:25 }}/>
                                    <View style={styles.listContent}>
                                       <View style={styles.secondRow}>
                                        <View style={{flexDirection:'row', width:300,justifyContent:'space-evenly', alignItems:'center'}}>
                                        <Text style={styles.secondRowText}>Help</Text></View>
                                         </View>
                                         <Text style={styles.locTextMessage}>FAQ, Contact Us</Text>
                                     </View>

                               </View>
                               <View style={styles.listContainer} >
                                   <Image source={require('../assets/speaker.png')} style={{height:35, width:35,alignItems:'center',margin:10, marginLeft:40, marginTop:25 }}/>
                                     <View style={styles.listContent}>
                                        <View style={styles.secondRow}>
                                         <View style={{flexDirection:'row', width:300,justifyContent:'space-evenly', alignItems:'center'}}>
                                         <Text style={styles.secondRowText}>Invite a Friend</Text></View>
                                          </View>

                                      </View>

                                </View>
  </View>


       </View>
    );
  }
}
export default Settings;



const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: '#f2f2f2',
    flexDirection:'column',
    resizeMode: 'contain',

  },
  titleBar:{
 width:wp('100%'),
 height:60,
 marginTop: 3,
 flexDirection:'row',
 backgroundColor:'#EBB81D',
 alignItems:'center',
 justifyContent:'space-between',
 position:'absolute',
 top:-3,
  },

  backArrow:{
   width:40,
  zIndex:20,

  },
  backImg:{
  width:34,
  height:34,
  marginLeft:30,
  shadowColor: '#fff',
  shadowOffset: { width: 0, height:hp('1.5%') },
  shadowOpacity: 2,
  shadowRadius: 1,
  elevation: hp('0.8%'),
  left:10,
  marginBottom:10,
  justifyContent:'center',
  marginTop:10
 },
 searchImg:{
 width:24,
 height:20,
 shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
 elevation: hp('0.8%'),
right:20,
 marginBottom:10,
 justifyContent:'center'
},
 tabContainer:{
  width:wp('100%'),
  height:hp('100%'),
  position:'absolute',
  top:60
 },
 listContainer:{
  width:wp('98%'),
 height:hp('12%'),
 borderStyle:'solid',
 borderWidth:0,
 borderColor:'gray',
 flexDirection:'row',

 },
 avatar:{
  width:70,
  height:70,
  borderWidth:0,
  borderStyle:'solid',
 borderColor:'gray',
 margin:2,
 borderRadius:100,
 alignItems:'center',
 justifyContent:'center',
 shadowColor: '#000',
 shadowOffset: { width: 0, height:hp('0.5%') },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 marginTop: 3,
 flexDirection:'row',
 backgroundColor:'#fff',
 marginLeft:15,
 marginTop:25,
 },
 listContent:{
  width:wp('70%'),
  height:100,
  borderBottomWidth:0.09,
  borderStyle:'solid',
 borderBottomColor:'gray',
 margin:1,
 },
 avatarLetter:{
  fontSize:40,
  alignSelf:'center',
  color:'#e4a26f',
  justifyContent:'center',
  textTransform:'capitalize'

 },
 firstRow:{
 width:wp('80%'),
 flexDirection:'row',
 justifyContent:'space-around',
 margin:1
 },
 quantityText:{
  fontSize:16,
  fontWeight:'bold',
  color:'#000',
  fontFamily:'serif'
 },
 dateText:{
 fontSize:16,
 fontWeight:'bold',
 color:'#000',
 fontFamily:'serif'

 },
 secondRow:{
  width:wp('83%'),
  alignItems:'center',
  flexDirection:'row',
 justifyContent:'flex-start',

 },
 secondRowText:{
 color:'#EBB81D',
 fontSize:20,
 marginTop:20,
 marginLeft:35,
 width:300,
fontFamily:'roboto'

 },
 thirdRow:{
 flexDirection:'row',
 width:wp('83%'),
 justifyContent:'space-around'
 },
 locImg:{
  width:10,
 },
 locSize:{
 width:20,
 height:20,
 },
 locText:{
  width:wp('54%'),

 },
 locTextMessage:{
 fontSize:12,
 fontFamily:'roboto',
 color:'#EBB81D',
 marginLeft:18,
 },
 locTextMessage1:{
 fontSize:12,
 fontFamily:'serif',
 color:'#ebb81d',
 marginLeft:20,
 fontFamily:'roboto'
 },
 btnS:{
  width:30,
  height:30,
  backgroundColor:'#fff',
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  flexDirection:'row',
 marginTop:25,
 marginLeft:20,
 },
 btn:{
  width:30,
  height:30,
  backgroundColor:'#fff',
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  flexDirection:'row',
 marginTop:25,
 },
 btnR:{
  width:30,
  height:30,
  backgroundColor:'#fff',
  borderRadius:50,
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height:hp('0.5%') },
  shadowOpacity: 2,
  shadowRadius: 2,
  elevation: hp('0.5%'),
  flexDirection:'row',
 marginTop:25,
 marginRight:28,
 },
 SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#f2f2f2',
    height: hp('7%'),
    width:wp('92%'),
    borderRadius: 100 ,
    top:15,
    position:'absolute',
    shadowColor: '#fff',
   shadowOffset: { width: 0, height:hp('1.5%') },
   shadowOpacity: 2,
   shadowRadius: 1,
    elevation: hp('0.8%'),

 },
});
