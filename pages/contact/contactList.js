import React from 'react';
import { Text, View,Platform,SafeAreaView, TouchableOpacity,TouchableHighlight,Input, CheckBox,Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler,
  Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import MapView from 'react-native-maps';
import StarRating from '.././StarRating/star-rating';
import Profile_Activity_Short_Modal from '.././Account/Profile_Activity_ShortModal';
import Tooltip from 'react-native-walkthrough-tooltip';
 import Info from '.././info'
import { NavigationActions } from 'react-navigation';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import RBSheet from "react-native-raw-bottom-sheet";

import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Hr from 'react-native-hr-component'
const width = Dimensions.get('window').width;
import {contactData} from '../../util/contact/contactCardData';
import {characters} from '../../util/map/mapData';
import {data} from '../../util/home/serviceData';
import {reqData} from '../../util/home/serviceRequestData';
import Callout from '.././callout';

class ContactList extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    // header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
      isVisible: false,
     isVisibleService: false,
     isVisibleRequest: false,
      isVisiblePayment:false,
      isVisibleProfile:false,
       }


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


    toggleModal = () => {
      this.setState({isModalVisible: !this.state.isModalVisible});
    };
    toggleModal = () => {
      this.setState({isModalVisibleProfile: !this.state.isModalVisibleProfile});
    };
    toggleModalService = () => {
      this.setState({isModalVisibleService: !this.state.isModalVisibleService});
    };
    toggleModalRequest = () => {
      this.setState({isModalVisibleRequest: !this.state.isModalVisibleRequest});
    };
    toggleModalPayment = () => {
      this.setState({isModalVisiblePayment: !this.state.isModalVisiblePayment});
    };

         showRequest = ()=>{
                 this.props.navigation.navigate('MapInfo');
                 this.setState({isModalVisible: !this.state.isModalVisible});

       }

           saveData = ()=>{
                this.setState({ isVisiblePayment:!this.state.isVisiblePayment})
                 this.RBSheet.close()
                 this.setState({ isVisible:!this.state.isVisible})
         this.setState({ isVisibleRequest:!this.state.isModalVisibleRequest})

                     }

                     saveData2 = ()=>{
                           this.setState({ isVisiblePayment:!this.state.isVisiblePayment})
                           this.setState({ isVisibleRequest:!this.state.isVisibleRequest})
                          this.props.navigation.navigate('Profile_Activity_ClientC')


                               }
                           bacKSelect = ()=>{
                           this.setState({ isVisiblePayment:!this.state.isVisiblePayment})
                           this.RBSheet.open()
                                 }


  render() {
    const {navigate} = this.props.navigation;
    const ratingObj = {
      ratings: 3,
      views: 34000
    }
    return (
     <View style={styles.container}>

     <View style={styles.titleBar}>
               <Text style={{fontSize:20, color:'#747474',}}>Saved Contacts</Text>
     </View>

 <View style={styles.content}>
 <ScrollView vertical={true}
 style={styles.scroll}
  ref={(scrollView) => {scrollView = scrollView; }}
 showsVerticalScrollIndicator={false}>
 {
  contactData && contactData.length > 0 && contactData.map(val => {
   return (


     <View style={styles.listContainer} key={val.id}>
          <View style={styles.avatar}>
         <Image source={val.img} style={{height:70, width:70,alignItems:'center', borderRadius:50, }}/>

          </View>
           <View style={styles.listContent}>

               <View style={styles.secondRow}>

               <View style={{flexDirection:'row', width:300,justifyContent:'space-evenly', alignItems:'center'}}>
              <View style={{flexDirection:'row',width:120,justifyContent:'flex-start', marginLeft:0,}}>
              <Text style={styles.secondRowText}>{val.transCode}</Text></View>
                   <TouchableOpacity activeOpacity = { .5 }>
                        <View style={styles.btnS}>
                          <Image style={styles.userImageContainer} source={require('../../assets/share11.png')} style={{width:15, height:15,}} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={() => this.setState({ isVisible: true})}>
                        <View style={styles.btnR}>
                           <Image style={styles.userImageContainer} source={require('../../assets/request_Service1.png')} style={{width:15, height:15,}} />
                        </View>
                      </TouchableOpacity >
               </View>
               </View>

               <Text style={styles.locTextMessage}>{val.deliveryAddress}</Text>
               <Text style={styles.locTextMessage1}>{val.company}</Text>

           </View>

     </View>


    )
      })
    }
 </ScrollView>
     </View>
     <Modal
        animationType = {"fade"}
        transparent = {true}
        visible = {this.state.isVisible}
        onRequestClose = {() =>{ console.log("Modal has been closed.") } }>
        {/*All views of Modal*/}
        {
         characters.map((character, index)=> {
          return (
            <View style = {styles.modal}  key={index}>
               <View style={styles.top}>
               <Image source={require('../../images/bg1.jpeg')} style={styles.proBgImg} />

               </View>
               <View View style={styles.middle}>
               <View style={styles.left}>
              <Image source={require('../../images/bgU.jpeg')} style={styles.proImg} />

               </View>
                        <View style={styles.right}>
                               <View style={styles.proName}><Text style={{fontSize:20, color:'#000',fontWeight:'bold', color:'#fff'}}>{character.name}</Text></View>
                               <View style={styles.proDistance}>
                               <Image source={require('../../assets/walk.png')} style={styles.walkImg} />
                               <Text>{character.distance} Away</Text>
                               </View>
                               <View style={styles.proRating}><StarRating ratingObj={ratingObj}/></View>
                        </View>
               </View>
               <View style={styles.services}>

                   <View style={styles.serviceIn}>
               <View style={{flexDirection: 'row', justifyContent: 'flex-start', width:270, marginLeft:10}}><Text style={{color:'#1a1a1a', margin:5,alignSelf: 'flex-end', fontSize:10,fontWeight:'bold'}}>Select Desired Services</Text></View>
               <ScrollView vertical={true}
               style={styles.scrollContainerDown}
                ref={(scrollView) => { scrollView = scrollView; }}
               showsVerticalScrollIndicator={false}>
              {
               data && data.length > 0 && data.map(val => {
                return (

                 <View style={styles.serviceDiv}>
                  <View style={{ flexDirection:'row', width:170}}><Text style={{fontSize:11, color:'gray',marginLeft:5}}> {val.serviceName}</Text></View>
                   <View style={{ flexDirection:'row', justifyContent:'center'}}><Text style={{fontSize:11, color:'gray',alignSelf: 'flex-start',}}>from  ₦ {val.price}</Text></View>
                   <CheckBox
                          center
                          title='Click Here'
                          checkedIcon='dot-circle-o'
                          uncheckedIcon='circle-o'
                          checked={this.state.checked}
                        />
                 </View>

                 )
                 })
                 }


                 </ScrollView>
                 <TouchableOpacity style={styles.addService} onPress = {() => {
                     this.setState({ isVisibleService:!this.state.isVisibleService})}}>

                 </TouchableOpacity>
               </View>

               </View>
               <View style={styles.btnContainer}>
                   <View style={styles.requestService}>
                   <TouchableOpacity style={styles.reqBtn} onPress = {() => {
                       this.setState({ isVisibleRequest:!this.state.isVisibleRequest})}}>
                   <Text style={{color:'gray', fontSize:12,}}>REQUEST SERVICE</Text>
                   </TouchableOpacity>
                   </View>
                   <View style={styles.otherServiceBtn}>
                   <TouchableOpacity style={styles.bckBtn} onPress = {() => {
                       this.setState({ isVisible:!this.state.isVisible})}}>
                  <Text style={{color:'gray', fontSize:12,}}>CANCEL</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.bckBtn}  onPress = {() => {
                       this.setState({ isVisibleProfile:!this.state.isVisibleProfile})}}>

                    <Image source={require('../../assets/viewProfile.png')} style={{width:22,height:22}} />
                   </TouchableOpacity>

                   </View>


               </View>

        </View>
       )
      })
     }

      </Modal>


      <Modal
         animationType = {"fade"}
         transparent = {true}
         visible = {this.state.isVisibleService}
         onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

             <View style = {styles.modal}  >
             <View style={styles.top}>
             <Image source={require('../../images/bg1.jpeg')} style={styles.proBgImg} />

             </View>
             <View View style={styles.middle}>
             <View style={styles.left}>
            <Image source={require('../../images/bgU.jpeg')} style={styles.proImg} />

             </View>
                      <View style={styles.right}>
                             <View style={styles.proName}><Text style={{fontSize:20, color:'#000',fontWeight:'bold', color:'#fff'}}>Harrison Ebube</Text></View>
                             <View style={styles.welcome}>
                              <Text style={{fontSize:18,flex: 1, flexWrap: 'wrap', color:'rgb(255,165,0)', textAlign:'center',}}> Hi Please Add your service below!</Text>
                                     </View>

                      </View>
             </View>








                <View style={styles.btnContainerSer}>

                    <View style={styles.otherServiceBtnSer}>
                    <TouchableOpacity style={styles.bckBtnSer} onPress={() => this.RBSheet.open()}>
                     <Text style={{color:'#fff', fontSize:12,}}>ADD</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.bckBtnSer} onPress = {() => {
                        this.setState({ isVisibleService:!this.state.isVisibleService})}}>
                    <Text style={{color:'#fff', fontSize:12,}}>CANCEL</Text>
                    </TouchableOpacity>
                    </View>

                </View>

         </View>


       </Modal>

       <Modal
          animationType = {"fade"}
          transparent = {true}
          visible = {this.state.isVisibleProfile}
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

              <View style = {styles.modal1}  >
                  <TouchableOpacity style={styles.closeButton} onPress = {() => {
                      this.setState({ isVisibleProfile:false})}}>
                  <Text style={{color:'#fff', fontSize:15,zIndex:30}}>CANCEL</Text>
                  </TouchableOpacity>
                  <Profile_Activity_Short_Modal/>
               </View>

        </Modal>


       <Modal
          animationType = {"fade"}
          transparent = {true}
          visible = {this.state.isVisibleRequest}
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

          <View style = {styles.modal}  >
          <View style={styles.topReq}>
          <TouchableOpacity  onPress = {() => { this.setState({ isVisibleRequest:false})}} activeOpacity = { .5 } style={styles.backArrow}>
          <View>
           <Image source={require('../../assets/backG.png')} style={styles.backImg}  />
          </View>
          </TouchableOpacity>
          <Image source={require('../../images/GG.png')} style={styles.reqBgImg} />
          </View>
          <View style={styles.regWith}>
          <View><Text style={styles.Te}>Service Voucher</Text></View>
          </View>
              <View style={styles.voucherTitle}><Text style={{fontSize:15,color:'gray',fontWeight:'bold' }}>Ebube Harrison</Text></View>
              <View style={styles.voucherTitleService}><Text style={{fontSize:10, color:'gray', marginTop:10}}>Developer</Text></View>
                    <View style={styles.serviceCover}>
                    {
                    reqData && reqData.length > 0 && reqData.map(val => {
                      return (

                       <View style={styles.serviceDivSer}>
                        <View style={{ flexDirection:'row', width:150}}><Text style={{fontSize:13, color:'gray',marginLeft:5}}> {val.serviceName}</Text></View>
                         <View style={{ flexDirection:'row', justifyContent:'center'}}><Text style={{fontSize:13, color:'gray',alignSelf: 'flex-start',}}> ₦ {val.price}</Text></View>

                       </View>

                       )
                       })
                       }

                    </View>

                        <View style={styles.btnContainerSer}>

                        <View style={styles.otherServiceBtn}>

                        <TouchableOpacity style={styles.bckBtn} onPress = {() => {
                            this.setState({ isVisibleRequest:!this.state.isVisibleRequest})}}>
                        <Text style={{color:'gray', fontSize:12,}}>CANCEL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bckBtnP}  onPress={() => this.RBSheet.open()}>
                        <Image source={require('../../assets/protect1.png')} style={{width:15, height :15}} />
                        <Text style={{color:'gray', fontSize:10,marginLeft:3}}>SECURE PAY</Text>
                        </TouchableOpacity>
                        </View>

                        </View>

                 </View>


        </Modal>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

     <RBSheet
       ref={ref => {
         this.RBSheet = ref;
       }}
       height={300}
       duration={250}
       customStyles={{
         container: {
           justifyContent: "center",
           alignItems: "center",
           borderTopRightRadius:15,
           borderTopLeftRadius:15,
         }
       }}
     >
                  <View style={styles.sheetContainer}>
                  <View style={styles.topSheet}>
                  <Image source={require('../../assets/secure.png')} style={styles.seqBgImg} />
                  </View>
                        <View style={styles.category}>
                        <TouchableOpacity  onPress={this.saveData}>
                             <View style={styles.payOption}>
                                <Image source={require('../../assets/ting.jpeg')} style={styles.optBgImg} />
                             </View>
                             </TouchableOpacity>
                          <TouchableOpacity onPress={this.saveData}>
                               <View style={styles.payOption}>
                                   <Image source={require('../../assets/vog.png')} style={styles.optMBgImg} />
                               </View>
                          </TouchableOpacity>
                            <TouchableOpacity  onPress={this.saveData}>
                                  <View style={styles.payOption}>
                                        <Image source={require('../../assets/master.png')} style={styles.optBgImg} />
                                  </View>
                            </TouchableOpacity>
                        </View>

                            <View style={styles.selectMessage}><Text style={{fontSize:14,color:'gray'}}>SELECT SECURE PAYMENT OPTION</Text></View>
                  </View>
     </RBSheet>
     </View>


     <Modal
      animationType = {"fade"}
      transparent = {true}
      visible = {this.state.isVisiblePayment}
      onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

          <View style = {styles.modal}  >
          <View style={styles.topPay}>
          <TouchableOpacity  onPress={this.bacKSelect} activeOpacity = { .5 } style={styles.backArrow}>
          <View>
           <Image source={require('../../assets/backG.png')} style={styles.backImg}  />
          </View>
          </TouchableOpacity>
          <Image source={require('../../assets/secure.png')} style={styles.reqBgImg} />
          </View>
                 <View style={styles.payWith}>
                 <View style={styles.fieldSet}>
                  <Text style={styles.legend}>Order</Text>
                         <View style={styles.payTitleDiv}>
                             <View style={{ flexDirection:'row', width:100}}><Text style={{fontSize:15, color:'#34B44B',marginLeft:5, }}>Order Id:</Text></View>
                              <View style={{ flexDirection:'row', width:170,}}><Text style={{fontSize:15, color:'#34B44B',justifyContent:'flex-end'}}> #GNEX/02436/84438</Text></View>
                         </View>
                         <View style={styles.payTitleDiv}>
                           <View style={{ flexDirection:'row', width:100,}}><Text style={{fontSize:15, color:'#34B44B',marginLeft:5,}}>Amount:</Text></View>
                            <View style={{ flexDirection:'row', width:170,}}><Text style={{fontSize:15, color:'#34B44B',justifyContent: 'flex-end'}}>₦57,300</Text></View>
                         </View>

                      </View>
                 </View>
          <View style={styles.enterMessage}><Text style={{fontSize:14,color:'gray'}}>Enter your card details to pay</Text></View>

               <View style={styles.cardNum}>
                  <View style={styles.fieldSet2}>
                     <Text style={styles.legend1}>Card Number</Text>
                        <TextInput
                                style={styles.input1}
                                placeholder='4084 0234 8126 8574'
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                maxLength={16}
                                value={this.state.email}
                              />
                    </View>
               </View>

               <View style={styles.cardNum2}>
                  <View style={styles.fieldSet2}>
                     <Text style={styles.legend1}>Card Expire</Text>
                        <TextInput
                                style={styles.input2}
                                placeholder='20/22'
                                autoCapitalize="none"
                                placeholderTextColor='gray'
                                maxLength={4}
                                value={this.state.email}
                              />
                    </View>

                    <View style={styles.fieldSet3}>
                       <Text style={styles.legend1}>CVV</Text>
                               <TextInput
                                  style={styles.input3}
                                  placeholder='072'
                                  autoCapitalize="none"
                                  placeholderTextColor='gray'
                                  maxLength={3}
                                 value={this.state.email}
                                />
                      </View>

               </View>


               <View style={styles.btnContainerSer}>

               <View style={styles.otherServiceBtn}>

               <TouchableOpacity style={styles.bckBtn} onPress = {() => {
                       this.setState({ isVisiblePayment:!this.state.isVisiblePayment})}}>
               <Text style={{color:'gray', fontSize:10,}}>CANCEL</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.bckBtn}  onPress={this.saveData2}>
               <Text style={{color:'gray', fontSize:10,}}>PROCEED</Text>
               </TouchableOpacity>
               </View>

               </View>



      </View>


     </Modal>
   </View>



    );
  }
}
export default ContactList;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 titleBar:{
width:wp('100%'),
height:60,
justifyContent:'center',
shadowColor: '#000',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
marginTop: 3,
flexDirection:'row',
backgroundColor:'#fff',
alignItems:'center',
justifyContent:'center',
 },
 caption:{
  color:'	rgb(255,165,0)',
  margin:10,
  fontSize:25,
 },
 imageSize:{
 width: 90,
 height:90,
 alignSelf: 'center',
 resizeMode: 'contain',
  },
 content:{
position:'absolute',
 justifyContent:'center',
top:hp('7.5%'),
width:wp('100%'),
 height:hp('85%'),
alignItems:'center',
flexDirection:'column'
 },

