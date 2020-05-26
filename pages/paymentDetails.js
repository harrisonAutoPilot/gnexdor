import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  Dimensions,
  Image,
   BackHandler,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ProgressBar from '@kcodev/react-native-progress-bar';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import CheckBox from 'react-native-check-box';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {interest} from '../util/buyer/interestButtonData';
import Hr from 'react-native-hr-component';
import Select from 'react-native-select-plus';
const width = Dimensions.get('window').width;



class PaymentDetails extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
        isVisibleTerm: false,
          cardHolderName: '',
          cardNumber: '',
           cardCvvNumber: '',
           cardExpireNumber: '',
           visible: false,
           value: null,
        items: [
      { key: 1, section: true, label: "Interest" },
      { key: 2, label: "Sport" },
      { key: 3, label: "Music" },
      { key: 4, label: "Tech" },
      { key: 5, label: "Magic" },
      { key: 6, label: "Fashion" },
      { key: 7, label: "Building" },
      { key: 8, label: "Art" },
      { key: 9, label: "Academics" },

    ],
  };

  this.onSelectedItemsChange = (key, value) => {
    this.setState({ value: value });
  };


}




                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('SelectImage');
                return true;
                }


         saveData = ()=>{
                const {email,password} = this.state;

                //save data with asyncstorage
                let loginDetails={
                    email: email,
                    password: password
                }

                if(email=='harrison' && password == 'admin')
                {

                    alert("Successful Login!. Welcome Harrison " )
                   this.props.navigation.navigate('Home')}

                else if (email !='harrison' && password != 'admin'){
                  alert("Wrong Username or Password. Please Contact Your Admin On  08062585929")
                  this.props.navigation.navigate('')}
       }


         render() {
    const {navigate} = this.props.navigation;
    const { value, items } = this.state;
    return (
     <View style={styles.container}>





                                  <View style={styles.content}>



                         <View style={styles.formContainer}>




                                                <View >
                                                 <Text style={styles.buyerTitle}>Merchant Payout Account</Text>
                                               </View>
                                               <TextInput
                                                       style={styles.input1}
                                                       placeholder='Account Name'
                                                       autoCapitalize="none"
                                                       placeholderTextColor='gray'
                                                       onChangeText={(cardNumberVal) =>{
                                                        this.setState({
                                                         cardNumber:cardNumberVal,
                                                        });
                                                       }}
                                                       value={this.state.cardNumber}
                                                     />
                                                     <TextInput
                                                             style={styles.input1}
                                                             placeholder='Account Number'
                                                             autoCapitalize="none"
                                                             placeholderTextColor='gray'
                                                             onChangeText={(cardNumberVal) =>{
                                                              this.setState({
                                                               cardNumber:cardNumberVal,
                                                              });
                                                             }}
                                                             value={this.state.cardNumber}
                                                           />
                                                           <TextInput
                                                                   style={styles.input1}
                                                                   placeholder='BVN'
                                                                   autoCapitalize="none"
                                                                   placeholderTextColor='gray'
                                                                   onChangeText={(cardNumberVal) =>{
                                                                    this.setState({
                                                                     cardNumber:cardNumberVal,
                                                                    });
                                                                   }}
                                                                   value={this.state.cardNumber}
                                                                 />
                                           <Select
                                               data={items}
                                               style={styles.select}
                                               placeholder="Select Bank"
                                               onSelect={this.onSelectedItemsChange.bind(this)}
                                               search={true}
                                               width={320}


                                             />
                                             <View style={styles.termsContainer}>
                                             <CheckBox
                                                  style={styles.optionRadio}
                                                  onClick={()=>{
                                                    this.setState({
                                                        isChecked:!this.state.isChecked
                                                    })
                                                  }}
                                                  isChecked={this.state.isChecked}
                                                   // rightText={"I"}
                                              />
                                               <TouchableOpacity activeOpacity = { .5 } onPress={() => this.setState({ isVisibleTerm: true})}>
                                                <Text style={styles.optionText}>  I agree to the Policy, Terms and Condition</Text>
                                                 </TouchableOpacity>
                                             </View>


                                              <TouchableOpacity  onPress={() => this.props.navigation.navigate('Authenticate')} style={styles.btnSection}  >
                                             <View style={{flexDirection:'row', justifyContent:'flex-end',width:350, marginTop:10}}>
                                              <Text style={styles.nextText}>Save & Continue</Text>
                                              <Image source={require('../assets/arr.png')} style={{height:13, width:13,alignItems:'center', marginTop:8,marginLeft:10}} />
                                             </View>
                                              </TouchableOpacity>
                                             <View style={{ flexDirection: "row", width:330,height:5, position:'absolute', top:490 }}>
                                                     <View style={{ width:330, }}>
                                                      <Text>75% Complete</Text>
                                                       <ProgressBar
                                                         value={75}
                                                         maxValue={100}
                                                         backgroundColorOnComplete="#123123"
                                                         backgroundColor="#009900"
                                                       />

                                                     </View>
                                                   </View>
                                    </View>
                         </View>


            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly' }}>

           </View>

           <Modal
              animationType = {"fade"}
              transparent = {true}
              visible = {this.state.isVisibleTerm}
              onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

                  <View style = {styles.modal}  >
                  <View style={styles.top}>
                  <Image source={require('../images/GG.png')} style={styles.termLogoSize} />
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
export default PaymentDetails;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 paymentLogos:{
  width:wp('100%'),
  height:70,
  flexDirection:'row',
  paddingLeft:10,
  paddingRight:10,
  marginTop:13,
  opacity:0.5
 },
 payLogo:{
  width:140,
  height:40,
opacity:0.5
 },
 payLogoAmazon:{
  width:140,
  height:60,
  opacity:0.5

 },
 payLogoVisa:{
  width:100,
  height:50,
  resizeMode:'contain',
  opacity:0.5
 },
 username:{
position:'absolute',
alignItems:'center',
top:13,
 },
 formContainer:{
  position:'absolute',
  alignItems:'center',
  top:40,
  marginTop:20,
 },
 caption:{
  color:'#EBB81D',
  margin:10,
  fontSize:25,
 },
 imageSize:{
 width: 150,
 height:150,
 alignSelf: 'center',
 resizeMode: 'contain',
 borderRadius:200,
  },
  content:{
  position:'absolute',
  justifyContent:'center',
  top:hp('3%'),
  alignItems:'center',
 },

 //  input: {
 //     width: 350,
 //     height: 55,
 //     margin: 10,
 //     padding: 8,
 //     color: 'black',
 //     borderRadius: 20,
 //     borderColor:'gray',
 //     borderStyle:'solid',
 //      borderWidth: 1,
 //     fontSize: 18,
 //     fontWeight: '500',
 // justifyContent:'center',
 // marginLeft:wp('12%'),
 // marginRight:wp('12%'),
   // },
   input1: {
      width: 320,
      height: 35,
      marginTop:30,
      padding: 3,
      paddingLeft:20,
      color: '#EBB81D',
      borderStyle:'solid',
      borderBottomColor:'#EBB81D',
      fontSize: 15,
      borderBottomWidth:0.8,
      justifyContent:'center',
    },
    inputCardExpire: {
       width: 180,
       height: 35,
       marginTop:5,
       padding: 1,
       color: '#EBB81D',
       borderStyle:'solid',
       borderBottomColor:'#EBB81D',
       fontSize: 20,
       borderBottomWidth:0.8,
        justifyContent:'center',
     },
     inputCardCvv: {
        width: 100,
        height: 35,
        marginTop:5,
        padding: 1,
        color: '#EBB81D',
        borderStyle:'solid',
        borderBottomColor:'#EBB81D',
        fontSize: 20,
        borderBottomWidth:0.8,
         justifyContent:'center',
         alignItems:'center',
         marginRight:35,
      },
select:{
 width: 320,
 height: 35,
 marginTop:30,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'#EBB81D',
 fontSize: 14,
 borderBottomWidth:0.8,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
  borderTopWidth:0,
  borderRightWidth:0,
  borderLeftWidth:0,
},
signButton: {
// backgroundColor:'#1b7dec',
 backgroundColor:'#EBB81D',
width:wp('70%'),
height:hp('8%'),
alignItems:'center',
justifyContent:'center',
borderRadius:5,

       },

 welcomeMessage:{
  color:'#00b300',
  margin:10,
  fontSize:20,
 },
 captionBB:{
 justifyContent:'center',
 alignItems:'center',
 margin:5,
 },
 captionB:{
  color:'black',
  fontSize:15,

 },

 userTest:{
  marginLeft:30,
  fontSize: 15,
  fontWeight: '500',
  color:'black',
  height:15,
 },
    profileImage:{
     width:100,
     height:100,
     backgroundColor:'#00b300',
     borderRadius:10,
    },
    imageLogin:{
     width:200,
     height:200,
     alignItems:'center',
    },
submitButton: {
 backgroundColor:'#EBB81D',
 padding: 10,
 margin: 15,
 height: 50,
 alignItems:'center',
 justifyContent:'center',
   },


   submitButtonText:{
   color: 'white',
   fontSize:15,
   },
   profileImage:{
    width:100,
    height:100,
    backgroundColor:'#00b300',
    borderRadius:10,
   },
   imageLogin:{
    width:200,
    height:200,
    alignItems:'center',
   },
   regWith:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
   },
   Te:{
    color:'gray',
    fontSize:10,
   },
   line:{
    color:'#663300',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:13,
    fontSize:15,
   },
   regSelect:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    margin:10,

   },

