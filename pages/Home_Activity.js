import React, { Component } from 'react';
import { Text, View,Platform, TouchableOpacity,Dimensions, Button,TextInput,ScrollView,Image,Alert, StyleSheet,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import { NavigationActions } from 'react-navigation';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import BlinkView from 'react-native-blink-view'
import {singleScreenApplication} from './navigatorStyles'
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
console.disableYellowBox = true;

class Home_Activity extends Component{
 static navigationOptions = {
  headerLeft: <HeaderLeft/>,
  headerRight:<HeaderRight/>,
 };
 constructor(props) {
   super(props);
   this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }

 componentWillMount() {

     BackHandler.addEventListener('hardwareBackPress', this.back_Button_Press);
   }


   componentWillUnmount() {

       BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
     }

   componentWillUnmount() {

       BackHandler.removeEventListener('hardwareBackPress', this.back_Button_Press);
     }
     back_Button_Press = () => {

         // Put your own code here, which you want to exexute on back button press.
         Alert.alert(
           ' Exit From App ',
           ' Do you want to exit From App ?',
           [
             { text: 'Yes', onPress: () => BackHandler.exitApp() },
             { text: 'No', onPress: () => console.log('NO Pressed') }
           ],
           { cancelable: false },
         );

         // Return true to enable back button over ride.
         return true;
       }


 render(){

  return(
       <View style={styles.MainContainer}>
         <View style={styles.top}>

       <View style={{alignItems:'center', justifyContent:'center', flexDirection:'column', flexWrap:'wrap'}}>
        <TextInput
        style={styles.input1}
        placeholder='Enter the required service you want '
        autoCapitalize="none"
        placeholderTextColor='gray'
        onChangeText={(searchVal) =>{
         this.setState({
          search:searchVal,
         });
        }}
        value={this.state.email}
         />

           <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Select')}
           style = {styles.searchButton}>
           <Text>Search</Text>
           </TouchableOpacity>
           </View>
         </View>
         <View style={styles.seeMore}>
                          <View style={styles.regWith}>
                                     <View><Text style={styles.line}> ______ </Text></View>
                                     <View><Text style={styles.Te}>Sort by</Text></View>
                                     <View><Text style={styles.line}> ______ </Text></View>
                          </View>
         </View>


     <View style={styles.bottom}>
     <View style={styles.middle}>
        <Image source={require('../images/left.png')} style={{height:16, width:16,marginLeft:5  }} />
           <ScrollView horizontal={true}
           style={styles.scrollContainer}
            ref={(scrollView) => { _scrollView = scrollView; }}
           showsHorizontalScrollIndicator={false}>

           <View>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Select')}
             style = {styles.searchButtonTop}>
             <Text style={{color:'#fff', fontSize:12}}>Location</Text>
             </TouchableOpacity>
            </View>

            <View>
             <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Select')}
              style = {styles.searchButtonTop}>
             <Text style={{color:'#fff', fontSize:12}}>Most Searched</Text>
              </TouchableOpacity>
             </View>
             <View>
              <TouchableOpacity
               onPress={() => this.props.navigation.navigate('Select')}
               style = {styles.searchButtonTop}>
             <Text style={{color:'#fff', fontSize:12}}>Mobile Business</Text>
               </TouchableOpacity>
              </View>
              <View>
               <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Select')}
                style = {styles.searchButtonTop}>
              <Text style={{color:'#fff', fontSize:12}}>Static Business</Text>
                </TouchableOpacity>
               </View>
           </ScrollView>
           <Image source={require('../images/right.png')} style={{height:15, width:15,marginRight:5 }} />
     </View>
     <View style={styles.middleDown}>
        <Image source={require('../images/left.png')} style={{height:16, width:16,marginLeft:5  }} />
           <ScrollView horizontal={true}
           style={styles.scrollContainerDown}
            ref={(scrollView) => { _scrollView = scrollView; }}
           showsHorizontalScrollIndicator={false}>
           <View style={styles.cardsDown}>
           <TouchableOpacity
               onPress={() => this.props.navigation.navigate('OrderDetails')}>

              <View style={styles.square}>
              <Image source={require('../images/gra1.png')} style={{height:30, width:30, }} />
             <Text style={{fontSize:15, padding:1,color:'gray'}}>Artist</Text>
              </View>
               </TouchableOpacity>

              <View style={styles.square}>
              <Image source={require('../images/tap.png')} style={{height:30, width:30, }} />
             <Text style={{fontSize:15, padding:1,color:'gray',}}>Plumbing</Text>
              </View>

               <View style={styles.square}>
               <Image source={require('../images/curl.png')} style={{height:30, width:30, }} />
              <Text style={{fontSize:15, padding:1,color:'gray'}}>Hair Dresser</Text>
               </View>


               <View style={styles.square}>
               <Image source={require('../images/barber.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Barber</Text>
               </View>

               <View style={styles.square}>
               <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
              <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
               </View>
                <View style={styles.square}>
                <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                </View>
                <View style={styles.square}>
                <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                </View>
                <View style={styles.square}>
                <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                <View style={styles.square}>
                <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                </View>
                <View style={styles.square}>
                <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
               <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                </View>
                 <View style={styles.square}>
                 <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                 </View>
                 <View style={styles.square}>
                 <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                 </View>
                 <View style={styles.square}>
                 <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                 <View style={styles.square}>
                 <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                 </View>
                 <View style={styles.square}>
                 <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                 </View>
                  <View style={styles.square}>
                  <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                  </View>
                  <View style={styles.square}>
                  <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                  </View>
                  <View style={styles.square}>
                  <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                  <View style={styles.square}>
                  <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                  </View>

                  <View style={styles.square}>
                  <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                 <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                  </View>
                   <View style={styles.square}>
                   <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                   </View>
                   <View style={styles.square}>
                   <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                   </View>
                   <View style={styles.square}>
                   <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                   <View style={styles.square}>
                   <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                   </View>
                   <View style={styles.square}>
                   <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                  <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                   </View>
                    <View style={styles.square}>
                    <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                    </View>
                    <View style={styles.square}>
                    <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                    </View>
                    <View style={styles.square}>
                    <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                    <View style={styles.square}>
                    <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                    </View>
                    <View style={styles.square}>
                    <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                   <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                    </View>
                     <View style={styles.square}>
                     <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                     </View>
                     <View style={styles.square}>
                     <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                     </View>
                     <View style={styles.square}>
                     <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                     <View style={styles.square}>
                     <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                     </View>
                     <View style={styles.square}>
                     <Image source={require('../images/sewing-machine.png')} style={{height:30, width:30, }} />
                    <Text style={{fontSize:15, padding:1,color:'gray'}}>Tailor</Text>
                     </View>
                      <View style={styles.square}>
                      <Image source={require('../images/mechanic.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Mechanic</Text>
                      </View>
                      <View style={styles.square}>
                      <Image source={require('../images/nurse.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Nurse</Text>
                      </View>
                      <View style={styles.square}>
                      <Image source={require('../images/classroom.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Teacher</Text></View>
                      <View style={styles.square}>
                      <Image source={require('../images/carpenter.png')} style={{height:30, width:30, }} />
                     <Text style={{fontSize:15, padding:1,color:'gray'}}>Carpenter</Text>
                      </View>

</View>
           </ScrollView>
           <Image source={require('../images/right.png')} style={{height:15, width:15,marginRight:5 }} />
     </View>



     <View>

   </View>
     </View>
<View style={styles.searchB}>


<Image source={require('../images/search.png')} style={{height:27, width:27,transform: [{ rotate: '360deg' }]}} />


</View>


   </View>

  )
 }
}
export default Home_Activity ;




const styles = StyleSheet.create({

  MainContainer: {
width:wp('100%'),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flexDirection:'column',
  },
  middle:{
   width:wp('99%'),
   height:hp('8;%'),
   alignItems:'center',
   flexDirection:'row',
  },
  middleDown:{
   width:wp('100%'),
   height:hp('52%'),
   alignItems:'center',
   flexDirection:'row',
   justifyContent:'center',

  },
  bottom: {
 flex: 1,
 width:wp('100%'),
 elevation: hp('1.5%'),
},
searchButton:{
 height:hp('5%'),
 backgroundColor:'#fff',
 width:wp('20%'),
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:3,
},
searchB:{
 width:wp('12%'),
 height:hp('7%'),
 left:wp('40%'),
 zIndex:20,
  backgroundColor:'#fff',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('2%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:100,
 margin:10,
},
searchButtonTop:{
 height:hp('6%'),
 backgroundColor:'rgb(255,165,0)',
 width:wp('25%'),
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 flexDirection:'row',
 alignItems:'center',
 justifyContent:'center',
 borderRadius:3,
 margin:5,
 marginRight:8,
},
  square:{
   width:wp('25.5%'),
   height:hp('13%'),
   borderWidth: 0.5,
  borderRadius: 6,
  borderStyle:'solid',
  borderColor:'#f2f2f2',
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
   justifyContent:'center',
   margin:5,
    zIndex:4,
  },
  seeMore:{
    width:wp('100%'),
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
  },
  regWith:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'center',
  },

  Te:{
   color:'gray',
  },
  line:{
   color:'gray',
   alignItems:'center',
   justifyContent:'center',
   marginBottom:13,
   fontSize:15,
  },
  welcomeMessage:{
  marginLeft:20,
  marginTop:7
  },
  welcomeMessageText:{
  fontSize:14,
  padding:3,
  },
  scrollContainer:{
   width:wp('95%'),
   flexDirection: 'row',
   marginRight:10,
   marginLeft:10,
  },
  input1: {
     width: wp('65%'),
     height: hp('6%'),
     margin: 5,
     padding: 8,
     color: 'black',
     borderStyle:'solid',
     borderColor:'#999494',
     fontSize: 14,
     borderWidth:0.5,
     borderRadius:7,
     marginLeft:wp('5%'),
     marginRight:wp('5%'),
   },
navigation:{
 flexDirection:'row',
 width:width,
 height:'9%',
 justifyContent:'space-between',
 backgroundColor:'#f2f2f2',
 shadowColor: '#000',
    shadowOffset: { width: 0, height:hp('0.5%') },
    shadowOpacity: 2,
    shadowRadius: 2,
     elevation: hp('0.5%'),

},
  top: {
   height:hp('8%'),
   backgroundColor:'#fff',
   width:wp('100%'),
   shadowColor: '#000',
   shadowOffset: { width: 0, height: 3 },
   shadowOpacity: 2,
   shadowRadius: 2,
   elevation: hp('0.5%'),
   flexDirection:'row',
  },


cardsDown:{
 width: wp('230%'),
 resizeMode: 'contain',
 height:hp('45%'),
 flexWrap:'wrap',
 borderRadius: 1.5,
 borderBottomWidth: 0,
 borderColor:'#f2f2f2',
 flexDirection:'row',
 alignItems:'center',
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
  scrollContainerDown:{
  flex: 1,
  width:wp('99%'),
  flexDirection: 'row',
  marginLeft:1,

},
cardsDown1:{
 height:"26%",
  width: wp('92%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'row',
 justifyContent:'space-between',
 borderBottomColor:'gray',
 borderStyle:'solid',
 borderBottomWidth:1,
},
cardsDown2:{
 height:hp('12%'),
 width: wp('92%'),
 resizeMode:'contain',
 backgroundColor:'#fff',
 flexDirection:'column',
 justifyContent:'space-between',

},
dot:{
 width:wp('3.5%'),
 height:hp('1.9%'),
 backgroundColor:'black',
 borderRadius:30,
 justifyContent:'center',
 margin:10,
},

});
