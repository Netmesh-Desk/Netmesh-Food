import React  from 'react';
import {Text, ScrollView, TouchableOpacity, View} from 'react-native';
import { widthToDp, heightToDp } from './dimension';

const Address = ({route, navigation})=>{
    const { name1, itemNo1, name2, itemNo2, name3,itemNo3, totalPrice } = route.params;

    return(
        <>
        <View backgroundColor= "#000000" style = {{flex : 1}}>
            <View style = {{flexDirection : "row"}}>
        <Text style = {{color : "#D1D1D1",  marginLeft : 33, marginTop : 38, fontSize : widthToDp(4.8),fontWeight : "bold" }}> Total Items </Text>
        <Text style = {{color : "#D1D1D1", paddingLeft : widthToDp(33) ,marginLeft : 2, marginTop : 38, fontSize : widthToDp(4.8), fontWeight : "bold" }}>Total Price </Text></View>



        
        <View style = {{flexDirection : "row"}}>
        <Text style = {{color : "#FFF",  marginLeft : 36, marginTop : 38, fontSize : widthToDp(3.5)}}> {(name1)}</Text>
        <Text style = {{color : "#FFF", paddingLeft : widthToDp(40) ,marginLeft : 16, marginTop : 38, fontSize : widthToDp(3.5), }}> 100 x {(itemNo1)} </Text></View>


        <View style = {{flexDirection : "row"}}>
        <Text style = {{color : "#FFF",  marginLeft : 36, marginTop : 38, fontSize : widthToDp(3.5)}}> {(name2)}</Text>
        <Text style = {{color : "#FFF", paddingLeft : widthToDp(40) ,marginLeft : 16, marginTop : 38, fontSize : widthToDp(3.5), }}> 60 x {(itemNo2)} </Text></View>

        <View style = {{flexDirection : "row"}}>
        <Text style = {{color : "#FFF",  marginLeft : 36, marginTop : 38, fontSize : widthToDp(3.5)}}> {(name3)}</Text>
        <Text style = {{color : "#FFF", paddingLeft : widthToDp(40) ,marginLeft : 3, marginTop : 38, fontSize : widthToDp(3.5), }}> 30 x {(itemNo3)} </Text></View>

        <View style = {{width : widthToDp (90), alignSelf : 'center',height : heightToDp (0.08),marginTop : heightToDp (5),backgroundColor : "#19480B"}}></View>

        <Text style = {{color : "#FFF", paddingLeft : widthToDp(62) ,marginLeft : widthToDp (9), marginTop : heightToDp(2), fontSize : widthToDp(4.5), }}> ₹ {(totalPrice)} </Text>

        <View style = {{width : widthToDp (90), alignSelf : 'center',height : heightToDp (0.08),marginTop : heightToDp (2),backgroundColor : "#19480B"}}></View>
        

         <TouchableOpacity onPress = {() => navigation.navigate("Address")} activeOpacity={0.7}  >
        <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(40) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", marginTop : heightToDp(16), paddingTop : 12, paddingLeft : 22, borderRadius : 9, fontWeight: "bold"}}> Add Address </Text>
        </TouchableOpacity>
        </View>
        </>
    )
}

export default Address;