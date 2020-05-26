import React from 'react';
import { Text, View,Platform, TouchableOpacity,TouchableHighlight,Input, Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler,
  Modal } from 'react-native';
import ProgressBar from '@kcodev/react-native-progress-bar';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
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
import {data} from '../util/home/serviceData';
import Hr from 'react-native-hr-component';
import Select from 'react-native-select-plus';
const width = Dimensions.get('window').width;



class Seller extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
          buzEmail: '',
          password: '',
           buzName: '',
           buzCategory: '',
           buzInterest: '',
           duration:'',
           phone: '',
           price:'',
           description:'',
           unit:'',
           visible: false,
           value: null,
           isVisible: false,
           items: [
         { key: 1, section: true, label: "Service Type" },
         { key: 2, label: "Web  Development" },
         { key: 3, label: "Music" },
         { key: 4, label: "Tech" },
         { key: 5, label: "Magic" },
         { key: 6, label: "Fashion" },
         { key: 7, label: "Building" },
         { key: 8, label: "Art" },
         { key: 9, label: "Academics" },

       ],
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
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
                this.props.navigation.navigate('LoginB');
                return true;
                }


         saveData = ()=>{
                const {email,password} = this.state;

                //save data with asyncstorage
                let loginDetails={
                    email: busName,
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


     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('2%') }}>
     <View >
      <Text style={styles.buyerTitle}>Merchant Account</Text>

    </View>
   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Business Name'
                    autoCapitalize="none"
                    placeholderTextColor='gray'
                    onChangeText={(emailVal) =>{
                     this.setState({
                      email:emailVal,
                     });
                    }}
                    value={this.state.email}
                  />
                  <TextInput
                          style={styles.input1}
                          placeholder='Business Email'
                          autoCapitalize="none"
                          placeholderTextColor='gray'
                          onChangeText={(emailVal) =>{
                           this.setState({
                            email:emailVal,
                           });
                          }}
                          value={this.state.email}
                        />

                  <TextInput
                  style={styles.input1}
                  placeholder='Password'
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholderTextColor='gray'
                  onChangeText={(passwordVal) =>{
                   this.setState({
                    password:passwordVal,
                   });
                  }}

                  value={this.state.password}
                  />
                  <TextInput
                           style={styles.input1}
                           placeholder='Business Category E.g Engineering'
                           autoCapitalize="none"
                           placeholderTextColor='gray'
                           onChangeText={(emailVal) =>{
                            this.setState({
                             email:emailVal,
                            });
                           }}
                           value={this.state.email}
                         />


                         <View style={styles.services}>

                             <View style={styles.serviceIn}>
                         <View style={{flexDirection: 'row', justifyContent: 'flex-start', width:290, marginLeft:10}}><Text style={{color:'gray', margin:5,alignSelf: 'flex-end', fontSize:10,}}>Select Desired Services</Text></View>
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
                               <Image source={require('../assets/trash.png')} style={styles.walkImg} />
                           </View>

                           )
                           })
                           }


                           </ScrollView>
                           <TouchableOpacity style={styles.addService} onPress = {() => {
                               this.setState({ isVisible:!this.state.isVisible})}}>
                               <Image source={require('../assets/addSer1.png')} style={styles.walkImg} />
                           <Text style={{color:'#003', fontSize:10,marginLeft:8, justifyContent:'center', marginTop:5}}>Add Business Description</Text>
                           </TouchableOpacity>
                         </View>

                         </View>
                    <View style={styles.btnContainerInterest}>
                    <ScrollView horizontal={true}
                     ref={(scrollView) => { scrollView = scrollView; }}
                    showsHorizontalScrollIndicator={false}>
                    {
                     interest && interest.length > 0 && interest.map(val => {
                      return (
                    <TouchableOpacity
                    key={val.id}
                    style={styles.interestButton}
                         >
                    <Text style={styles.btnText}>{val.title}</Text>
                    </TouchableOpacity>
                   )
                   })
                   }
                   </ScrollView>
                    </View>
                    <TextInput
                            style={styles.inputPhone}
                            placeholder='Business Phone e.g (+234) 806 258 5929'
                            autoCapitalize="none"
                            placeholderTextColor='gray'
                            onChangeText={(emailVal) =>{
                             this.setState({
                              email:emailVal,
                             });
                            }}
                            value={this.state.email}
                          />




                          <View style={{ flexDirection: "row", width:330,height:5, position:'absolute', top:490 }}>
                                  <View style={{ width:330, }}>
                                   <Text>30% Complete</Text>
                                    <ProgressBar
                                      value={30}
                                      maxValue={100}
                                      backgroundColorOnComplete="#123123"
                                      backgroundColor="#009900"
                                    />

                                  </View>
                                </View>


           </View>



            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly', position:'absolute',top:550 }}>


            <Modal
               animationType = {"fade"}
               transparent = {true}
               visible = {this.state.isVisible}
               onRequestClose = {() =>{ console.log("Modal has been closed.") } }>

                   <View style = {styles.modal}  >
                   <View style={styles.topService}>
                  <Text style={{color:'#34B44B', fontSize:20}}>Add Service Description</Text>
                   </View>

                        <View style={styles.username}>

                           <Select
                               data={items}
                               style={styles.select}
                               placeholder="Service Type"
                               onSelect={this.onSelectedItemsChange.bind(this)}
                               search={true}
                               width={250}

                             />

                             <TextInput
                             style={styles.input22}
                              placeholder='Price'
                              autoCapitalize="none"
                              placeholderTextColor='gray'
                              onChangeText={(priceVal) =>{
                              this.setState({
                               price:priceVal,
                               });
                                }}
                                  value={this.state.email}
                                />

                                <TextInput
                                 style={styles.input22}
                                 placeholder='Description'
                                  autoCapitalize="none"
                                  placeholderTextColor='gray'
                                   onChangeText={(descriptionVal) =>{
                                   this.setState({
                                   description:descriptionVal,
                                   });
                                   }}
                                  value={this.state.description}
                                      />

                                   <TextInput
                                     style={styles.input22}
                                     placeholder='Unit'
                                     autoCapitalize="none"
                                     placeholderTextColor='gray'
                                     onChangeText={(unitVal) =>{
                                     this.setState({
                                     unit:unitVal,
                                       });
                                        }}
                                    value={this.state.unit}
                                      />

                                      <TextInput
                                        style={styles.input22}
                                        placeholder='Duration'
                                        autoCapitalize="none"
                                        placeholderTextColor='gray'
                                        onChangeText={(durationVal) =>{
                                        this.setState({
                                        duration:durationVal,
                                          });
                                           }}
                                       value={this.state.duration}
                                         />
                          </View>





                        <View style={styles.btnContainerService}>

                            <View style={styles.otherServiceBtnSer}>
                            <TouchableOpacity style={styles.addServiceBtn} >
                             <Text style={{color:'#fff', fontSize:12,}}>ADD</Text>
                            </TouchableOpacity>
                            </View>

                        </View>
                         <Text style={{color:'#669999', fontSize:12, marginTop:22}} onPress = {() => {
                             this.setState({ isVisible:!this.state.isVisible})}}>CLOSE</Text>
                      <View style={styles.btnContainerSer}>

                      </View>

               </View>


             </Modal>


          <TouchableOpacity
              style = {styles.signButton}
               // onPress={this.saveData}>
                onPress={() => this.props.navigation.navigate('SelectImage')}>

              <Text style = {styles.submitButtonText}>NEXT</Text>
           </TouchableOpacity>
           </View>


                 </View>
               </View>



    );
  }
}
export default Seller;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
 },
 caption:{
  color:'	rgb(255,165,0)',
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
  top:hp('5%'),
 },
  input: {
     width: 350,
     height: 55,
     margin: 10,
     padding: 8,
     color: 'black',
     borderRadius: 20,
     borderColor:'gray',
     borderStyle:'solid',
      borderWidth: 1,
     fontSize: 18,
     fontWeight: '500',
 justifyContent:'center',
 marginLeft:wp('12%'),
 marginRight:wp('12%'),
   },
   input1: {
      width: 320,
      height: 35,
      marginTop:20,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
      borderBottomWidth:0.8,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
    },
    input22: {
       width: 250,
       height: 35,
       marginTop:20,
       padding: 8,
       color: 'black',
       borderStyle:'solid',
       borderBottomColor:'gray',
       fontSize: 14,
       borderBottomWidth:0.8,
        justifyContent:'center',
        marginLeft:wp('15%'),
        marginRight:wp('15%'),
     },
    inputPhone: {
       width: 320,
       height: 35,
       marginTop:20,
       padding: 8,
       color: 'black',
       borderStyle:'solid',
       borderBottomColor:'gray',
       fontSize: 14,
       borderBottomWidth:0.8,
        justifyContent:'center',
        marginLeft:wp('15%'),
        marginRight:wp('15%'),
        position:'absolute',
        top:420,
     },
