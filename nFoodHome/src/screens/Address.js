import React  from 'react';
import {Text, ScrollView, TouchableOpacity,View , StatusBar} from 'react-native';
import { widthToDp, heightToDp } from './dimension';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Done from './Done';


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
         <StatusBar backgroundColor = {"#000000"}/>
        <View backgroundColor= "#000000" style = {{flex : 1}}>
        <Text style = {{color : "#D1D1D1",  marginTop : heightToDp (5), marginLeft : 12, fontSize : widthToDp(6), marginBottom : heightToDp(6), fontWeight : "bold"}}> Select your Hostel :  </Text>
        <View style = {{paddingLeft : widthToDp(5)}}>
        <RadioForm radio_props = {hostelNames}
        initial={0}
        onPress={(value) => {}}
        buttonColor={'#D1D1D1'}
        buttonSize={widthToDp(3)}
        selectedButtonColor = {'#1FAA08'}
        labelStyle={{fontSize: 20, color: '#D1D1D1', paddingLeft : widthToDp(5)}}
        radioStyle = {{marginBottom : heightToDp (3)}}
        /></View>
        <TouchableOpacity activeOpacity={0.7} style = {{marginTop : heightToDp(30)}} onPress = {()=>navigation.navigate("Done")} >
        <Text style = {{  fontSize : widthToDp(4.5) , height : 47 , width : widthToDp(34) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", paddingTop : 11, paddingLeft : 16, borderRadius : 9, fontWeight : "bold"}}> Order Now </Text>
        </TouchableOpacity>
        </View>
        </>
    )
}

export default Address;