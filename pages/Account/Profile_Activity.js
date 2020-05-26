import React, {Component} from 'react';
import styled from 'styled-components/native';
import HeaderLeft from '../headerLeft';
import ProfileTab from './profileTab';
import Filterbutton from './filter';
import HeaderRight from '../headerRight';
import StarRating from '../StarRating/star-rating';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler,Modal } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountHeaderRight from '../header/accountHeader/accountHeaderRight';
import { NavigationActions } from 'react-navigation';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
// import {
//   Placeholder,
//   PlaceholderMedia,
//   PlaceholderLine,
//   Fade
// } from "rn-placeholder";
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;
type Props = {};
class Profile_Activity extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

     this.state = {
isVisibleTerm: false,
       }

}

                _menu = null;
                  setMenuRef = ref => {
                    this._menu = ref;
                  };
                  showMenu = () => {
                    this._menu.show();
                  };
                  hideMenu = () => {
                    this._menu.hide();
                  };
                  option1Click = () => {
                    this._menu.hide();
                    this.props.option1Click();
                  };
                  option2Click = () => {
                    this._menu.hide();
                    this.props.option2Click();
                  };
                  option3Click = () => {
                    this._menu.hide();
                    this.props.option3Click();
                  };
                  option4Click = () => {
                    this._menu.hide();
                    this.props.option4Click();
                  };
                  componentDidMount() {
                      this.backHandler = BackHandler.addEventListener(
                        "hardwareBackPress",
                        this.backAction
                      );
                    }

                    componentWillUnmount() {
                      this.backHandler.remove();
                    }
                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('MapInfo');
                return true;
                }

                backAction = () => {
                    Alert.alert("Hold on!", "Are you sure you want to go back?", [
                      {
                        text: "Cancel",
                        onPress: () => null,
                        style: "cancel"
                      },
                      { text: "YES", onPress: () => BackHandler.exitApp() }
                    ]);
                    return true;
                  };
                     closeMe = () => {
                      this._menu.hide();
                      this.props.navigation.navigate('Settings')

                     }

    render() {
     const ratingObj = {
       ratings: 3,
       views: 34000
     }
      return (

        <View style={styles.MainContainer}>

                     <View style={styles.up}>
                       <View style={styles.menuDiv}>
                            <TouchableOpacity  onPress={() => this.props.navigation.navigate('MapInfo')}  activeOpacity = { .5 } style={styles.backArrow}>

                                  <Image source={require('../../assets/Back_100.png')} style={styles.backImg}  />


                                 </TouchableOpacity>
                           <TouchableOpacity  onPress={this.showMenu}  activeOpacity = { .5 } style={styles.dotMenu}>
                                   <Image source={require('../../assets/shapes.png')} style={styles.dotImg}  />
                          </TouchableOpacity>
                        </View >
                      <Image source={require('../../assets/sun.jpeg')} style={{width:wp('100%'), height:150,resizeMode:'cover'}}  />
                      <View style={{flexDirection:'column',marginTop:-70}}>

                                <View style={{height:hp('1%'),flexDirection:'row', width:280,left:150}}>
                                                    <View style={{ width:200,justifyContent:'center', alignItems:'center', zIndex:4}}>
                                                         <Text style={{fontSize:15,fontWeight:'bold', alignItems:'center', justifyContent:'center',  color:'#fff'}}>DaregoBespoke Fashion Line</Text>
                                                    </View>
                                                     <View style={{ width:wp('8%'),justifyContent:'center', flexDirection:'row', marginTop:-3}}>
                                                         <View style={styles.online}>
                                                         </View>
                                                      </View>
                                </View>
                                                     <View style={{  width:300,justifyContent:'center', alignItems:'center', marginLeft:100,marginTop:18}}>
                                                          <Text style={{fontSize:11, alignItems:'center', justifyContent:'center',color:'#fff'}}>Designer of all kinds of Fabrics Bespoke </Text>
                                                     </View>
                       </View>

                    </View>
                     <View style={styles.middle}>
                     <View style={{height:hp('7%'), width:wp('45%'), justifyContent:'center', alignItems: 'center', left:20, flexDirection:'column'}}>
                           <StarRating ratingObj={ratingObj}/>
                                <View style={{ width:wp('19%'),flexDirection:'row',paddingTop:5}}>
                                    <TouchableOpacity
                                        onPress = {() => {alert("Sorry Editing Title: DaregoBespoke fashion Line is disabled by admin!")}}
                                        activeOpacity={0.6}
                                        style={styles.editButton} >
                                          <Image style={styles.userImageContainer} source={require('../../images/editt.png')} style={{width:18, height:18,backgroundColor:'#fff'}} />

                                   </TouchableOpacity>
                                           <Text style={{fontSize:8, padding:5, color:'rgb(255,165,0)',}}>Edit Profile</Text>
                                                      </View>
                     </View>
                     <View style={{flexDirection:'row', flexWrap:'wrap'}}>

                     <View style={{flexDirection:'column', alignItems:'center'}}>
                       <Text style={{fontSize:10, paddingLeft:20,paddingRight:20,color:'#EBB81D',fontWeight:'bold'}}>19</Text>
                       <Text style={{fontSize:10,paddingLeft:20,paddingRight:20,color:'#EBB81D',fontWeight:'bold' }}>JOBS COMPLETED</Text>
                     </View>


                       <TouchableOpacity style={styles.jobs} onPress={() => this.props.navigation.navigate('Profile_Activity_Jobs')}>

                      <Image style={styles.userImageContainer} source={require('../../assets/work.png')} style={{width:15, height:15,marginLeft:10,marginRight:10}} />
                       <Text style={{fontSize:8, color:'#fff', marginleft:10 }}>JOBS</Text>
                       <View style={{width:20,height:20, borderRadius:50,backgroundColor:'red', alignItems:'center', justifyContent:'center', marginTop:-25, zIndex:8}}><Text style={{color:'#fff',fontSize:10}}>7</Text></View>

                     </TouchableOpacity>
                     </View>


                     </View>

                     <View style={styles.down}>
                     <View style={styles.downHeader}>


                        <ProfileTab/>

                     </View>

                     </View>
                       {/*this is where the profile Image starts*/}
                          <View style={styles.circle}>
                                <Image source={require('../../assets/woman.webp')} style={{width:100, height:100,borderRadius:50,borderColor:'gray', border:'solid', borderWidth:0, resizeMode:'cover'}}  />
                           </View>

                      {/*this is where the profile Image ends*/}


                      {/*this is where the pop up menue StarRating*/}
                       <View style={styles.menustyle}>
                           <Menu
                             ref={this.setMenuRef}
                             button={
                               <Text style={this.props.textStyle}>
                                 {this.props.menutext}
                               </Text>
                             }>
                           <MenuItem >Wallet</MenuItem>
                           <MenuDivider />
                           <MenuItem onPress={() => this.props.navigation.navigate('Profile_Activity_Jobs')}>
                          View Jobs
                           </MenuItem>
                           <MenuDivider />
                         <MenuItem  >
                          Become A Merchant (For Client)
                         </MenuItem>
                         <MenuDivider />
                         <MenuItem  >
                          Premium
                         </MenuItem>
                           <MenuDivider />
                         <MenuDivider />
                         <MenuItem onPress={() => this.setState({ isVisibleTerm: true})}>
                         Policy, Terms and Conditions
                         </MenuItem>
                         <MenuDivider />
                         <MenuItem onPress= {this.closeMe}>
                         Settings
                         </MenuItem>
                         <MenuDivider />
                         <MenuItem  onPress={ this.backAction}>
                         Logout
                         </MenuItem>
                       </Menu>
                     </View>
                   {/*this is where the pop up menue end*/}
                   <Modal
                      animationType = {"fade"}
                      transparent = {true}
                      visible = {this.state.isVisibleTerm}
                      onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

                          <View style = {styles.modal}  >
                          <View style={styles.top}>
                          <Image source={require('../../images/GG.png')} style={styles.termLogoSize} />
                          </View>
                             <View><Text style={{fontSize:20, fontWeight:'bold',fontFamily:'Roboto', color:'#737373', marginBottom:10}}>Terms & Condition</Text></View>

                              <View style={styles.termContent}>
                              <ScrollView vertical={true}
                              style={styles.scroll}
                               ref={(scrollView) => {scrollView = scrollView; }}
                              showsVerticalScrollIndicator={false}>
                                 <Text style={{color:'#666666', padding:10,lineHeight:20}}>

                                 Generic Terms and Conditions Template
                   Please read these terms and conditions ("terms", "terms and conditions") carefully before using [website] website (the "service") operated by [name] ("us", 'we", "our").

                   Conditions of Use

                   We will provide their services to you, which are subject to the conditions stated below in this document. Every time you visit this website, use its services or make a purchase, you accept the following conditions. This is why we urge you to read them carefully.

                   Privacy Policy

                   Before you continue using our website we advise you to read our privacy policy [link to privacy policy] regarding our user data collection. It will help you better understand our practices.

                   Copyright

                   Content published on this website (digital downloads, images, texts, graphics, logos) is the property of [name] and/or its content creators and protected by international copyright laws. The entire compilation of the content found on this website is the exclusive property of [name], with copyright authorship for this compilation by [name].

                   Communications

                   The entire communication with us is electronic. Every time you send us an email or visit our website, you are going to be communicating with us. You hereby consent to receive communications from us. If you subscribe to the news on our website, you are going to receive regular emails from us. We will continue to communicate with you by posting news and notices on our website and by sending you emails. You also agree that all notices, disclosures, agreements and other communications we provide to you electronically meet the legal requirements that such communications be in writing.

                   Applicable Law

                   By visiting this website, you agree that the laws of the [your location], without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come between [name] and you, or its business partners and associates.

                   Disputes

                   Any dispute related in any way to your visit to this website or to products you purchase from us shall be arbitrated by state or federal court [your location] and you consent to exclusive jurisdiction and venue of such courts.

                   Comments, Reviews, and Emails

                   Visitors may post content as long as it is not obscene, illegal, defamatory, threatening, infringing of intellectual property rights, invasive of privacy or injurious in any other way to third parties. Content has to be free of software viruses, political campaigns, and commercial solicitation.

                   We reserve all rights (but not the obligation) to remove and/or edit such content. When you post your content, you grant [name] non-exclusive, royalty-free and irrevocable right to use, reproduce, publish, modify such content throughout the world in any media.

                   License and Site Access

                   We grant you a limited license to access and make personal use of this website. You are not allowed to download or modify it. This may be done only with written consent from us.

                   User Account

                   If you are an owner of an account on this website, you are solely responsible for maintaining the confidentiality of your private user details (username and password). You are responsible for all activities that occur under your account or password.

                   We reserve all rights to terminate accounts, edit or remove content and cancel orders in their sole discretion.
                                 </Text>
                               </ScrollView>
                                   </View>
                             <View style={styles.btnContainer}>
                                 <View style={styles.requestService}>
                                 <TouchableOpacity style={styles.reqBtn} onPress = {() => {
                                     this.setState({ isVisibleTerm:false})}}>
                                 <Text style={{color:'gray', fontSize:12,fontFamily:'roboto'}}>CLOSE</Text>
                                 </TouchableOpacity>
                                 </View>


                             </View>

                      </View>


                    </Modal>
        </View>

      );
    }
  }




