import React, { Component } from 'react';
import SendSMS from 'react-native-sms';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler,Button } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
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

class NewOrder extends Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }

 smsSendFunction() {

   SendSMS.send({
       body: 'Please follow us on https://reactnativecode.com',
       recipients: ['08062585929'],
       successTypes: ['sent', 'queued']
   }, (completed, cancelled, error) => {
       if(completed){
         Alert.alert('SMS Sent Successfully.')
       }else if(cancelled){
         console.log('SMS Sent Cancelled.');
       }else if(error){
         console.log('Some error occured.');
       }
   });
 }
 render(){

  return(
   <View style={styles. MainContainer}>

           <View style={styles.list}>
           <ScrollView vertical={true}
           style={styles.scrollContainerDown}
            ref={(scrollView) => { _scrollView = scrollView; }}
           showsVerticalScrollIndicator={false}>
            <TouchableOpacity
               onPress={() => this.props.navigation.navigate('User')}>

                <View style={styles.cardsList}>

                            <View style={styles.listAvatar}>
                            <Image source={require('../../images/cloth2.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
                            </View>
                    <View style={styles.listContent}>
                                 <View style={styles.driverName}>
                                           <Text style={styles.driverNameCaption}>DaregoBespoke Fashion Line</Text>
                                 </View>

                                 <View style={styles.DetailContent}>

                                                 <View>

                                                 <View style={{flexDirection:'row', marginLeft:14,}}>

                                                 <Image style={styles.userImageContainer}
                                                         source={require('../../images/loc.png')} style={{width:12, height:12,marginLeft:5}} />

                                                         <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>107Kms Away</Text>
                                                         <TouchableOpacity
                                                        onPress = {() => {alert("Your request for Location has been send to DaregoBespoke!")}}
                                                             style = {styles.requestButton}>

                                                             <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                          </TouchableOpacity></View>

                                                 </View>
                                                 <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                        <TouchableOpacity
                                                              onPress={this.smsSendFunction}
                                                              activeOpacity={0.6}
                                                              style={styles.button} >
                                                              <Image style={styles.userImageContainer}
                                                                      source={require('../../images/chat.png')} style={{width:18, height:18,marginLeft:5}} />

                                                           </TouchableOpacity>


                                                         <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                                 source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

                                                 </View>
                                                 </View>
                                 <View></View>
                                 </View>
                    </View>

                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('User')}>

                <View style={styles.cardsList}>

                <View style={styles.listAvatar}>
                <Image source={require('../../images/cloth1.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
                </View>
                            <View style={styles.listContent}>
                                         <View style={styles.driverName}>
                                                   <Text style={styles.driverNameCaption}>LushiBespoke Fashion Line</Text>
                                         </View>
                                         <View style={styles.DetailContent}>

                                                         <View>

                                                         <View style={{flexDirection:'row', marginLeft:14,}}>

                                                         <Image style={styles.userImageContainer}
                                                                 source={require('../../images/loc.png')} style={{width:12, height:12, marginLeft:5}} />

                                                                 <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>200Kms Away</Text>
                                                                 <TouchableOpacity
                                                               onPress = {() => {alert("Your request for Location has been send to LushiBespoke!")}}
                                                                     style = {styles.requestButton}>

                                                                     <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                                  </TouchableOpacity></View>
                                                                  </View>
                                                         <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                         <Image style={styles.userImageContainer}
                                                                 source={require('../../images/chat.png')} style={{width:18, height:18, marginLeft:5}} />

                                                                 <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                                         source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

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
                <Image source={require('../../images/cloth.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
                </View>
                            <View style={styles.listContent}>
                                         <View style={styles.driverName}>
                                                   <Text style={styles.driverNameCaption}>DaregoBespoke Fashion Line</Text>
                                         </View>

                                         <View style={styles.DetailContent}>

                                                         <View>

                                                         <View style={{flexDirection:'row', marginLeft:14,}}>

                                                         <Image style={styles.userImageContainer}
                                                                 source={require('../../images/loc.png')} style={{width:12, height:12, borderRadius:20,marginLeft:5}} />

                                                                 <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>107Kms Away</Text>
                                                                 <TouchableOpacity
                                                                onPress = {() => {alert("Your request for Location has been send to DaregoBespoke!")}}
                                                                     style = {styles.requestButton}>

                                                                     <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                                  </TouchableOpacity></View>
                                                                  </View>
                                                         <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                                         <Image style={styles.userImageContainer}
                                                                 source={require('../../images/chat.png')} style={{width:18, height:18, marginLeft:5}} />

                                                                 <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                                         source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

                                                         </View>

                                                         </View>
                                         <View></View>
                                         </View>
                            </View>


                </View>
            </TouchableOpacity>







           </ScrollView>

           </View>

<View style={styles.titleSponsore}><Text style={{fontWeight:'bold', color:'#00b300'}}>SPONSORED</Text></View>
<View style={styles.listSponsore}>
<ScrollView vertical={true}
style={styles.scrollContainerDown}
 ref={(scrollView) => { _scrollView = scrollView; }}
showsVerticalScrollIndicator={false}>
 <TouchableOpacity
     onPress={() => this.props.navigation.navigate('SelectDriver')}>

     <View style={styles.cardsList}>

                 <View style={styles.listAvatar}>
                 <Image source={require('../../images/jidena.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
                 </View>
         <View style={styles.listContent}>
                      <View style={styles.driverName}>
                                <Text style={styles.driverNameCaption}>Jidenna Fashion & Style</Text>
                      </View>

                      <View style={styles.DetailContent}>

                                      <View>

                                      <View style={{flexDirection:'row', marginLeft:14,}}>

                                      <Image style={styles.userImageContainer}
                                              source={require('../../images/loc.png')} style={{width:12, height:12,marginLeft:5}} />

                                              <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>107Kms Away</Text>
                                              <TouchableOpacity
                                             onPress = {() => {alert("Your request for Location has been send to DaregoBespoke!")}}
                                                  style = {styles.requestButton}>

                                                  <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                               </TouchableOpacity></View>

                                      </View>
                                      <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                      <Image style={styles.userImageContainer}
                                              source={require('../../images/chat.png')} style={{width:18, height:18,marginLeft:5}} />

                                              <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                      source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

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
     <Image source={require('../../images/kimono.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
     </View>
                 <View style={styles.listContent}>
                              <View style={styles.driverName}>
                                        <Text style={styles.driverNameCaption}>Kimono Kollection Line</Text>
                              </View>

                              <View style={styles.DetailContent}>

                                              <View>

                                              <View style={{flexDirection:'row', marginLeft:14,}}>

                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/loc.png')} style={{width:12, height:12, marginLeft:5}} />

                                                      <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>200Kms Away</Text>
                                                      <TouchableOpacity
                                                    onPress = {() => {alert("Your request for Location has been send to LushiBespoke!")}}
                                                          style = {styles.requestButton}>

                                                          <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                       </TouchableOpacity></View>
                                                       </View>
                                              <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/chat.png')} style={{width:18, height:18, marginLeft:5}} />

                                                      <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                              source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

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
     <Image source={require('../../images/cloth.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
     </View>
                 <View style={styles.listContent}>
                              <View style={styles.driverName}>
                                        <Text style={styles.driverNameCaption}>DaregoBespoke Fashion Line</Text>
                              </View>

                              <View style={styles.DetailContent}>

                                              <View>

                                              <View style={{flexDirection:'row', marginLeft:14,}}>

                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/loc.png')} style={{width:12, height:12, borderRadius:20,marginLeft:5}} />

                                                      <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>107Kms Away</Text>
                                                      <TouchableOpacity
                                                     onPress = {() => {alert("Your request for Location has been send to DaregoBespoke!")}}
                                                          style = {styles.requestButton}>

                                                          <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                       </TouchableOpacity></View>
                                                       </View>
                                              <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/chat.png')} style={{width:18, height:18, marginLeft:5}} />

                                                      <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                              source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

                                              </View>

                                              </View>
                              <View></View>
                              </View>
                 </View>


     </View>
 </TouchableOpacity>







</ScrollView>

</View>

<View style={styles.titleSuggestion}><Text style={{fontWeight:'bold', color:'gray'}}>SUGGESTIONS</Text></View>
<View style={styles.listSuggestion}>
<ScrollView vertical={true}
style={styles.scrollContainerDown}
 ref={(scrollView) => { _scrollView = scrollView; }}
showsVerticalScrollIndicator={false}>
 <TouchableOpacity
     onPress={() => this.props.navigation.navigate('SelectDriver')}>

     <View style={styles.cardsList}>

                 <View style={styles.listAvatar}>
                 <Image source={require('../../images/kaftan.png')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
                 </View>
         <View style={styles.listContent}>
                      <View style={styles.driverName}>
                                <Text style={styles.driverNameCaption}>Kaftan Factory</Text>
                      </View>

                      <View style={styles.DetailContent}>

                                      <View>

                                      <View style={{flexDirection:'row', marginLeft:14,}}>

                                      <Image style={styles.userImageContainer}
                                              source={require('../../images/loc.png')} style={{width:12, height:12,marginLeft:5}} />

                                              <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>107Kms Away</Text>
                                              <TouchableOpacity
                                             onPress = {() => {alert("Your request for Location has been send to DaregoBespoke!")}}
                                                  style = {styles.requestButton}>

                                                  <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                               </TouchableOpacity></View>

                                      </View>
                                      <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                      <Image style={styles.userImageContainer}
                                              source={require('../../images/chat.png')} style={{width:18, height:18,marginLeft:5}} />

                                              <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                      source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

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
     <Image source={require('../../images/kaftan1.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
     </View>
                 <View style={styles.listContent}>
                              <View style={styles.driverName}>
                                        <Text style={styles.driverNameCaption}>Ray Bello Collection</Text>
                              </View>

                              <View style={styles.DetailContent}>

                                              <View>

                                              <View style={{flexDirection:'row', marginLeft:14,}}>

                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/loc.png')} style={{width:12, height:12, marginLeft:5}} />

                                                      <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>200Kms Away</Text>
                                                      <TouchableOpacity
                                                    onPress = {() => {alert("Your request for Location has been send to LushiBespoke!")}}
                                                          style = {styles.requestButton}>

                                                          <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                       </TouchableOpacity></View>
                                                       </View>
                                              <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/chat.png')} style={{width:18, height:18, marginLeft:5}} />

                                                      <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                              source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

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
     <Image source={require('../../images/cloth.jpeg')} style={{width:wp('17%'),height:hp('10%'),borderRadius:50,}}  />
     </View>
                 <View style={styles.listContent}>
                              <View style={styles.driverName}>
                                        <Text style={styles.driverNameCaption}>DaregoBespoke Fashion Line</Text>
                              </View>

                              <View style={styles.DetailContent}>

                                              <View>

                                              <View style={{flexDirection:'row', marginLeft:14,}}>

                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/loc.png')} style={{width:12, height:12, borderRadius:20,marginLeft:5}} />

                                                      <View style={{width:wp('70%'),flexDirection:'row'}}><Text style={{fontSize:9,color:'gray',marginLeft:15,fontWeight:'bold'}}>107Kms Away</Text>
                                                      <TouchableOpacity
                                                     onPress = {() => {alert("Your request for Location has been send to DaregoBespoke!")}}
                                                          style = {styles.requestButton}>

                                                          <View style={styles.request}><Text style = {{fontSize:7, color:'#fff'}}>Request Location</Text></View>

                                                       </TouchableOpacity></View>
                                                       </View>
                                              <View style={{flexDirection:'row', marginLeft:10, borderStyle: 'solid', padding:5}}>
                                              <Image style={styles.userImageContainer}
                                                      source={require('../../images/chat.png')} style={{width:18, height:18, marginLeft:5}} />

                                                      <View style={{width:wp('40%'),left:wp('10%')}}><Image style={styles.userImageContainer}
                                                              source={require('../../images/phone.png')} style={{width:18, height:18, marginLeft:5}} /></View>

                                              </View>

                                              </View>
                              <View></View>
                              </View>
                 </View>


     </View>
 </TouchableOpacity>







</ScrollView>

</View>

    </View>
 );
}
}
export default NewOrder;



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
requestButton:{
 paddingLeft:90,
},
request:{
 backgroundColor:'gray',
 width:wp('16%'),
 height:hp('2.5%'),
 borderRadius:10,
 alignItems:'center',
 justifyContent:'center',
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),

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
width:wp('99%'),
height:hp('30%'),
top:hp('0%'),
},
listSponsore:{
position:'absolute',
flexDirection:'column',
width:wp('98.5%'),
height:hp('30%'),
top:hp('33.5%'),
},
listSuggestion:{
position:'absolute',
flexDirection:'column',
width:wp('98.5%'),
height:hp('30%'),
top:hp('66.5%'),
},
titleSponsore:{
  position:'absolute',
 top:hp('31 %'),
 left:wp('8%')

},
titleSuggestion:{
  position:'absolute',
 top:hp('64 %'),
 left:wp('8%')

},
cardsList:{
width: wp('98.5%'),
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
