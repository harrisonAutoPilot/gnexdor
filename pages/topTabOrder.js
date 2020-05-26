//This is an example of React Native Tab
import React from 'react';

//For React Navigation 4+
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation-stack';
import NewOrder from './orders/NewOrder';
import OngoingOrder from './orders/OngoingOrder';
import CompletedOrder from './orders/CompletedOrder';

import Request from './jobs/request';
import Pending from './jobs/pending';
import About from './user/about';
import OrderHeaderLeft from './header/orderHeader/orderHeaderLeft';
import OrderHeaderRight from './header/orderHeader/orderHeaderRight';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
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
   List: {
    screen: NewOrder,
   color:'red',
   backgroundColor:'blue',

    },
    Map: { screen: OngoingOrder,
      backgroundColor:'#fff',
     },
  },
  {
    tabBarPosition: 'top',
    upperCaseLabel: false,
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
     upperCaseLabel: false,
      activeTintColor: '#FFFFFF',
      activeTintBorderRadius:20,
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: 'transparent',

        // borderBottomWidth: 2,
        // borderRadius:20,
        // borderBottomColor:'#ff0000',
        //

      },
      labelStyle: {
      textAlign: 'center',
      color:'#000000',
      fontWeight:'bold',
      upperCaseLabel: false

      },
      indicatorStyle: {
      borderBottomColor:'transparent',
      borderBottomWidth: 1,
      borderRadius:20,

      },

    },
  }
);
//
const TopTab = createAppContainer(TabScreen);

export default TopTab;
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
