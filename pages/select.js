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
   BackHandler,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

const width = Dimensions.get('window').width;
type Props ={};


class Select extends React.Component <Props> {
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




  render() {
    const {navigate} = this.props.navigation;
    return (
     <View style={styles.container}>
     <View style={{width:wp('100%'), height:hp('20%'),position:'absolute', alignItems:'center',top:hp('30%')}}>
       <Text style={styles.caption}>Account Type</Text>
     </View>
       <View style={styles.Top}>
       <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Buyer')}>
            <View style={styles.one}>
              <Image source={require('../images/pay.png')} style={{height:50, width:50,alignItems:'center',justifyContent:'center',}} />
           </View>
       </TouchableOpacity>

       <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Seller')}>
          <View style={styles.two}>
          <Image source={require('../images/cart.png')} style={{height:50, width:50,alignItems:'center',justifyContent:'center',}} />
          </View>
       </TouchableOpacity>
      </View>
      <View style={styles.Down}>
           <View style={styles.titleOne}>
             <Text style={styles.captionBottom}>Buyer</Text>
          </View>

         <View style={styles.titleTwo}>
          <Text style={styles.captionBottom}>Seller</Text>
         </View>
     </View>
    </View>

    );
  }
}
export default Select;

const styles = StyleSheet.create({

 container:{
flexDirection:'column',
  width :wp('100%'),
height:hp('100%'),
 alignItems:'center',
 justifyContent:'center',
 },

imageSize:{
 marginTop:100,
 width:width,
 height:200,
},

caption:{
 color:'gray',
 margin:10,
 fontSize:25,
},

captionBottom:{
 color:'gray',
 margin:15,
 fontSize:20,
},
Top:{
 position:'absolute',
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
margin:10,

},
one:{
 width:120,
 height:120,
 backgroundColor:'#EBB81D',
 margin:10,
 alignItems:'center',
 borderRadius:100,
 justifyContent:'center'

},
two:{
 width:120,
 height:120,
 backgroundColor:'#EBB81D',
 margin:10,
 alignItems:'center',
 borderRadius:100,
  justifyContent:'center'
},
Down:{
 position:'absolute',
 flexDirection:'row',
 justifyContent:'space-between',
 alignItems:'center',
margin:15,
top:hp('55%')
},

titleOne:{
 width:wp('35%'),
 height:hp('8%'),
 margin:10,
 alignItems:'center',
},
titleTwo:{
 width:wp('35%'),
 height:hp('8%'),
 margin:10,
 alignItems:'center',
},

})
