import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
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
const height = Dimensions.get('window').height;
import Icon from "react-native-vector-icons/FontAwesome";

const menuData = [
  { icon: "columns", name: "Daily Reading", screenName: "Home", key: 1 },
  { icon: "rss", name: "Testimonies", screenName: "Testimony", key: 2 },
    { icon: "columns", name: "Mass Intentions ", screenName: "MassIntention", key: 3 },
   { icon: "users", name: "Saint of the Day", screenName: "Saint", key: 4 },
   { icon: "users", name: "Prayers", screenName: "Prayers", key: 5 },
   { icon: "users", name: "Profile", screenName: "Profile", key: 5 },

];

class DrawerMenu extends Component {
  render() {
     const {navigate} = this.props.navigation;
    return (
      <View style={styles.container2}>
        <Image source={require('../../assets/3cross.jpg')} style={styles.imageSize}/>
        <View style={styles.closeContainer}>
        <TouchableOpacity
            style = {styles.touchStyle}
             onPress={() => this.props.navigation.toggleDrawer()} >
        <Image source={require('../../assets/close.png')} style={styles.drawerClose}/>
        </TouchableOpacity>
        </View>

        <View style={styles.caption}><Text style={styles.captionText}>ABIDE IN MY WORD</Text></View>
        <FlatList

          data={menuData}
          renderItem={({ item }) => (
            <DrawerItem
              style={{width:20}}
              navigation={this.props.navigation}
              screenName={item.screenName}
              icon={item.icon}
              name={item.name}
              key={item.key}

            />
          )}
        />
      </View>
    );
  }
}

const DrawerItem = ({ navigation, icon, name, screenName }) => (
  <TouchableOpacity
    style={styles.menuItem}
    onPress={() =>
      navigation.navigate(`${screenName}`, { isStatusBarHidden: true })
    }
  >
    <Icon name={icon} size={20} color="#333" style={{ marginTop:15,marginLeft:15, marginBottom:15,}} />


    <Text style={styles.menuItemText}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container2: {
  height:hp('100%'),
        position: 'absolute',
        top: 0,
        left: 0,
    paddingTop: 70,
  },
  menuItem: {
    flexDirection: "row"
  },
  menuItemText: {
    fontSize: 12,
    fontWeight: "300",
    marginTop:15,
    marginLeft:15,
    marginBottom:15,

    fontWeight:'bold'
  },
  menuItem: {
    flexDirection: "row"
  },

  imageSize:{
  position:'absolute',
  height:hp('100%'),
  width:Dimensions.get('window').width - 220,
},
caption:{
 position:'absolute',
 height:hp('10%'),
 top:hp('68%'),
 zIndex:4,
 alignItems:'center',
},
captionText:{
fontSize:22,
textAlign:'center',
color:'#000000',
fontWeight:'bold',
fontFamily:'Arial',
},
touchStyle:{
 padding:10,
},
drawerClose:{
 width:30,
 height:30,
},
closeContainer:{
 width:Dimensions.get('window').width - 230,
 height:70,
 flexDirection:'row',
 position:'absolute',
 justifyContent:'flex-end',
 marginTop:5,
},

});

export default DrawerMenu;
