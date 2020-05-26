import React, { Component } from 'react';
import SendSMS from 'react-native-sms';
import { Text, View,Platform, TouchableOpacity,Dimensions,ScrollView,Image,Alert, StyleSheet,BackHandler,Button } from 'react-native';
import { FlatHeader, Group } from 'react-native-flat-header';
import StarRating from '../StarRating/user-star/star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderLeft from '../headerLeft';
import HeaderRight from '../headerRight';
import {genData} from '../../util/profile/generalData';
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

class General extends Component{
 constructor(props) {
   super(props);
   //this.back_Button_Press = this.back_Button_Press.bind(this);
   this.state = {

   }

 }




 render(){


  return(


   <View style={styles. MainContainerGeneral}>

        <View style={styles.list}>
           <ScrollView vertical={true}
           style={styles.scrollContainerDown}
            ref={(scrollView) => {scrollView = scrollView; }}
           showsVerticalScrollIndicator={false}>

          {
           genData && genData.length > 0 && genData.map(val => {
            const ratingObj ={
                ratings:val.star,
                views: val.star,
            }
            return (


                <View style={styles.cardsList}  key={val.id}>
                <View style={styles.review}>
                           <View style={styles.name}>
                               <View style={styles.user_name}><Text style={{fontWeight:'bold',color:'#4d4d4d', fontSize:15,fontFamily:'Roboto', }}>{val.name}</Text></View>
                               <View style={styles.user_location}><Image style={styles.userImageContainer} source={require('../../assets/calendar.png')} style={{width:13, height:13,backgroundColor:'#fff'}} /></View>
                               <View style={styles.user_address}><Text style={{fontSize:11, color:'gray',fontFamily:'Roboto', }}>{val.time}</Text></View>
                           </View>

                            <View style={styles.star_rating}>
                               <StarRating ratingObj={ratingObj} />
                            </View>

                            <View style={styles.title}>
                                <View style={styles.review_title}><Text style={{ fontWeight:'bold',color:'#4d4d4d', fontFamily:'Roboto', }}>{val.title}</Text></View>
                            </View>
                            <View style={styles.content}>
                                   <View style={styles.review_content}><Text style={{fontSize:14, lineHeight:19,fontFamily:'Roboto', }}>{val.message}</Text></View>
                             </View>

                             <View style={styles.date}>

                             </View>
                </View>
                </View>

               )
              })
             }

           </ScrollView>

           </View>
    </View>


 );
}
}
export default General;



const styles = StyleSheet.create({

MainContainerGeneral: {
 height:hp('100%'),
 flex: 1,
 justifyContent: 'center',
 alignItems: 'center',
backgroundColor: '#f2f2f2',
 flexDirection:'column',
 resizeMode: 'contain',
},
list:{
position:'absolute',
flexDirection:'column',
width:wp('98%'),
height:hp('50%'),
top:hp('0%'),
},
cardsList:{
width: wp('99%'),
resizeMode: 'contain',
borderWidth: 0,
borderRadius: 1.5,
shadowColor: '#4d4d4d',
shadowOffset: { width: 0, height:hp('0.5%') },
shadowOpacity: 2,
shadowRadius: 2,
elevation: hp('0.5%'),
marginTop: 3,
flexDirection:'row',
backgroundColor:'#fff',
},
review:{
 width:wp('95%'),
},
review_content:{
width:wp('88%')

},
name:{
 height:hp('4%'),
 width:300,
 flexDirection:'row',
 alignItems:'center',
marginLeft:5,
},
user_name:{
width:200,
marginLeft:20,
},
user_location:{
width:50,
alignItems:'flex-end',
marginRight:3,
},
user_address:{
width:90,
alignItems:'flex-start',
color:'gray',
},
star_rating:{
 width:wp('80%'),
paddingLeft:25,
marginBottom:4
},
title:{
 width:wp('90%'),
paddingLeft:25,
},
content:{
 width:wp('90%'),
paddingLeft:25,
height:'auto',
},
date:{
 flexDirection:'row',
 width:wp('90%'),
 height:hp('2%'),
 paddingLeft:wp('16%'),
 margin:5,
},
review_date_icon:{
 width:wp('30%'),
},
review_date:{
  width:wp('50%'),
   marginLeft:3,

}

});
