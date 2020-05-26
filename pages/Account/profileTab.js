//This is an example of React Native Tab
import React from 'react';
import General from '../user/general';
import SavedLocation from '../user/savedLoc';
import About from '../user/about';
//import CompletedOrder from '../orders/CompletedOrder';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation-stack';

// import OrderHeaderLeft from './header/orderHeader/orderHeaderLeft';
// import OrderHeaderRight from './header/orderHeader/orderHeaderRight';
// import HeaderLeft from './headerLeft';
// import HeaderRight from './headerRight';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
 listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';
//Making TabNavigator which will be called in App StackNavigator
//we can directly export the TabNavigator also but header will not be visible
//as header comes only when we put anything into StackNavigator and then export

const TabScreen = createMaterialTopTabNavigator(
  {
   GENERAL: {
    screen: General,

    },
    ABOUT: { screen:About ,

          },
     SAVED: { screen:SavedLocation ,

           },
  },
  {
    tabBarPosition: 'top',
    upperCaseLabel: false,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeColor:'#fff',
     upperCaseLabel: false,
      activeTintColor: 'gray',
      activeTintBorderRadius:20,
      inactiveTintColor: '#fff',
      color:'gray',
      style: {
        backgroundColor: '#EBB81D',
          color: 'red',
      },

      labelStyle: {
       justifyContent:'center',
       alignItems:'center',

      fontWeight:'bold',
      upperCaseLabel: false,
       fontSize:10,
      },
      indicatorStyle: {
        height: null,
        top: 0,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#f4f4f4',
        borderStyle:'solid',
        borderWidth:0,

        },
    },
  }
);
//
const ProfileTab = createAppContainer(TabScreen);

export default ProfileTab;
//

// making a StackNavigator to export as default
// const TopTab = createStackNavigator({
//   TabScreen: {
//     screen: TabScreen,
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#fff',
//
//
//       },
//       //headerLeft: < OrderHeaderLeft/>,
//       //headerRight:< OrderHeaderRight/>,
//        headerShown:'false',
//     },
//   },
// });
//export default createAppContainer(TopTab);
