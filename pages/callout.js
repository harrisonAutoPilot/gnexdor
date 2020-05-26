import React, { Component,useRef } from 'react';
import {
  Image,              // Renders images
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  View,
  TouchableHighlight  ,
  TouchableOpacity            // Container component
} from 'react-native';
import {
 heightPercentageToDP as hp,
 widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


import { Modalize } from 'react-native-modalize';
 const modalRef = useRef<Modalize>(null);

 const onOpen = () => {
   modalRef.current?.open();

 };
export default class Callout extends Component {
state = {
 dialogVisible:false,
}






  render() {
    const { name, avatar, profession,distance,price } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View style={styles.toopTip}>
            <Text style={styles.name}>{name}</Text>
             <Text style={styles.description}>{profession}</Text>
             <Text style={styles.description}>Price: {price}</Text>

            <Text style={{fontSize:13, }}>{distance} away</Text><TouchableOpacity style={styles.touchableButton}><Text style={{fontSize:9, color:'#fff'}}>View More</Text></TouchableOpacity>
          </View>


        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  // Callout bubble
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  // Character name
  name: {
    fontSize: 12,
   textAlign:'center',
   color:'#34B44B'
  },
  description:{
   color:'gray',
   fontSize:13,
  },
  // Character image

toopTip:{
 flexDirection:'column',
 alignItems:'center',
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 3 },
 shadowOpacity: 2,
 shadowRadius: 2,
 elevation: hp('0.5%'),
 alignItems:'center',
 justifyContent:'center',
},
touchableButton:{
 width:95,
 height:30,
 backgroundColor:'#EBB81D',
alignItems:'center',
 borderRadius:50,
 justifyContent:'center',
 marginTop:7,
},
distance:{
 fontSize:13,
 color:'#34B44B'
},
avatarCover:{
 width:70,
 height:70,
 borderRadius:50,
 borderWidth:1,
 borderColor:'#000',
 borderStyle:'solid',
  resizeMode:'cover'
}
});
