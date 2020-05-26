import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
} from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';




const width = Dimensions.get('window').width;


type Props ={};


class HomeScreen extends React.Component <Props> {
  static navigationOptions = {

  };
  componentDidMount (){
   setTimeout(()=>{
  this.props.navigation.navigate('Login')
 }, 5000)
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>

     <View style={{ width:wp('100%'),height:hp('30%'), alignItems:'center',  position:'absolute',top:hp('1%')}}>
    <Image source={require('../images/loog.png')} style={styles.imageSize} />
   </View>
   <View style={styles.captionContainer}>
   <Text style={styles.caption}>Connect to Find Businesses Next Door </Text>
   </View>
     </View>

    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :width,
 alignItems:'center',
 justifyContent:'center',
 },
 imageSize:{
 width: wp('80%'),
 height: hp('50%'),
 alignSelf: 'center',
 resizeMode: 'contain',
  },
captionContainer:{
position:'absolute',
width:wp('100%'),
height:hp('20%'),
alignItems:'center',
justifyContent:'center',
top:hp('32%'),



},
caption:{
 color:'	rgb(255,165,0)',
 fontWeight:'bold',
 fontSize:13,
}

})