select:{
 width: 320,
 height: 35,
 marginTop:20,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
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
 backgroundColor:'#EBB81D',
width:wp('80%'),
height:hp('8%'),
alignItems:'center',
justifyContent:'center',
borderRadius:2,

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
 username:{
  margin:10,
alignItems:'center'
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
 backgroundColor:'rgb(255,165,0)',
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
 fontSize:25,
 color:'rgb(255,165,0)',
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
btnContainerInterest:{
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

btnContainerService:{
 width: 270,
 height: 50,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'gray',
 fontSize: 14,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
flexDirection:'row',
marginTop:30,
},
interestButton:{
 width:60,
 height:25,
 backgroundColor:'#85adad',
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
margin:2
},
optionText:{
 width:280,
 height:25,
 fontSize:12,
 alignItems:'center',
 marginTop:5,
 color:'rgb(255,165,0)',
//textDecorationLine: 'underline',

},
services:{
 width:320,
 height:155,
 borderWidth:1,
 borderStyle:'solid',
 borderColor:'gray',
 position:'absolute',
 top:270,
 flexDirection:'column',
 alignItems:'center',

},
serviceIn:{
 width:310,
 height:148,
 alignItems:'center'
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
 top:440,
 alignItems:'center',
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
 height:40,
 alignItems:'center',
 flexDirection:'row',
 justifyContent:'space-evenly'

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
addServiceBtn:{
 width:250,
 height:45,
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
 fontSize:25,
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
height:230,
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
  height: 478 ,
  width: '80%',
  borderRadius:2,
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
   topService:{
    width: 280,
    height:70,
    position:'absolute',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    top:10,
   },
   select:{
    width: 250,
    height: 35,
    marginTop:20,
    padding: 8,
    color: 'black',
    borderStyle:'solid',
    borderBottomColor:'gray',
    fontSize: 14,
    borderBottomWidth:0.8,
     justifyContent:'center',
     marginLeft:wp('15%'),
     marginRight:wp('15%'),
     borderTopWidth:0,
     borderRightWidth:0,
     borderLeftWidth:0,
   },

})
