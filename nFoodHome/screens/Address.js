import React  from 'react';
import {Text, ScrollView, TouchableOpacity} from 'react-native';

const Address = ({navigation})=>{
    return(
        <>
        <ScrollView backgroundColor= "#000000">
        <TouchableOpacity onPress = {() => navigation.navigate("Order")} >
        <Text>Hostel Name</Text>
        </TouchableOpacity>
        </ScrollView>
        </>
    )
}

export default Address;