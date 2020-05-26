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



class Buyer extends React.Component <Props> {
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
          username:'',
           name: '',
           phone: '',
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
                this.props.navigation.navigate('LoginB');
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


     <View style={{ width:wp('100%'),height:hp('10%'), alignItems:'center',  position:'absolute',top:hp('8%') }}>
     <View >
      <Text style={styles.buyerTitle}>Buyer Account</Text>

    </View>
   </View>


 <View style={styles.content}>
           <View style={styles.username}>

            <TextInput
                    style={styles.input1}
                    placeholder='Username'
                    autoCapitalize="none"
                    placeholderTextColor='#b3b3b3'
                    onChangeText={(usernameVal) =>{
                     this.setState({
                      username:usernameVal,
                     });
                    }}
                    value={this.state.username}
                  />
                  <TextInput
                          style={styles.input1}
                          placeholder='Full Name'
                          autoCapitalize="none"
                          placeholderTextColor='#b3b3b3'
                          onChangeText={(nameVal) =>{
                           this.setState({
                            name:nameVal,
                           });
                          }}
                          value={this.state.name}
                        />

                  <TextInput
                  style={styles.input1}
                  placeholder='Password'
                  autoCapitalize="none"
                  secureTextEntry={true}
                  placeholderTextColor='#b3b3b3'
                  onChangeText={(passwordVal) =>{
                   this.setState({
                    password:passwordVal,
                   });
                  }}

                  value={this.state.password}
                  />
                  <Select
                      data={items}
                      style={styles.select}
                      placeholder="Select an Interest ..."
                      onSelect={this.onSelectedItemsChange.bind(this)}
                      search={true}
                      width={320}

                    />


                    <View style={styles.btnContainer}>
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



           </View>



            <View style={{width:wp('100%'), flexDirection:'row', alignSelf:'center',justifyContent:'space-evenly', marginTop:10 }}>
          <TouchableOpacity
              style = {styles.signButton}
               // onPress={this.saveData}>
               onPress={() => this.props.navigation.navigate('BuyerB')}
                >
              <Text style = {styles.submitButtonText}>NEXT</Text>
           </TouchableOpacity>
           </View>


                 </View>
               </View>



    );
  }
}
export default Buyer;

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
  color:'#EBB81D',
  margin:10,
  fontSize:25,
  fontFamily:'Roboto'
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
  top:hp('12%'),
 },
  input: {
     width: 350,
     height: 55,
     margin: 10,
     padding: 8,
     color: 'black',
     borderRadius: 20,
     borderColor:'#b3b3b3',
     borderStyle:'solid',
      borderWidth: 1,
     fontSize: 18,
     fontWeight: '500',
 justifyContent:'center',
 marginLeft:wp('12%'),
 marginRight:wp('12%'),
  fontFamily:'Roboto'
   },
   input1: {
      width: 320,
      height: 35,
      marginTop:30,
      padding: 8,
      color: 'black',
      borderStyle:'solid',
      borderBottomColor:'#b3b3b3',
      fontSize: 14,
      borderBottomWidth:0.8,
       justifyContent:'center',
       marginLeft:wp('15%'),
       marginRight:wp('15%'),
       fontFamily:'Roboto'
    },
select:{
 width: 320,
 height: 35,
 marginTop:30,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'#b3b3b3',
 fontSize: 14,
 borderBottomWidth:0.8,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
  borderTopWidth:0,
  borderRightWidth:0,
  borderLeftWidth:0,
   fontFamily:'Roboto'
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
  fontFamily:'Roboto'
 },
 captionBB:{
 justifyContent:'center',
 alignItems:'center',
 margin:5,
 },
 captionB:{
  color:'black',
  fontSize:15,
 fontFamily:'Roboto'
 },
 username:{
  margin:10,

 },
 userTest:{
  marginLeft:30,
  fontSize: 15,
   fontFamily:'Roboto',
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
    fontFamily:'Roboto'
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
    color:'#b3b3b3',
    fontSize:10,
     fontFamily:'Roboto'
   },
   line:{
    color:'#663300',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:13,
    fontSize:15,
     fontFamily:'Roboto'
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
 color:'#EBB81D',
 fontFamily:'Roboto'
},
btnContainer:{
 width: 320,
 height: 50,
 padding: 8,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'#b3b3b3',
 fontSize: 14,
  justifyContent:'center',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
flexDirection:'row',
marginTop:20,
},
interestButton:{
 width:60,
 height:25,
 backgroundColor:'#b3b3b3',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2

},
btnText:{
color:'#fff',
fontSize:10,
textAlign:'center',
fontFamily:'Roboto'
},
option:{
 width: 320,
 height: 90,
 color: 'black',
 borderStyle:'solid',
 borderBottomColor:'#b3b3b3',
  marginLeft:wp('15%'),
  marginRight:wp('15%'),
 flexDirection:'column'

},
optionButtonY:{
 width:60,
 height:25,
 backgroundColor:'#b3b3b3',
borderRadius:5,
alignItems:'center',
justifyContent:'center',
margin:2
},
optionButtonN:{
 width:60,
 height:25,
 backgroundColor:'#009900',
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
 borderBottomColor:'#b3b3b3',
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
 width:290,
 height:25,
 fontSize:12,
 alignItems:'center',
 marginTop:5,
 color:'#EBB81D',
  fontFamily:'Roboto'
//textDecorationLine: 'underline',

}

})
