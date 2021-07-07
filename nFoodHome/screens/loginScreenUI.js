import React , {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { widthToDp, heightToDp } from './dimension';


const ConfirmedOrder = ({navigation})=>{
    
  

    return(
        <>
        <ScrollView keyboardShouldPersistTaps = "handled" backgroundColor = "#101010" style = {{flex : 1 }}>
        <Text style = {{color :"#FFF", fontSize : 40, fontWeight : "bold", marginLeft: 26, marginTop: 65}}>Welcome,</Text>
        <Text style = {{color :"#E1E1E1", fontSize : 15, marginLeft: 32}}>Sign In to Continue!</Text>
        
         <TextInput placeholder = "Email" placeholderTextColor= "#D1D1D1" keyboardType = "email-address"
         style = {{color : "#FFF", width : 290 , height : 40 , borderWidth : 2 , borderColor : "#19480B" , marginTop : 110,  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Password" placeholderTextColor= "#D1D1D1" keyboardType = "visible-password"  secureTextEntry = {true} 
         style = {{color : "#FFF", width : 290 , height : 40 , borderWidth : 2 , borderColor : "#19480B" , marginTop : 40,  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TouchableOpacity activeOpacity = {0.5}   onPress = {() => navigation.navigate("Home")} >
         <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(29) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : 11, paddingLeft : 20, borderRadius : 9, fontWeight : "bold", marginTop : 120}}> Sign In</Text> 
         </TouchableOpacity>
        <Text style = {{color : "#D1D1D1", fontSize : 14, alignSelf :"center", marginTop :60}} >Don't have an account ? </Text>
        <TouchableOpacity activeOpacity={0.3}  onPress = {() => navigation.navigate("ConfirmedOrder")} >
        <Text style = {{color : "#1FAA08", fontSize : 14 ,alignSelf :"center", marginTop :10}}>Sign Up here </Text>
        </TouchableOpacity>
        </ScrollView>
        </>
    )
}

export default ConfirmedOrder;