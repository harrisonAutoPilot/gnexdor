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



class HeaderRight extends React.Component <Props> {


  render() {

    return (

     <View style={styles.topContainer}>
<View style={styles.dotContainer}>

                   <View style={styles.threeDot}></View>
                   <View style={styles.threeDot}></View>
                   <View style={styles.threeDot}></View>

</View>
                </View>

    );
  }
}
export default HeaderRight;

const styles = StyleSheet.create({

    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection:'column',
    },

    threeDot:{
     width:wp('0.8%'),
     height:hp('0.5%'),
     backgroundColor:'gray',
     margin:1,
    },
dotContainer:{
 flexDirection:'column',
 margin:30,
 justifyContent:'space-between'
},

    navigationHeaderContainer: {
        height: Header.HEIGHT,
        width: width,
        color: "blue",
        justifyContent: 'center'
    },


    userImageContainer: {
        marginRight: 20,
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






});
