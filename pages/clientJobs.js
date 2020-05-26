import React, { Component } from 'react';
import { Text, View,StyleSheet,Platform,TouchableOpacity,Image,Dimensions,ScrollView,BackHandler } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import ClientJobTab from './Account/clientJobTab';
import { Marker } from 'react-native-maps';
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



 class ClientJob extends Component{
  constructor(props) {
      super(props)
      this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  static navigationOptions =
  {
     title: 'Order details',
     headerStyle:{
      backgroundColor:'#fff',
     }
  };



     componentDidMount() {
    loc(this);
  }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
        rol();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('MapInfo');
        return true;
    }

  render() {
 const {navigate} = this.props.navigation;
    return (

      <View style={styles. MainContainer}>

                         <View style={styles.titleBar}>
                         <TouchableOpacity  onPress={() => this.props.navigation.navigate('Profile_Activity_Client')}  activeOpacity = { .5 } style={styles.backArrow}>
                            <View>
                               <Image source={require('../assets/Back_100.png')} style={styles.backImg}  />
                            </View>
                         </TouchableOpacity>
                             <Text style={{fontSize:16,color:'#fff', fontWeight:'bold',marginRight:10}}>Client Jobs</Text>
                             <TouchableOpacity  onPress={() => this.props.navigation.navigate('MapInfo')}  activeOpacity = { .5 } style={styles.searchIcon}>
                                <View>
                                   <Image source={require('../assets/icons8-search.png')} style={styles.searchImg}  />
                                </View>
                             </TouchableOpacity>
                         </View>
                            <View style={styles.tabContainer}>
                          <ClientJobTab/>
                         </View>

       </View>
    );
  }
}
export default ClientJob;



const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   backgroundColor: '#f2f2f2',
    flexDirection:'column',
    resizeMode: 'contain',

  },
  titleBar:{
 width:wp('100%'),
 height:60,
 marginTop: 3,
 flexDirection:'row',
 backgroundColor:'#EBB81D',
 alignItems:'center',
 justifyContent:'space-between',
 position:'absolute',
 top:-3,
  },

  backArrow:{
   width:40,
  zIndex:20,

  },
  backImg:{
  width:24,
  height:20,
  left:-20,
  shadowColor: '#fff',
  shadowOffset: { width: 0, height:hp('1.5%') },
  shadowOpacity: 2,
  shadowRadius: 1,
  elevation: hp('0.8%'),
  left:10,
  marginBottom:10,
  justifyContent:'center'
 },
 searchImg:{
 width:24,
 height:20,
 shadowColor: '#fff',
 shadowOffset: { width: 0, height:hp('1.5%') },
 shadowOpacity: 2,
 shadowRadius: 1,
 elevation: hp('0.8%'),
right:20,
 marginBottom:10,
 justifyContent:'center'
},
 tabContainer:{
  width:wp('100%'),
  height:hp('100%'),
  position:'absolute',
  top:60
 }
});
