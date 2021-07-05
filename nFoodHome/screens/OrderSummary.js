import React  from 'react';
import {Text, ScrollView, TouchableOpacity, View} from 'react-native';
import { widthToDp, heightToDp } from './dimension';

const Address = ({navigation})=>{
    return(
        <>
        <View backgroundColor= "#000000" style = {{flex : 1}}>
            <View style = {{flexDirection : "row"}}>
        <Text style = {{color : "#D1D1D1",  marginLeft : 36, marginTop : 38, fontSize : widthToDp(3.5), }}> Total Items </Text>
        <Text style = {{color : "#D1D1D1", paddingLeft : widthToDp(40) ,marginLeft : 16, marginTop : 38, fontSize : widthToDp(3.5), }}>Total Price </Text></View>
        
         <TouchableOpacity onPress = {() => navigation.navigate("Address")} activeOpacity={0.7}  >
        <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(40) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", marginTop : 37, paddingTop : 12, paddingLeft : 24, borderRadius : 9}}> Add Address </Text>
        </TouchableOpacity>
        </View>
        </>
    )
}

export default Address;