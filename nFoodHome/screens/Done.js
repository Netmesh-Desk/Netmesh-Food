import React , {useState} from 'react';
import {Text , ScrollView , StyleSheet , TouchableOpacity , View} from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { widthToDp, heightToDp } from './dimension';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';
import LottieView from 'lottie-react-native'

const Done = ({navigation}) => {
    return (
        <>
        <View backgroundColor = "#101010" style = {{flex : 1}}>
            <LottieView source = {require('../Animations/food.json')} autoPlay loop style = {{height : 300, width : 300 , alignSelf: "center", marginTop : heightToDp(10)}} ></LottieView>
            <Text style = {{color : "#D1D1D1" , alignSelf : "center", marginTop : heightToDp(8) , fontSize : 17}}> Your order is being prepared!</Text>
            
         <TouchableOpacity activeOpacity = {0.5}   onPress = {() => navigation.navigate("Home")} >
         <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(41.5) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : 11, paddingLeft : 20, borderRadius : 9, fontWeight : "bold", marginTop : 120}}> Back to Home </Text> 
         </TouchableOpacity>
        </View>
        </>
    )
}

export default Done;