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
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

console.disableYellowBox = true;



class OrderHeaderLeft extends React.Component <Props> {


  render() {

    return (

     <View style={styles.topContainer}>
<View>
                    <Image style={styles.userImageContainer}
                           source={require('../../../images/driver1.jpg')} style={{width:35, height:35, borderRadius:20,marginLeft:20}} />
</View>
<View style={styles.locationStyle}>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:10}}>location</Text><Image style={styles.userImageContainer}
        source={require('../../../images/loc.png')} style={{width:12, height:12, borderRadius:20,marginLeft:5}} />
</View>

<View>
<View style={{flexDirection:'row'}}>
<Text style={{fontSize:10}}>Business location</Text><Image style={styles.userImageContainer}
        source={require('../../../images/loc.png')} style={{width:12, height:12, borderRadius:20,marginLeft:5}} />
</View>
</View>
</View>
                </View>

    );
  }
}
export default OrderHeaderLeft;

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },

    topContainer: {
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center',


    },

    navigationHeaderContainer: {
        height: Header.HEIGHT,
        width: width,
        color: "blue",
        justifyContent: 'center'
    },


    userImageContainer: {
        marginLeft: 15,
        marginTop: 5,
        height: width * 50 / 375,
        width: width * 50 / 375,
        backgroundColor: 'lightgrey',
        borderRadius: (width * 50 / 375) / 2,
    },


    topSearchContainer: {
        height: width * 40 / 375,
        marginLeft: 15,
        marginTop: 15,
        marginBottom: 10,
        width: width - 30,
        backgroundColor: '#D2D7F3',
        flexDirection: 'row',
        borderRadius: 3,
    },
locationStyle:{
 marginLeft:wp('5%'),
},





});
