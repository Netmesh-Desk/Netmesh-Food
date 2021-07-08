import React , {useState} from 'react';
import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import { widthToDp, heightToDp } from './dimension';
import {signUp} from '../src/action/auth'

const ConfirmedOrder = ({navigation, signUp})=>{
  
    
        const [name1, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')


        const doSignUp = async () => {
            signUp({name1, email, password})
        }

    return(
        <>
         <StatusBar backgroundColor = {"#101010"}/>
        <ScrollView keyboardShouldPersistTaps = "handled" backgroundColor = "#101010" style = {{flex : 1 }}>
        <Text style = {{color :"#FFF", fontSize : widthToDp(10), fontWeight : "bold", marginLeft: widthToDp(6.8), marginTop: heightToDp(9)}}>Create Account,</Text>
        <Text style = {{color :"#E1E1E1", fontSize : widthToDp(4.3), marginLeft: widthToDp(7)}}>Sign Up to get started!</Text>


         <TextInput placeholder = "Name" placeholderTextColor= "#D1D1D1" keyboardType = "name-phone-pad" onChangeText = {(text) => setName(text)} value={name1}
         style = {{color : "#FFF", width : widthToDp(74) , height : heightToDp(5.8) , borderWidth : 2 , borderColor : "#19480B" , marginTop : heightToDp(14),  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Email" placeholderTextColor= "#D1D1D1" keyboardType = "email-address"  onChangeText={(text) => setEmail(text)} value = {email}
         style = {{color : "#FFF", width : widthToDp(74) , height : heightToDp(5.8) , borderWidth : 2 , borderColor : "#19480B" , marginTop : heightToDp(5),  alignSelf : "center", borderRadius : 16, paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TextInput placeholder = "Password" placeholderTextColor= "#D1D1D1" keyboardType = "visible-password" secureTextEntry = {true} onChangeText = { (text) => setPassword(text) } value = {password}
         style = {{color : "#FFF", width : widthToDp(74) , height : heightToDp(5.8) , borderWidth : 2 ,
        borderColor : "#19480B" , marginTop : heightToDp(5),  alignSelf : "center", borderRadius : 16,
        paddingLeft : 20, paddingTop : 10}}></TextInput>


         <TouchableOpacity activeOpacity = {0.5}   onPress = {()=> {navigation.navigate(Home)}} >
         <Text style = {{  fontSize : widthToDp(4.5) , height : heightToDp(6.8) , width : widthToDp(27) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : heightToDp(1.49), paddingLeft : 18, borderRadius : 9, fontWeight : "bold", marginTop : heightToDp(14)}}> Sign Up</Text> 
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