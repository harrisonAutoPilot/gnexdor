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
import Ionicons from 'react-native-vector-icons/Ionicons';
import ContactList from './contact/contactList';
//import Tabs from 'react-native-tabs';

console.disableYellowBox = true;
import MapInfo from './map'
import Home_Activity from './Home_Activity';
import Home_ActivityB from './Home_ActivityB';
import Request_Activity from './Request_Activity';
import Circle_Activity from './Circle_Activity';
import Farmers_Activity from './Farmers_Activity';

import Request from './jobs/request';
import Pending from './jobs/pending';
import SavedLocation from './user/savedLoc';
import About from './user/about';
//import Details_Activity from './Details_Activity';
import Profile_Activity from './Account/Profile_Activity';
import Profile_Activity_Jobs from './Account/Profile_Activity_Jobs';
import Profile_Activity_Client from './Account/Profile_Activity_Client';
import Profile_Activity_ClientC from './Account/Profile_Activity_ClientC';
import Profile_Activity_Short_Modal from './Account/Profile_Activity_ShortModal';
import Profile_Activity_Short from './Account/Profile_Activity_Short';
import User_Profile from './Account/User_Profile';
import OrderDetails from './OrderDetails';
import OrderDetailsMore from './OrderDetailsMore';
import Request_Activity1 from './Request_Activity1';
import Main_One from './mainOne';
import SelectDriver from './SelectDriver';
import HomeNew from './HomeNew';
import General from './user/general';
import Tracker from './Tracker';
import NewOrder from './orders/NewOrder';
import TopTab from './topTabOrder';
import ClientJob from './clientJobs';
//import TopTabAccount from './topTabAccount';


//const HomeTab = createStackNavigator({ Home:Home_Activity }, );
const CircleTab = createSwitchNavigator(

   {
    MapInfo:MapInfo,
    HomeB: Home_ActivityB,
    Home: Home_Activity,
    Profile_Activity_Client:Profile_Activity_Client,
    Profile_Activity_Short:Profile_Activity_Short,
    Main_One: Main_One,
    OrderDetails: OrderDetails,
    OrderDetailsMore: OrderDetailsMore,
    SelectDriver:SelectDriver,
    HomeNew:HomeNew,
    Tracker: Tracker ,
    Request1: Request_Activity1 ,
    Home_ActivityB: Home_ActivityB,
  

      //TopTab:TopTab,
   },



);




const HomeTab = createSwitchNavigator(
  {

   Profile_Activity: Profile_Activity ,
   Request: Request_Activity ,
   User: User_Profile ,
   Profile_Activity_Jobs: Profile_Activity_Jobs ,
   ContactList: ContactList,



  },


);

const AccountTab = createSwitchNavigator(
  {

    ContactList: ContactList,
  Profile_Activity_ClientC:Profile_Activity_ClientC,
 Profile_Activity_Short:Profile_Activity_Short,

    // Drivers: Driver ,
    // User: User_Profile ,
    // Profile_Activity_Client:Profile_Activity_Client,
  },


);






const MainApp = createBottomTabNavigator(
  {
   Contact: HomeTab,
   Home: CircleTab ,
   Me: AccountTab ,
  },


// const MainApp = createBottomTabNavigator(
//   {
//     Home: HomeTab ,
//     Circle: CircleTab,
//     Profile: AccountTab ,
//
//
//   },


//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         if (routeName === 'Home') {
//           return (
//             <Image
//               source={ require('../assets/hoo.png') }
//               style={{ width: 20, height: 20, }} />
//           );
//         } else if (routeName === 'Profile') {
//           return (
//             <Image
//               source={ require('../assets/user.png') }
//               style={{ width: 20, height: 20 }} />
//           );
//          }
//
//         else {
//           return (
//             <Image
//               source={ require('../assets/tag.png') }
//               style={{ width: 20, height: 20 }} />
//           );
//         }
//       },
//     }),
//
//     tabBarOptions: {
//       activeTintColor: 'rgb(255,165,0)',
//       inactiveTintColor: '#263238',
//       indicatorStyle: {
//          backgroundColor: '#f4f4f4',
//
//
//        },
//
//        style: {
//          backgroundColor: '#fff',
//        },
//     },
//   }
// );

{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let IconComponent = Ionicons;
      let iconName;
      if (routeName === 'Home') {
         iconName = `ios-search`;
         IconComponent = Ionicons;
       } else if (routeName === 'Contact') {
        iconName = `md-person`;
      }
      else if (routeName === 'Me') {
        iconName = `md-people`;
      }
      return <IconComponent name={iconName} size={23} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    showLabel: false ,
    activeTintColor: '#ffffff',
    inactiveTintColor: '#F1CD61',
    style: {
             backgroundColor: '#EBB81D',
           },

  },

}
);
const Test = createAppContainer(MainApp);

export default Test;