export default Profile_Activity;


  const styles = StyleSheet.create({
    MainContainer: {
      width:wp('100%'),
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      flexDirection:'column',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 0.5 },
      shadowOpacity: 2,
      shadowRadius: 2,
      elevation: hp('0.9%'),

    },
    up:{

      position:'absolute',
      width:wp('100%'),
      height:160,
      top:hp('0%'),
      alignItems:'center',
      flexDirection:'column',
    },
    middle:{
      backgroundColor: '#fff',
      position:'absolute',
      width:wp('100%'),
      height:hp('14%'),
      top:hp('21%'),
      alignItems:'center',
      flexDirection:'column',
      borderBottomColor:'#fff',
      borderBottomWidth:1,
      borderTopColor:'#f2f2f2',
     // borderTopColor:'#a3c2c2',
      borderTopWidth:1,
    },
menuDiv:{
 width:wp('100%'),
 flexDirection:'row',

},
    down:{
      backgroundColor: '#e6ffff',
      position:'absolute',
      width:wp('100%'),
      //height:hp('67%'),
      top:hp('35%'),
      alignItems:'center',
      flexDirection:'column',
    },
    downHeader:{
     width:wp('99%'),
     //height:hp('50%'),
      flex:1,
     backgroundColor:'rgb(255,165,0)',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'center',


    },
    circle:{
    backgroundColor: 'gray',
    position:'absolute',
    top:70,
    alignItems:'center',
    flexDirection:'column',
    borderRadius:100,
    borderColor:'#e6ffff',
    borderWidth:0,
    borderStyle:'solid',
    left:wp('6%'),
    marginRight:20,
     },


    image:{
     width:wp('19%'),
     height:hp('11%'),
     alignItems:'center',
     backgroundColor:'#f2f2f2',
     justifyContent:'center',
     borderRadius:100,
     top:hp('1%'),
     position:'absolute',

    },
    Name:{
     position:'absolute',
     top:hp('12%'),
    },
    Scroll:{
     position:'absolute',
     top:hp('22%'),
     width:wp('100%'),
     height:hp('16%'),
     justifyContent:'center',

    },

    bottom: {
   flex: 1,
   width:wp('96%'),


  },
  welcomeMessage:{
  marginLeft:20,
  },
  welcomeMessageText:{
  fontSize:17,
  fontWeight:'bold',
  padding:3,
  },

  listAvatar:{
   width:wp('13%'),
   height:hp('7%'),
   padding:10,
  backgroundColor:'#fff',
  borderRadius:50,
  margin:10,
  marginLeft:20,
  borderRadius:50,
  borderStyle:'solid',
  borderWidth:0.9,
  borderColor:'#f2f2f2',
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


  list:{
   height:hp('41%'),
   width: wp('99%'),
   resizeMode:'contain',
   backgroundColor:'#f2f2f2',
   top:hp('40%'),
   position:'absolute'
  },
listContent:{
 height:hp('10%'),
 width: wp('97%'),
 resizeMode:'contain',
 backgroundColor:'#ffffff',
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'space-between',
 margin:5,
 shadowColor: '#000',
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('0.5%'),
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
  text1:{
   color:'green',

  },
  text2:{
   color:'white',
  },
  online:{
   width:15,
   height:15,
   backgroundColor:'#34B44B',
   borderRadius:100,
   flexDirection:'column',
  },
  jobs:{
   backgroundColor:'#34B44B',
  flexDirection:'row',
  alignItems:'center',
  marginLeft:20,
  padding:5,
  width:60,
  height:30,
  borderRadius:2,
  justifyContent:'space-evenly',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  },
  editButton:{
   position:'absolute',
  width:200,
  left:-30,
 },
 backArrow:{
  flexDirection:'row',
 justifyContent:'space-between',
 position:'absolute',
 top:10,
 height:60,
 width:150,
 zIndex:21,

 },
 dotMenu:{
  width:width,
  flexDirection:'row',
 justifyContent:'space-between',
 position:'absolute',
 top:10,
 height:60,
 width:width,
left:1,
 zIndex:20,

 },
 backImg:{
 width:24,
 height:20,
 top:15,
 left:20,
 shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
 elevation: hp('0.8%'),
},
dotImg:{
width:20,
height:20,
top:15,
left:wp('90%'),
shadowColor: '#fff',
shadowOffset: { width: 0, height:hp('1.5%') },
shadowOpacity: 2,
shadowRadius: 1,
elevation: hp('0.8%'),
zIndex:21
},

headerText: {
    fontSize: 7,
    margin: 5,
    fontWeight: "bold"
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 7,
    zIndex:21
  },
  menustyle:{
   position:'absolute',
   right: 16,
   flexDirection: 'row',
   justifyContent: 'flex-end',
   top:20
      },
      modal: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor : "#fff",
      height: 600 ,
      width: '90%',
      borderRadius:10,
      borderWidth: 1,
      borderColor: '#fff',
      marginTop: 30,
      marginLeft: 20,
      shadowColor: '#fff',
      shadowOffset: { width: 0, height:hp('1.5%') },
      shadowOpacity: 2,
      shadowRadius: 1,
      elevation: hp('0.8%'),
       },
       top:{
        width: '100%',
        height:100,
        position:'absolute',
        top:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
       },
       termLogoSize:{
       width: 50,
       height:50,
       alignSelf: 'center',
       resizeMode: 'contain',
       marginTop:-30
      },
      termContent:{
       height:420,
       width:280,
       borderStyle:'solid',
       borderWidth:0.2,
       borderColor:'gray',
       borderRadius:8
      },
      btnContainer:{
       width:270,
       height:100,
       borderWidth:0,
       borderStyle:'solid',
       borderColor:'#f6f6f6',
       position:'absolute',
       top:535,
       alignItems:'center',
      },
      btnContainerSer:{
       width:270,
       height:50,
       borderWidth:0,
       borderStyle:'solid',
       borderColor:'#f6f6f6',
       position:'absolute',
       top:440,
       alignItems:'center',
      },
      reqBtn:{
       width:270,
       height:40,
       backgroundColor:'#fff',
       margin:5,
       alignItems:'center',
       justifyContent:'center',
       shadowColor: '#fff',
      shadowOffset: { width: 0, height:hp('1.5%') },
      shadowOpacity: 2,
      shadowRadius: 1,
       elevation: hp('0.8%'),
       borderRadius:50,
      },
  });
