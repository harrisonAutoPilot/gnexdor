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



class Authenticate extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
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


     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('10%') }}>
     <View >
      <Text style={styles.buyerTitle}>Authenticate Account</Text>
    </View>
   </View>


                                  <View style={styles.content}>
                                          <View style={styles.username}>
                             <View style={styles.authenticateContainer}>
                                <Text style={styles.authenticateMessage}>To Protect our users and validate your account. We request that you authenticate your account.Please choose one of the verfication means below</Text>
                             </View>
                             <View style={styles.imgContainer}>
                             <TouchableOpacity   onPress={() => this.props.navigation.navigate('BiometricPopup')}  >
                                    <Image source={require('../assets/thumb.png')} style={{height:80, width:80,alignItems:'center',}} />
                               </TouchableOpacity>
                               <TouchableOpacity   onPress={() => this.props.navigation.navigate('FingerprintPopup')}  >
                                    <Image source={require('../assets/face.png')} style={{height:80, width:80,alignItems:'center', }} />
                                </TouchableOpacity>
                             </View>








                                           <TouchableOpacity   onPress={() => this.props.navigation.navigate('Loading')} style={styles.saveContainer} >
                                             <View style={{flexDirection:'row', justifyContent:'flex-end',width:350, marginTop:10,}}>
                                              <Text style={styles.nextText}>Save & Continue</Text>
                                              <Image source={require('../assets/arr.png')} style={{height:13, width:13,alignItems:'center', marginTop:8,marginLeft:10}} />
                                             </View>
                                             </TouchableOpacity>
                                             <View style={{ flexDirection: "row", width:330,height:5, position:'absolute', top:490 }}>
                                                     <View style={{ width:330, }}>
                                                      <Text>91% Complete</Text>
                                                       <ProgressBar
                                                         value={91}
                                                         maxValue={100}
                                                         backgroundColorOnComplete="#123123"
                                                         backgroundColor="#009900"
                                                       />

                                                     </View>
                                                   </View>

                         </View>


            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly' }}>

           </View>


                 </View>
               </View>



    );
  }
}
export default Authenticate;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 backgroundColor:'#ffffff'
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

  content:{
  position:'absolute',
  justifyContent:'center',
  top:hp('3%'),
  alignItems:'center',
 },

 authenticateContainer:{
width:350,
alignItems:'center',
position:'absolute',
top:95
 },
 authenticateMessage:{
fontSize:18,
textAlign:'center',
color:'gray',
 },
 imgContainer:{
  position:'absolute',
  flexDirection:'row',
  width:350,
  height:130,
  top:220,
  alignItems:'center',
  justifyContent:'space-around'
 },



saveContainer:{
 position:'absolute',
 top:420,
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
buyerTitle:{
 fontSize:30,
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
})
