import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import {Navigation} from 'react-navigation';
import HeaderLeft from './headerLeft';
import HeaderRight from './headerRight';
import TrackerNavBar from './TrackerNavBar';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import { FlatHeader, Group } from 'react-native-flat-header';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Driver from './Account/drivers';
//import Tabs from 'react-native-tabs';

console.disableYellowBox = true;

import Home_Activity from './Home_Activity';
import Request_Activity from './Request_Activity';
import Farmers_Activity from './Farmers_Activity';
import Details_Activity from './Details_Activity';
import Profile_Activity from './Account/Profile_Activity';
//import Account_Activity from './Account_Activity';
import OrderDetails from './OrderDetails';
import OrderDetailsMore from './OrderDetailsMore';
import Request_Activity1 from './Request_Activity1';
import SelectDriver from './SelectDriver';
import HomeNew from './HomeNew';
import Tracker from './Tracker';
import NewOrder from './orders/NewOrder';
import TopTab from './topTabOrder';
//import TopTabAccount from './topTabAccount';


//const HomeTab = createStackNavigator({ Home:Home_Activity }, );
const HomeTab = createStackNavigator(

   {
     Home: Home_Activity,
     OrderDetails: OrderDetails,
     OrderDetailsMore: OrderDetailsMore,
     SelectDriver:SelectDriver,
     HomeNew:HomeNew,
     Tracker: Tracker ,
     Request1: Request_Activity1 ,
      //TopTab:TopTab,


   },



);




const RequestTab = createSwitchNavigator(
  {

    Request: Request_Activity ,
    Details: Details_Activity ,
    Profile: Profile_Activity ,
    Request1: Request_Activity1 ,
  },


);

const AccountTab = createStackNavigator(
  {

    Profile: Profile_Activity ,
     Drivers: Driver ,

  },


);



const MainApp = createBottomTabNavigator(
  {
    Home: HomeTab ,
    Request: RequestTab ,
    Account: AccountTab ,

  },


  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === 'Home') {
          return (
            <Image
              source={ require('../assets/hoo.png') }
              style={{ width: 20, height: 20, }} />
          );
        } else if (routeName === 'Account') {
          return (
            <Image
              source={ require('../assets/user.png') }
              style={{ width: 20, height: 20 }} />
          );
         }

        else {
          return (
            <Image
              source={ require('../assets/tag.png') }
              style={{ width: 20, height: 20 }} />
          );
        }
      },
    }),

    tabBarOptions: {
      activeTintColor: '# ',
      inactiveTintColor: '#263238',
      indicatorStyle: {
         backgroundColor: '#ffffff',


       },

       style: {
         backgroundColor: 'black',
       },
    },
  }
);

const Mid = createAppContainer(MainApp);

export default Mid;