button1:{
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
},
buyerTitle:{
 fontSize:20,
 color:'#EBB81D',
},
nextText:{
 fontSize:17,
 color:'#EBB81D',
 alignItems:'center',
 margin:2,
},
btnContainer:{
 width: 320,
 height: 50,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
 fontSize: 14,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
flexDirection:'row'
},
interestButton:{
 width:60,
 height:25,
 backgroundColor:'gray',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2

},
btnText:{
color:'#fff',
fontSize:10,
textAlign:'center'
},
option:{
 width: 320,
 height: 90,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
 flexDirection:'column'

},
optionButtonY:{
 width:60,
 height:25,
 backgroundColor:'gray',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2
},
optionButtonN:{
 width:60,
 height:25,
 backgroundColor:'#34B44B',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2
},
termsContainer:{
 width: 320,
 height: 40,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
 flexDirection:'row'
},
optionRadio:{
 width:30,
 height:25,
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2,
color:'#EBB81D',
},
optionText:{
 width:280,
 height:25,
 fontSize:12,
 alignItems:'center',
 marginTop:5,
 color:'#EBB81D',
//textDecorationLine: 'underline',
},
inputContainer:{
alignItems:'center',
height:80,
paddingTop:10,
},
inputContainerN:{
alignItems:'center',
height:70,
paddingTop:5,
},
termsContainer:{
 width: 320,
 height: 40,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'#b3b3b3',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
 flexDirection:'row',
 marginTop:20,
},
optionRadio:{
 width:30,
 height:25,
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2
},
optionText:{
 width:280,
 height:25,
 fontSize:12,
 alignItems:'center',
 marginTop:5,
 color:'#EBB81D',
//textDecorationLine: 'underline',

},
backArrow:{
 width:width,
 flexDirection:'row',
justifyContent:'space-between',
position:'absolute',
top:10,
zIndex:20,
height:60,
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
 top:{
  width: '100%',
  height:100,
  position:'absolute',
  top:1,
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'center',
 },
 btnContainer:{
  width:270,
  height:100,
  borderWidth:0,
  borderStyle:'solid',
  borderColor:'#f6f6f6',
  position:'absolute',
  top:435,
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
 otherServiceBtn:{
  width:320,
  height:40,
  alignItems:'center',
  flexDirection:'row',
  justifyContent:'space-evenly'

 },
 otherServiceBtnSer:{
  width:320,
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
  borderRadius:10,


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
  borderRadius:10,


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
  borderRadius:10,

 },
 serviceDiv:{
  width:280,
  height:30,
  backgroundColor:'#fff',
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between',
 },
 termContent:{
  height:320,
  width:300,
  borderStyle:'solid',
  borderWidth:1,
  borderColor:'#f4f4f4',
  borderRadius:3

 },
 termLogoSize:{
 width: 50,
 height:50,
 alignSelf: 'center',
 resizeMode: 'contain',
 marginTop:-30

  },

})
