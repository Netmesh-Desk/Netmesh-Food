import React , {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { widthToDp, heightToDp } from './dimension';
import Home from '../screens/Home';
import Auth from '../services/auth'


const ConfirmedOrder = ({navigation})=>{
  
    const [ userName, setUserName ]= useState()
    const [ email, setEmail ] = useState()
    const [ password, setPassword ] = useState()
    

    return(
        <>
         <StatusBar backgroundColor = {"#101010"}/>
        <ScrollView keyboardShouldPersistTaps = "handled" backgroundColor = "#101010" style = {{flex : 1 }}>
        <Text style = {{color :"#FFF", fontSize : widthToDp(10), fontWeight : "bold", marginLeft: widthToDp(6.8), marginTop: heightToDp(9)}}>Create Account,</Text>
        <Text style = {{color :"#E1E1E1", fontSize : widthToDp(4.3), marginLeft: widthToDp(7)}}>Sign Up to get started!</Text>


         <TextInput placeholder = "Name" placeholderTextColor= "#D1D1D1" keyboardType = "name-phone-pad" 
         onChangeText = {(e) => setUserName(e)} value= {userName}
         style = {{color : "#FFF", width : widthToDp(74) , height : heightToDp(5.8) , borderWidth : 2 , borderColor : "#19480B" , marginTop : heightToDp(14),  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Email" placeholderTextColor= "#D1D1D1" keyboardType = "email-address"  
         onChangeText={(e) => setEmail(e)} value = {email}
         style = {{color : "#FFF", width : widthToDp(74) , height : heightToDp(5.8) , borderWidth : 2 , borderColor : "#19480B" , marginTop : heightToDp(5),  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Password" placeholderTextColor= "#D1D1D1"  secureTextEntry = {true} 
         onChangeText = { (e) => setPassword(e) } value = {password}
         style = {{color : "#FFF", width : widthToDp(74) , height : heightToDp(5.8) , borderWidth : 2 ,
        borderColor : "#19480B" , marginTop : heightToDp(5),  alignSelf : "center", borderRadius : 16,
        paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TouchableOpacity activeOpacity = {0.5} onPress = {()=> Auth.signUp(userName,email,password)} >
         <Text style = {{  fontSize : widthToDp(4.5) , height : heightToDp(6.5) , width : widthToDp(29) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : heightToDp(1.6), paddingLeft : 19, borderRadius : 9, fontWeight : "bold", marginTop : heightToDp(14)}}> Sign Up</Text> 
         </TouchableOpacity>
        <Text style = {{color : "#D1D1D1", fontSize : 14, alignSelf :"center", marginTop :heightToDp(5.8)}} >Already have an account ? </Text>
        <TouchableOpacity activeOpacity={0.3}  onPress = {() => navigation.navigate("loginScreenUI")} >
        <Text style = {{color : "#1FAA08", fontSize : 14 ,alignSelf :"center", marginTop :heightToDp(1.3)}}>Sign In here </Text>
        </TouchableOpacity>
        </ScrollView>
        </>
    )
}



export default ConfirmedOrder;