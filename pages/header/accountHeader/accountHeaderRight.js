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
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').width;

console.disableYellowBox = true;



class AccountHeaderRight extends React.Component <Props> {


  render() {

    return (

     <View style={styles.topContainer}>

                    <Image style={styles.userImageContainer}
                           source={require('../../../images/headphone.png')} style={{width:20, height:20, borderRadius:20,marginRight:20}} />


                </View>

    );
  }
}
export default AccountHeaderRight;

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
        marginRight: 20,
        marginTop: 5,
        height: width * 50 / 375,
        width: width * 50 / 375,
        backgroundColor: 'grey',
        //backgroundColor: 'lightgrey',
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
