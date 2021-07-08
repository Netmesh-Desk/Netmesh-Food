import React , {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { widthToDp, heightToDp } from './dimension';

const ConfirmedOrder = ({navigation})=>{
  





    return(
        <>
         <StatusBar backgroundColor = {"#101010"}/>
        <ScrollView keyboardShouldPersistTaps = "handled" backgroundColor = "#101010" style = {{flex : 1 }}>
        <Text style = {{color :"#FFF", fontSize : 35, fontWeight : "bold", marginLeft: 26, marginTop: 55}}>Create Account,</Text>
        <Text style = {{color :"#E1E1E1", fontSize : 15, marginLeft: 28}}>Sign Up to get started!</Text>


         <TextInput placeholder = "Name" placeholderTextColor= "#D1D1D1" keyboardType = "name-phone-pad" 
         style = {{color : "#FFF", width : 290 , height : 40 , borderWidth : 2 , borderColor : "#19480B" , marginTop : 100,  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Email" placeholderTextColor= "#D1D1D1" keyboardType = "email-address" 
         style = {{color : "#FFF", width : 290 , height : 40 , borderWidth : 2 , borderColor : "#19480B" , marginTop : 40,  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Password" placeholderTextColor= "#D1D1D1" keyboardType = "visible-password" secureTextEntry = {true} 
         style = {{color : "#FFF", width : 290 , height : 40 , borderWidth : 2 , borderColor : "#19480B" , marginTop : 40,  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TouchableOpacity activeOpacity = {0.5}   onPress = {() => navigation.navigate("Home")} >
         <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(29) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : 11, paddingLeft : 18, borderRadius : 9, fontWeight : "bold", marginTop : 120}}> Sign Up</Text> 
         </TouchableOpacity>
        <Text style = {{color : "#D1D1D1", fontSize : 14, alignSelf :"center", marginTop :60}} >Already have an account ? </Text>
        <TouchableOpacity activeOpacity={0.3}  onPress = {() => navigation.navigate("loginScreenUI")} >
        <Text style = {{color : "#1FAA08", fontSize : 14 ,alignSelf :"center", marginTop :10}}>Sign In here </Text>
        </TouchableOpacity>
        </ScrollView>
        </>
    )
}

export default ConfirmedOrder;