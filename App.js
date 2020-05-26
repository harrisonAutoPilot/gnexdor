/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
   Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import Welcome from './pages/welcome';
import HomeScreen from './pages/HomeScreen';
import Select from './pages/select';
import Login from './pages/Login';
import Splash from './pages/splash';
import LoginB from './pages/LoginB'
import Test from './pages/Test'
import Buyer from './pages/buyer'
import BuyerB from './pages/buyerB'
import Seller from './pages/merchant'
import SelectImage from './pages/selectImage'
import PhotoCamera from './pages/camera'
import ChooseImage from './pages/chooseImage'
import PaymentDetails from './pages/paymentDetails'
import Authenticate from './pages/authenticate'
import Loading from './pages/loading'
import ClientJob from './pages/clientJobs'
import DrawerMenu from './components/navigation/drawerMenu';
import Settings from './pages/settings';

import { createDrawerNavigator } from "react-navigation-drawer";
import {createStackNavigator} from 'react-navigation-stack';
//import HomeScreenn from './pages/HomeScreenn'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

//import {createStackNavigator} from 'react-navigation-stack';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DrawerNavigation = createDrawerNavigator(
  {
   Splash :{screen:Splash},
   Home: {screen: HomeScreen},
   Login: {screen: Login},
   Select: {screen: Select},
   LoginB: {screen: LoginB},
   Test: {screen: Test},
   Buyer :{screen:Buyer},
   BuyerB :{screen:BuyerB},
   Seller:{screen:Seller},
  SelectImage:{screen:SelectImage},
  PhotoCamera: {screen:PhotoCamera},
  ChooseImage:{screen:ChooseImage},
  PaymentDetails:{screen:PaymentDetails},
  Authenticate :{screen:Authenticate},
  Loading :{screen:Loading},
  ClientJob:{screen:ClientJob},
  Settings:{screen:Settings},
   //HomeScreenn: {screen: HomeScreenn},
   //Profile: {screen: ProfileScreen},
  },
  {
    initialRouteName: "Splash",
    contentOptions: {
      activeTintColor: "red"
    },
    contentComponent: DrawerMenu,
    drawerWidth: Dimensions.get('window').width - 200,
  }
);

const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation
  })
);
export default function App() {
  return <Router />;
}
