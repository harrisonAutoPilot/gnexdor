import React, { Component } from 'react';
import { Text, View, TouchableOpacity,Dimensions,ScrollView,Image, StyleSheet } from 'react-native';
import Card from '../cards';
import {Wrapper} from './access-styles';
//import {accessData} from '../../utils/mockData';

const Access = () => {
    return (
        <Wrapper>
             <View>
             <Text>this is me testing the styled component</Text>
             </View>
        </Wrapper>
    )
}

export default Access
// <div className="access">
//     <Fade top>
//        <h3 className="access-header">access to...</h3>
//     </Fade>
//     <Fade right>
//        <div className="access-line"/>
//     </Fade>
// </div>
//
// <Fade bottom>
//     <div className="access-card">
//        // {accessData && accessData.map(item => <Card key={item.id} item={item}/>)}
//     </div>
// </Fade>
