import React  from 'react';
import {Text, ScrollView, TouchableOpacity,View } from 'react-native';
import { widthToDp, heightToDp } from './dimension';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var hostelNames = [
    {label: 'Old Boys Hostel', value: 0 },
    {label: 'Old Apartment', value: 1 },
    {label: 'New Apartment', value: 2 },
    {label: 'New Boys Hostel', value: 3 },
    {label: 'New Ladies Hostel', value: 2 },
  ];

const Address = ({navigation})=>{
    return(
        <>
        <View backgroundColor= "#000000" style = {{flex : 1}}>
        <Text style = {{color : "#D1D1D1",  marginTop : 14, marginLeft : 10, fontSize : widthToDp(6), marginBottom : heightToDp(4)}}> Select your Hostel :  </Text>
        <View style = {{paddingLeft : widthToDp(3)}}>
        <RadioForm radio_props = {hostelNames}
        initial={0}
        onPress={(value) => {}}
        buttonColor={'#1FAA08'}
        buttonSize={widthToDp(3)}
        selectedButtonColor = {'green'}
        labelStyle={{fontSize: 20, color: '#FFF'}}
        radioStyle = {{marginBottom : heightToDp (2)}}
        /></View>
        <TouchableOpacity onPress = {() => navigation.navigate("ConfirmedOrder")} activeOpacity={0.7} style = {{marginTop : heightToDp(46)}} >
        <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(29) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : 11, paddingLeft : 20, borderRadius : 9, fontWeight : "bold"}}> Proceed </Text>
        </TouchableOpacity>
        </View>
        </>
    )
}

export default Address;