flowerSize:{
 width:450,
 height:480,
 marginTop:150,
 marginLeft:500,
 backgroundColor:'#fff',
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
 borderBottomWidth:0.4,
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
fontSize:15,
marginTop:15,
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
fontSize:11,
fontFamily:'serif',
color:'gray',
marginLeft:20,
},
locTextMessage1:{
fontSize:12,
fontFamily:'serif',
color:'#4d4d4d',
marginLeft:20,
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
micImg: {
  padding: 10,
  margin: 5,
  height: 25,
  width: 25,
  resizeMode : 'contain',
  alignItems: 'center',
},
walkImg: {
height: 20,
width: 20,
resizeMode : 'contain',
alignItems: 'center',
margin:1,
},

modal: {
justifyContent: 'center',
alignItems: 'center',
backgroundColor : "#fff",
height: 500 ,
width: '85%',
borderRadius:10,
borderWidth: 1,
borderColor: '#fff',
marginTop: 80,
marginLeft: 25,
shadowColor: '#fff',
shadowOffset: { width: 0, height:hp('1.5%') },
shadowOpacity: 2,
shadowRadius: 1,
elevation: hp('0.8%'),
 },
 modal1: {
 justifyContent: 'center',
 alignItems: 'center',
 backgroundColor : "#fff",
 height: hp('100%') ,
 width: width,
 borderRadius:10,
 borderWidth: 1,
 borderColor: '#fff',
 shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
 elevation: hp('0.8%'),
  },


 text: {
    color: '#3f2949',

 },
 top:{
  width: '100%',
  height:110,
  position:'absolute',
  top:1,
  flexDirection:'row',
 },
 topReq:{
  width: 70,
  height:70,
  position:'absolute',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  top:7,
 },

 topPay:{
  width: 70,
  height:70,
  position:'absolute',
  flexDirection:'column',
  alignItems:'center',
  justifyContent:'center',
  top:25,
 },
 proBgImg:{
  width:'100%',
  height:110,
  resizeMode:'cover',
  borderTopRightRadius:10,
  borderTopLeftRadius:10,
 },
reqBgImg:{
  width:60,
  height:60,
  alignItems:'center',
  position:'absolute',
 },
 proImg:{
 width:95,
 height:95,
 borderRadius:100,
 },
 middle:{
  width: '95%',
  height:110,
  backgroundColor:'transparent',
  position:'absolute',
  top:60,
  flexDirection:'row',
  zIndex:10,
 },
 left:{
  width:95,
  height:95,
  margin:5,
  borderWidth:0,
  borderStyle:'solid',
  borderColor:'#f2f2f2',
  borderRadius:100,
  flexDirection:'column',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  backgroundColor:'#fff',
  alignItems:'center',
 },
 right:{
   width:200,
   marginLeft:2,
 },
 proName:{
  width:190,
  height:30,
  marginTop:20,
  fontFamily:'serif',
  flexDirection:'row',
 },
 proDistance:{
  width:200,
  height:20,
  flexDirection:'row',
  margin:2,
 },
 proRating:{
  width:200,
  height:20,
  marginTop:2,
  marginLeft:7,
 },
 services:{
  width:300,
  height:205,
  borderWidth:0,
  borderStyle:'solid',
  borderColor:'gray',
  position:'absolute',
  top:175,
  flexDirection:'column',
  alignItems:'center',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  backgroundColor:'#fff',
 },
 serviceIn:{
  width:300,
  height:205,
  alignItems:'center',
  marginTop:5
 },
 btnContainer:{
  width:270,
  height:100,
  borderWidth:0,
  borderStyle:'solid',
  borderColor:'#f6f6f6',
  position:'absolute',
  top:390,
  alignItems:'center',
 },
 btnContainerSer:{
  width:290,
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
  height:35,
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
 otherServiceBtn:{
  width:280,
  height:40,
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-evenly'

 },
 otherServiceBtnSer:{
  width:270,
  height:40,
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-evenly'

 },
 bckBtn:{
  width:120,
  height:35,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  borderRadius:50,
 },

 bckBtnP:{
  width:120,
  height:35,
  backgroundColor:'#fff',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  borderRadius:50,
  borderColor:'gray',
  flexDirection:'row'
 },
 bckBtnSer:{
  width:120,
  height:35,
  backgroundColor:'rgb(255,165,0)',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  borderRadius:3,
  borderTopRightRadius:100,
  borderBottomRightRadius:100,
  borderBottomLeftRadius:100,

 },

 reqBtnReq:{
  width:180,
  height:35,
  backgroundColor:'#34B44B',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  borderRadius:3,
  borderTopRightRadius:100,
  borderBottomRightRadius:100,
  borderBottomLeftRadius:100,

 },
 reqBtnCan:{
  width:100,
  height:35,
  backgroundColor:'#34B44B',
  alignItems:'center',
  justifyContent:'center',
  shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
  elevation: hp('0.8%'),
  alignItems:'center',
  borderRadius:3,
  borderTopRightRadius:100,
  borderBottomRightRadius:100,
  borderBottomLeftRadius:100,

 },
 serviceDiv:{
  width:295,
  height:30,
  backgroundColor:'#fff',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
 },
 serviceDivSer:{
  width:280,
  height:30,
  backgroundColor:'#fff',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
 },
 addService:{
  flexDirection:'row',
  height:30,
  width:'96%',
  marginLeft:8,
  marginTop:5,
 },
welcome:{
  width:190,
  height:60,
  flexDirection:'row',
  margin:2,
alignItems:'center',
 },
 regWith:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
  position:'absolute',
  top:75,
 },
 Te:{
  color:'gray',
  fontSize:20,
  fontWeight:'bold',
  color:'#34B44B',
 },
 line:{
  color:'#34B44B',
  alignItems:'center',
  justifyContent:'center',
  fontSize:15,
 },
voucherTitle:{
width:300,
height:50,
flexDirection:'column',
alignItems:'center',
position:'absolute',
top:110,
},
voucherTitleService:{
width:300,
height:30,
flexDirection:'column',
alignItems:'center',
position:'absolute',
top:130,
},
serviceCover:{
width:295,
height:180,
borderWidth:0.5,
borderStyle:'solid',
borderColor:'#f2f2f2',
flexDirection:'column',
alignItems:'center',
position:'absolute',
top:190,
},
sheetContainer:{
flexDirection:'column',
width:wp('100%'),
height:400,
// backgroundColor:'#003321',
alignItems:'center',
justifyContent:'center',
},
topSheet:{
width: 100,
height:100,
position:'absolute',
alignItems:'center',
justifyContent:'center',
top:90,

},
seqBgImg:{
width:90,
height:90,
alignItems:'center',
position:'absolute',
top:-20,
},
category:{
flexDirection:'row',
width:wp('100%'),
height:100,
marginTop:150,
justifyContent:'space-around',
},
payOption:{
width:100,
height:100,
borderWidth:1,
borderStyle:'solid',
alignItems:'center',
borderColor:'#f2f2f2',
borderRadius:100,
justifyContent:'center',
},
optBgImg:{
width:70,
height:70,
resizeMode:'contain',
},
optMBgImg:{
width:90,
height:90,
resizeMode:'contain',
},
selectMessage:{
width:wp('100%'),
height:50,
marginTop:20,
textAlign:'center',
alignItems:'center',
},
payTitleDiv:{
width:250,
height:30,
backgroundColor:'#fff',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-around',

},
payWith:{
flexDirection:'column',
alignItems:'center',
justifyContent:'center',
position:'absolute',
top:105,
},
fieldSet:{
     margin: 10,
     paddingHorizontal: 10,
     paddingBottom: 10,
     borderRadius: 5,
     borderWidth: 1,
     alignItems: 'center',
     borderColor: '#34B44B',
 },
 legend:{
     position: 'absolute',
     top: -14,
     left: 10,
     backgroundColor: '#FFFFFF',
     zIndex:4,
     color:'#34B44B',
 },
 legend1:{
     position: 'absolute',
     top: -14,
     left: 10,
     backgroundColor: '#FFFFFF',
     zIndex:4,
     color:'gray',
 },
 enterMessage:{
  width:wp('100%'),
  height:20,
  position:'absolute',
  textAlign:'center',
  alignItems:'center',
  top:197,
 },
 input1:{
  width:250,
  fontSize:20,
 },
 input2:{
  width:100,
 alignSelf:'center',
 fontSize:20,
 },
 input3:{
  width:120,
  alignSelf:'center',
  fontSize:20,
 },
 cardNum:{
  width:wp('100%'),
  position:'absolute',
  textAlign:'center',
  alignItems:'center',
  top:220,
 },
 cardNum2:{
  width:wp('100%'),
  position:'absolute',
  alignItems:'center',
  top:305,
  justifyContent:'center',
  flexDirection:'row',
 },
 fieldSet2:{
       margin: 10,
       paddingHorizontal: 10,
       paddingBottom: 10,
       borderRadius: 5,
       borderWidth: 1,
       alignItems: 'center',
       borderColor: 'gray'
   },
   fieldSet3:{
         margin: 10,
         paddingHorizontal: 10,
         paddingBottom: 10,
         borderRadius: 5,
         borderWidth: 1,
         alignItems: 'center',
         borderColor: 'gray'
     },
     btnContainerPay:{
      width:320,
      height:50,
      borderWidth:0,
      borderStyle:'solid',
      borderColor:'#f6f6f6',
      position:'absolute',
      top:400,
      alignItems:'center',
     },
     backArrow:{
      width:width,
      flexDirection:'row',
     justifyContent:'space-between',
     position:'absolute',
     top:10,
     zIndex:20,
     marginRight:190,
     },
     backImg:{
     width:24,
     height:20,
     top:15,
     left:60,
     shadowColor: '#fff',
     shadowOffset: { width: 0, height:hp('1.5%') },
     shadowOpacity: 2,
     shadowRadius: 1,
     elevation: hp('0.8%'),
    },
    closeButton:{
     position:'absolute',
     zIndex:990,
     top:20,
     left:20,
     width:300,
    }
})
