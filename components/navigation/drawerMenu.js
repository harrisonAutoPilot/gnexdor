import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View,Image,TouchableOpacity, BackHandler, Button} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Accordion from 'react-native-collapsible/Accordion';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

class DrawerMenu extends Component {
 constructor(){
     super();

     this.state = {
      content: true
    }
   }

   ToggleFunction = () => {

  this.setState(state => ({

    isVisible: !state.isVisible

  }));

};

componentHideAndShow = () => {
    this.setState(previousState => ({ content: !previousState.content }))
  }

  navigateToScreen = (route) => () => {

    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }


  render () {
    return (
      <View style={styles.container}>
      <View style={styles.closeContainer}>

      <Image source={require('../../assets/loog.png')} style={styles.logoImage}/>

      <TouchableOpacity
           onPress={() => this.props.navigation.toggleDrawer()}>
      <Image source={require('../../assets/closee.png')} style={styles.closeImage}/>
      </TouchableOpacity>
      </View>
        <ScrollView style={styles.scroll}>
          <View>

            <View style={styles.navSectionStyle}>

            <Image source={require('../../assets/User_100.png')} style={styles.iconSize}/>
            <TouchableOpacity
                 onPress={() => this.props.navigation('Profile_Activity')}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Profile_Activity')}>
               View Profile
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/briefcase_100.png')} style={styles.iconSize}/>
            <TouchableOpacity
                 onPress={() => this.props.navigation('Profile_Activity_Jobs')}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Profile_Activity_Jobs')}>
              Jobs
              </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View visible={this.state.isVisible} >

            <View style={styles.navSectionStyle}  >
            <Image source={require('../../assets/wallet_100.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MassIntention')}>
              Wallet
              </Text>

            </View>
          </View>

          <View>

            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/Settings_100.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Settings')}>
               Settings
              </Text>
            </View>
          </View>
          <View>
            <View style={styles.navSectionStyle}>
            <Image source={require('../../assets/logout_100.png')} style={styles.iconSize}/>
              <Text style={styles.navItemStyle}  onPress ={()=>{ console.log('clicked');
                   return BackHandler.exitApp();
                     }
                      }>
              Log Out
              </Text>
            </View>
          </View>

        </ScrollView>

      </View>
    );
  }
}

DrawerMenu.propTypes = {
  navigation: PropTypes.object
};

export default DrawerMenu;
