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

class LoginB extends React.Component <Props> {
 static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
 constructor(props) {
     super(props)
     this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
     this.state = {
          email: '',
          password: '',
           name: '',
           phone: '',
           visible: false,
       }


}

                componentWillMount() {
                BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                componentWillUnmount() {
                BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
                }

                handleBackButtonClick() {
                this.props.navigation.navigate('Welcome');
                return true;
                }


         saveData = ()=>{
                const {email,password} = this.state;

                //save data with asyncstorage
                let loginDetails={
                    email: email,
                    password: password
                }

                if(email=='admin' && password == 'gnexdor')
                {

                    alert("Successful Login!. Welcome Admin " )
                   this.props.navigation.navigate('MapInfo')}

                else if (email !='admin' && password != 'gnexdor'){
                  alert("Wrong Username or Password. Please Contact Your Admin On  08062585929")
                  this.props.navigation.navigate('')
                 }
                 else if (email =='admin' && password != 'gnexdor'){
                   alert("Wrong Password. Please Contact Your Admin On  08062585929")
                   this.props.navigation.navigate('')
                  }
                  else if (email !='admin' && password == 'gnexdor'){
                    alert("Wrong Username. Please Contact Your Admin On  08062585929")
                    this.props.navigation.navigate('')
                   }



       }





         render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>


     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('2%')}}>
     <Image source={require('../images/loog.png')} style={styles.imageSize} />
     </View>
 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Mobile Number'
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

            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly'}}>
          <TouchableOpacity
              style = {styles.signButton}
            //{/** // onPress={this.saveData}>**/}
          onPress={() => this.props.navigation.navigate('MapInfo')}>
              <Text style = {styles.submitButtonText}> SIGN IN</Text>
           </TouchableOpacity>
           </View>
           <View style={{alignItems:'center',}}>

           <View style={styles.regWith}>
        <View><Text style={styles.line}> ____ </Text></View>
        <View><Text style={styles.Te}>Forgot your Password? click here</Text></View>
        <View><Text style={styles.line}> ____</Text></View>
           </View>

            <View style={styles.altSignIn}>
            <TouchableOpacity
                style = {styles.signFace}
                   onPress={this.saveData}>
               <View style={{flexDirection:'row'}}><Image source={require('../images/facebook.png')}  style={styles.faceImg}/><Text style={styles.faceBookText}>Sign in with Facebook</Text></View>
             </TouchableOpacity>
             <TouchableOpacity
                 style = {styles.signGoogle}
                    onPress={this.saveData}>
                <View style={{flexDirection:'row'}}><Image source={require('../images/google.png')}  style={styles.googleImg}/><Text style={styles.googleText}>Sign in with Google</Text></View>
              </TouchableOpacity>
            </View>




<View>
<TouchableOpacity
style={{marginTop:20}}
     onPress={() => this.props.navigation.navigate('Select')}>
<Text style={{color:'gray',fontWeight:'bold'}}>CREATE ACCOUNT</Text>
</TouchableOpacity>
</View>
            </View>

     </View>
   </View>



    );
  }
}
export default LoginB;

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
  top:hp('20%'),
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
      width: 300,
      height: 35,
      margin: 20,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'gray',
      fontSize: 14,
      borderBottomWidth:1,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
    },
signButton: {
 backgroundColor:'#EBB81D',
width:wp('70%'),
height:hp('8%'),
alignItems:'center',
justifyContent:'center',
borderRadius:50,
shadowColor: '#000',
shadowOffset: { width: 0, height: 3 },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
flexDirection:'row',
alignItems:'center',
justifyContent:'center',

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
altSignIn:{
flexDirection:'column',

},
signFace:{
 backgroundColor:'#1b7dec',
 width:wp('55%'),
 height:hp('5%'),
 alignItems:'center',
 justifyContent:'center',
 borderRadius:50,
marginTop:10
},
faceImg:{
width:15,
height:15,
alignItems:'center',
margin:10,
backgroundColor:'white'
},
faceBookText:{
 color:'#fff',
justifyContent:'center',
marginTop:7,
},
signGoogle:{
 backgroundColor:'#ff3535',
 width:wp('55%'),
 height:hp('5%'),
 alignItems:'center',
 justifyContent:'center',
 borderRadius:50,
marginTop:10
},
googleImg:{
width:15,
height:15,
alignItems:'center',
margin:10,
backgroundColor:'#ff3535'
},
googleText:{
 color:'#fff',
justifyContent:'center',
marginTop:7,
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
})
