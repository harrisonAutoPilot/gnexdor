import React, { Component } from 'react';

import { Text, View,Platform, TouchableOpacity,Dimensions, TouchableHighlight,Input, CheckBox,ScrollView,Image,Alert,TextInput, StyleSheet,BackHandler,Modal } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';


import Icon from 'react-native-vector-icons/FontAwesome';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import MapView from 'react-native-maps';
import BigStarRating from '.././StarRating/bigStar-rating';
import StarRating from '.././StarRating/star-rating';
import Tooltip from 'react-native-walkthrough-tooltip';
 import Info from '.././info';
import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';
import RBSheet from "react-native-raw-bottom-sheet";
import Slider from 'react-native-slide-to-unlock';
import { NavigationActions } from 'react-navigation';
import {comData} from '../../util/clientJob/completedJobData';
import {characters} from '../../util/map/mapData';
import {data} from '../../util/home/serviceData';
import {reqData} from '../../util/home/serviceRequestData';
import Textarea from 'react-native-textarea'
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class Completed extends Component{
 constructor(props) {
   super(props);
 this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

     this.state = {
      isVisible: false,
     isVisibleService: false,
     isVisibleComment: false,
     isVisibleRequest: false,
      isVisiblePayment:false,
       }


 }

                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('Profile_Activity');
                return true;
                }


    toggleModal = () => {
      this.setState({isModalVisible: !this.state.isModalVisible});
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

                            saveData3 = ()=>{
                              this.RBSheet.close()
                          this.setState({ isVisibleService:!this.state.isVisibleService})

                                }

                                endJob = ()=>{
                                      this.setState({ isVisibleService:!this.state.isVisibleService})
                                      this.setState({ isVisibleRequest:!this.state.isVisibleRequest})

                                          }
                           bacKSelect = ()=>{
                           this.setState({ isVisiblePayment:!this.state.isVisiblePayment})
                           this.RBSheet.open()
                                 }
                                 endComment= ()=>{
                                      this.setState({ isVisibleRequest:false})

                                this.setState({ isVisibleComment:false})

                                           }

  render() {
    const {navigate} = this.props.navigation;
    const ratingObj = {
      ratings: 3,
      views: 34000
    }
    return (
     <View style={styles.container}>

     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>
     </View>

 <View style={styles.content}>
 <ScrollView vertical={true}
 style={styles.scroll}
  ref={(scrollView) => {scrollView = scrollView; }}
 showsVerticalScrollIndicator={false}>
 {
  comData && comData.length > 0 && comData.map(val => {
   return (
    <TouchableOpacity  onPress = {() => {
        this.setState({ isVisibleRequest:!this.state.isVisibleRequest})}}>

     <View style={styles.listContainer} key={val.id}>
          <View style={styles.avatar}>
              <Image source={val.img} style={{height:70, width:70,alignItems:'center', borderRadius:50, }}/>

          </View>
           <View style={styles.listContent}>

               <View style={styles.secondRow}>

               <View style={{flexDirection:'row', width:300,justifyContent:'space-evenly', alignItems:'center'}}>
              <View style={{flexDirection:'row',width:190,justifyContent:'flex-start', marginLeft:35,}}>
              <Text style={styles.secondRowText}>{val.transCode}</Text></View>

                        <View style={styles.btn}>

                          <Image style={styles.userImageContainer} source={require('../../assets/calendar.png')} style={{width:12, height:12, marginRight:10}} />
                        </View>
                        <View style={styles.btn1}>
                           <Text style={styles.locTextMessage2}>{val.date}</Text>
                        </View>

               </View>
               </View>

                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                 <Text style={styles.locTextMessage1}>{val.swipe}</Text>
                  <View style={{flexDirection:'row',marginRight:15}}><Text style={styles.locTextMessage1}> Status:<Text style={{color:'#34B44B',}}> {val.status}</Text></Text></View>
                </View>


           </View>

     </View>
 </TouchableOpacity>

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
            <TouchableOpacity  onPress = {() => {
                this.setState({ isVisibleService:!this.state.isVisibleService})}}>
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
               <View style={{flexDirection: 'row', justifyContent: 'flex-start', width:290, marginLeft:10}}><Text style={{color:'#1a1a1a', margin:5,alignSelf: 'flex-end', fontSize:10,fontWeight:'bold'}}>Select Desired Services</Text></View>
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
                   <Text style={{color:'#fff', fontSize:13,}}>REQUEST SERVICE</Text>
                   </TouchableOpacity>
                   </View>
                   <View style={styles.otherServiceBtn}>
                   <TouchableOpacity style={styles.bckBtn}  onPress = {() => {
                       this.props.navigation.navigate('Profile_Activity_Short')}}>
                   <Text style={{color:'#fff', fontSize:12,}}>VIEW PROFILE</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.bckBtn} onPress = {() => {
                       this.setState({ isVisible:!this.state.isVisible})}}>
                   <Text style={{color:'#fff', fontSize:12,}}>CANCEL</Text>
                   </TouchableOpacity>
                   </View>

               </View>
  </TouchableOpacity>
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
             <Image source={require('../../assets/smile.png')} style={styles.smileImg} />

             </View>


                     <View style={{alignItems:'center', flexDirection:'column'}}>
                          <Text style={{fontSize:35 , color:'#34B44B',margin:3,textAlign:'center'}}>Congratulations!!!</Text>
                          <Text style={{fontSize:13, fontWeight:'bold',color:'#666666',margin:3, textAlign:'center'}}> Fund will be Released Within 6 hours.</Text>
                          <Text style={{fontSize:14, fontWeight:'bold', color:'#666666',margin:3,textAlign:'center'}}>Upon Confirmation By Service Consumer.</Text>
                     </View>






                <View style={styles.btnContainerSer}>


                    <TouchableOpacity style={styles.bckBtnSer} onPress={this.endJob}>
                     <Text style={{color:'#262626', fontSize:15,}}>OK</Text>
                    </TouchableOpacity>



                </View>

         </View>


       </Modal>


       <Modal
          animationType = {"fade"}
          transparent = {true}
          visible = {this.state.isVisibleComment}
          onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

              <View style = {styles.modal}  >

              <View style={styles.regWith}>
              <View><BigStarRating ratingObj={ratingObj}/></View>
              </View>

                        <View style={styles.serviceComment}>
                       <Text style={{fontSize:15,color:'gray',fontWeight:'bold',margin:10 }}>Please leave a review</Text>

                            <Textarea
                              containerStyle={styles.textareaContainer}
                              style={styles.textarea}
                              onChangeText={this.onChange}
                              defaultValue={this.state.text}
                              maxLength={120}
                              placeholder={''}
                              placeholderTextColor={'#c7c7c7'}
                              underlineColorAndroid={'transparent'}
                            />
                        </View>

                 <View style={styles.btnContainerSer}>

                 </View>
                 <View style={{alignItems:'center', position:'absolute', top:370}}>
                 <TouchableOpacity style={styles.reqBtnReq}  onPress = {this.endComment}>

                 <Text style={{fontSize:15,color:'gray'}}>Finish</Text>
                 </TouchableOpacity>

                 </View>
          </View>


        </Modal>

        <Modal
           animationType = {"fade"}
           transparent = {true}
           visible = {this.state.isVisibleRequest}
           onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

               <View style = {styles.modal}  >
               <View style={styles.topReq}>
               <Image source={require('../../images/GG.png')} style={styles.reqBgImg} />
               </View>
               <View style={styles.regWith}>
               <View><Text style={styles.Te}> Completed Job</Text></View>
               </View>
                   <View style={styles.voucherTitle}><Text style={{fontSize:15,color:'gray',fontWeight:'bold' }}>Ebube Harrison</Text></View>
                   <View style={styles.voucherTitleService}><Text style={{fontSize:13, color:'gray', marginTop:20}}>Services</Text></View>
                         <View style={styles.serviceCover}>
                         {
                         reqData && reqData.length > 0 && reqData.map(val => {
                           return (

                            <View style={styles.serviceDiv}>
                             <View style={{ flexDirection:'row', width:170}}><Text style={{fontSize:13, color:'gray',marginLeft:5}}> {val.serviceName}</Text></View>
                              <View style={{ flexDirection:'row', justifyContent:'center'}}><Text style={{fontSize:13, color:'gray',alignSelf: 'flex-start',}}> ₦ {val.price}</Text></View>

                            </View>

                            )
                            })
                            }

                         </View>

                  <View style={styles.btnContainerSer}>

                  </View>
                  <View style={{alignItems:'center', position:'absolute', top:350}}>
                  <TouchableOpacity style={styles.reqBtnReq}  onPress = {() => {
                      this.setState({ isVisibleComment:true})}}>
                  <Text style={{fontSize:15,color:'gray',}}>ACCEPT</Text>
                  </TouchableOpacity>
                  </View>

                  <View style={{alignItems:'center', position:'absolute', top:410}}>
                  <TouchableOpacity style={styles.reqBtnReq}  onPress = {() => {
                      this.setState({ isVisibleRequest:!this.state.isVisibleRequest})}}>
                  <Text style={{fontSize:15,color:'gray',}}>DENY</Text>
                  </TouchableOpacity>

                  </View>

           </View>


         </Modal>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

     <RBSheet
       ref={ref => {
         this.RBSheet = ref;
       }}
       height={250}
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
                  <Image source={require('../../assets/signal.png')} style={styles.seqBgImg} />
                  <View style={styles.selectMessage}><Text style={{fontSize:16,color:'gray',fontWeight:'bold', marginTop:30}}>Are You Sure You Want to Close / End  the Job</Text></View>
                  </View>
                        <View style={styles.category}>
                        <TouchableOpacity  onPress={this.saveData3}>
                             <View style={styles.payOption}>
                               <Text style={{fontSize:15,color:'gray',}}>YES</Text>
                             </View>
                             </TouchableOpacity>
                          <TouchableOpacity onPress = {() => this.RBSheet.close()}>
                               <View style={styles.payOption}>
                       <Text style={{fontSize:15,color:'gray' }}>NO</Text>
                               </View>
                          </TouchableOpacity>

                        </View>


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
                     <Text style={styles.legend}>Card Number</Text>
                        <TextInput
                                style={styles.input1}
                                placeholder='4084 0234 8126 8574'
                                autoCapitalize="none"
                                placeholderTextColor='gray'

                                value={this.state.email}
                              />
                    </View>
               </View>

               <View style={styles.cardNum2}>
                  <View style={styles.fieldSet2}>
                     <Text style={styles.legend}>Card Expire</Text>
                        <TextInput
                                style={styles.input2}
                                placeholder='20/22'
                                autoCapitalize="none"
                                placeholderTextColor='gray'

                                value={this.state.email}
                              />
                    </View>

                    <View style={styles.fieldSet3}>
                       <Text style={styles.legend}>CVV</Text>
                               <TextInput
                                  style={styles.input3}
                                  placeholder='072'
                                  autoCapitalize="none"
                                  placeholderTextColor='gray'

                                  value={this.state.email}
                                />
                      </View>

               </View>
               <View style={styles.btnContainerPay}>

                   <View style={styles.otherServiceBtnSer}>
                   <TouchableOpacity style={styles.reqBtnReq} onPress={this.saveData2}>
                    <Text style={{color:'#fff', fontSize:12,}}>PROCESS PAYMENT</Text>
                   </TouchableOpacity>

                   </View>
                   <TouchableHighlight style={styles.reqBtnCan} onPress = {() => {
                       this.setState({ isVisiblePayment:!this.state.isVisiblePayment})}}>
                   <Text style={{color:'#fff', fontSize:12,}}>CANCEL</Text>
                   </TouchableHighlight>
               </View>
             <View style={styles.btnContainerSer}>

             </View>

      </View>


     </Modal>
   </View>



    );
  }
 }
 export default Completed ;

  const styles = StyleSheet.create({

    container:{
   flexDirection:'column',
     width :width,
     flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ffffff'
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
    alignItems:'center'
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
    marginLeft:5,
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
    content:{
   position:'absolute',
    justifyContent:'center',
   top:hp('0%'),
   width:wp('100%'),
    height:hp('82%'),
   alignItems:'center',
   flexDirection:'column',
   backgroundColor:'transparent'
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
    width:wp('80%'),
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'flex-start',
    marginTop:10,

    },
    secondRowText:{
    color:'#EBB81D',
    fontSize:17,
    marginTop:15,
    },
    thirdRow:{
    flexDirection:'row',
    width:wp('73%'),
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
    marginLeft:30,
    },
    locTextMessage2:{
    fontSize:9,
    fontFamily:'serif',
    color:'gray',
    marginRight:71,
    },
    locTextMessage1:{
    fontSize:10,
    fontFamily:'serif',
    color:'gray',
    marginLeft:10,
    },
    btn:{
    width:50,
    height:30,
    backgroundColor:'#fff',
    borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
    },
    btn1:{
    width:120,
    height:30,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    marginTop:25,
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
    width: '80%',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
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
    },
    smileImg:{
     width:300,
     height:150,
     resizeMode:'contain',
     alignSelf:'center',
     marginTop:120,
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
     width:310,
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
     width:320,
     height:100,
     borderWidth:0,
     borderStyle:'solid',
     borderColor:'#f6f6f6',
     position:'absolute',
     top:390,
     alignItems:'center',
    },
    btnContainerSer:{
     width:320,
     height:50,
     borderWidth:0,
     borderStyle:'solid',
     borderColor:'#f6f6f6',
     position:'absolute',
     top:350,
     alignItems:'center',
     flexDirection:'column',
    },
    reqBtn:{
     width:270,
     height:35,
     backgroundColor:'#34B44B',
     margin:5,
     alignItems:'center',
     justifyContent:'center',
     shadowColor: '#fff',
    shadowOffset: { width: 0, height:hp('1.5%') },
    shadowOpacity: 2,
    shadowRadius: 1,
     elevation: hp('0.8%'),
     borderRadius:3,
    },
    otherServiceBtn:{
     width:320,
     height:40,
     alignItems:'center',
     flexDirection:'row',
     justifyContent:'space-evenly'

    },
    otherServiceBtnSer:{
     width:320,
     height:120,
     alignItems:'center',
     flexDirection:'column',
     justifyContent:'center'

    },
    bckBtn:{
     width:120,
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
    bckBtnSer:{
     width:250,
     height:43,
     backgroundColor:'#fff',
     alignItems:'center',
     justifyContent:'center',
     shadowColor: '#fff',
    shadowOffset: { width: 0, height:hp('1.5%') },
    shadowOpacity: 2,
    shadowRadius: 1,
     elevation: hp('0.8%'),
     alignItems:'center',
     borderRadius:20,



    },

    reqBtnReq:{
     width:250,
     height:45,
     backgroundColor:'#fff',
     alignItems:'center',
     justifyContent:'center',
     shadowColor: '#fff',
    shadowOffset: { width: 0, height:hp('1.5%') },
    shadowOpacity: 2,
    shadowRadius: 1,
     elevation: hp('0.8%'),
     alignItems:'center',
     borderRadius:30,
     margin:20,


    },
    reqBtnCan:{
     width:230,
     height:40,
     backgroundColor:'red',
     justifyContent:'center',
     shadowColor: '#fff',
    shadowOffset: { width: 0, height:hp('1.5%') },
    shadowOpacity: 2,
    shadowRadius: 1,
     elevation: hp('0.8%'),
     alignItems:'center',
     borderRadius:3,

    },
    serviceDiv:{
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
   width:300,
   height:150,
   borderWidth:0.5,
   borderStyle:'solid',
   borderColor:'#f2f2f2',
   flexDirection:'column',
   alignItems:'center',
   position:'absolute',
   top:190,
   },
   serviceComment:{
   width:300,
   height:150,
   borderWidth:0,
   borderStyle:'solid',
   borderColor:'#f2f2f2',
   flexDirection:'column',
   alignItems:'center',
   position:'absolute',
   top:120,
   },
   sheetContainer:{
   flexDirection:'column',
   width:wp('100%'),
   height:250,
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
   top:50,

   },
   seqBgImg:{
   width:70,
   height:70,
   alignItems:'center',
   position:'absolute',
   top:-20,
   },
   category:{
   flexDirection:'row',
   width:wp('100%'),
   height:100,
   marginTop:170,
   justifyContent:'space-around',
   },
   payOption:{
   width:130,
   height:40,
   alignItems:'center',
   backgroundColor:'#fff',
   justifyContent:'center',
   shadowColor: '#fff',
   shadowOffset: { width: 0, height:hp('1.5%') },
   shadowOpacity: 2,
   shadowRadius: 1,
   elevation: hp('0.8%'),
   alignItems:'center',
   borderRadius:20,
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
    },
    input2:{
     width:100,
     alignSelf:'center',
    },
    input3:{
     width:120,
     alignSelf:'center',
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
        },
        backImg:{
        width:24,
        height:20,
        top:15,
        left:80,
        shadowColor: '#fff',
        shadowOffset: { width: 0, height:hp('1.5%') },
        shadowOpacity: 2,
        shadowRadius: 1,
        elevation: hp('0.8%'),
       },
       textareaContainer: {
           height: 180,
           width:230,
           padding: 5,
           // backgroundColor: '#F5FCFF',
           borderWidth:0.6,
           borderStyle:'solid',
           borderColor:'gray',
           borderRadius:3,
         },
         textarea: {
           textAlignVertical: 'top',  // hack android
           height: 170,
           fontSize: 14,
           color: '#333',

         },
  });
