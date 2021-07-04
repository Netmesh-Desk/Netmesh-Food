import React  from 'react';
import {Text, View , ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import { widthToDp, heightToDp } from './dimension';

const OrderSummary = ({navigation})=>{
    return(
        <>
        <ScrollView backgroundColor= "#000000" >
        <View style = {{flexDirection : "row"}}>
        <Text style = {{color : "#D1D1D1",  marginLeft : widthToDp(10), marginTop : 38, fontSize : widthToDp(3.5)}}>Total Items</Text>
        <Text style = {{color : "#D1D1D1",  marginLeft : widthToDp(45), marginTop : 38, fontSize : widthToDp(3.5)}}>Total Price</Text>
        </View>
        <TouchableOpacity onPress = {()=>navigation.navigate("Address")}>
        <Text style = {{  fontSize : widthToDp(5) , height : 47 , width : widthToDp(37) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", marginTop : 40, paddingTop : 10, paddingLeft : 18, borderRadius : 22 }}>Add Address </Text>
        </TouchableOpacity>
        </ScrollView>
        </>
    )
}

export default OrderSummary;