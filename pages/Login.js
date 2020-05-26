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
  TouchableOpacity,
} from 'react-native';

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


class Login extends React.Component {

 state = {
      email: '',
      password: ''
   }
  static navigationOptions = {
 headerShown:'false',
  };




  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View style={{position:'absolute', width:wp('100%'), height:hp('10%'), alignItems:'center', justifyContent:'center', top:hp('3%')}}>

    <Text style={styles.caption}>Welcome back</Text>
     </View>
     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('5%')}}>
    <Image source={require('../images/loog.png')} style={styles.imageSize} />
   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Username'
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
          </View>

          <TouchableOpacity
              style = {styles.signButton}
               onPress={() => this.props.navigation.navigate('Home_ActivityB')}>
              <Text style = {styles.submitButtonText}  > SIGN IN </Text>
           </TouchableOpacity>

           <View>
           <View style={styles.regWith}>
        <View><Text style={styles.line}> __________ </Text></View>
        <View><Text style={styles.Te}>Or Register With</Text></View>
        <View><Text style={styles.line}> __________ </Text></View>
           </View>

           <View style={styles.regSelect}>

           <TouchableOpacity
              style = {styles.googleButton}
               onPress = {() => {alert("Please wait as Harrison is still working on the Google signin module!")}}>
               <View style={styles.button1}>
               <View><Image source={require('../images/goog.png')} style={styles.imagegoogB}/></View>
               <View><Text style = {styles.submitButtonText}>Google</Text></View>
               </View>
            </TouchableOpacity>
            <TouchableOpacity
                style = {styles.faceBookButton}
                onPress = {() => {alert("Please wait as Harrison is still working on the facebook signin module!")}}>

                <View style={styles.button1}>
                <View><Image source={require('../images/face.png')} style={styles.imagefaceB}/></View>
                <View><Text style = {styles.submitButtonText}>facebook</Text></View>
                </View>

             </TouchableOpacity>

           </View>
            </View>

     </View>
   </View>



    );
  }
}
export default Login;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
  flex:1,
 alignItems:'center',
 justifyContent:'center',
 },
 caption:{
  color:'	rgb(255,165,0)',
  margin:10,
  fontSize:25,
 },
 imageSize:{
 width: wp('80%'),
 height: hp('30%'),
 alignSelf: 'center',
 resizeMode: 'contain',

  },
 content:{
position:'absolute',
top:hp('25%'),
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

   },
   input1: {
      width: 300,
      height: 35,
      margin: 20,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
      borderBottomWidth:1,
    },

signButton: {
backgroundColor:'rgb(255,165,0)',
width:wp('80%'),
height:hp('8%'),
alignItems:'center',
justifyContent:'center',
borderRadius:5,
marginLeft:wp('10%'),
marginRight:wp('10%'),

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

 },
 userTest:{
  marginLeft:30,
  fontSize: 15,
  fontWeight: '500',
  color:'black',
  height:15,
 },

    submitButtonText:{
    color: 'white'
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
   color: 'white'
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
   },
   line:{
    color:'	rgb(255,165,0)',
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
googleButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(255, 70, 6)',
 borderStyle:'solid',
 margin:4,
justifyContent:'center',
backgroundColor:'rgb(255, 70, 6)',
borderRadius:2,
},
faceBookButton:{
 width:130,
 height:50,
 borderWidth:1,
 borderColor:'rgb(30, 149, 255)',
 borderStyle:'solid',
 margin:4,
 justifyContent:'center',
 backgroundColor:'rgb(30, 149, 255)',
 borderRadius:2,

},
button1:{
 flexDirection:'row',
 justifyContent:'center',
 alignItems:'center',
},
imagefaceB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:10,
},

imagegoogB:{
 width:30,
 height:30,
 alignItems:'flex-end',
 marginLeft:-10,
 marginRight:13,
}
})
