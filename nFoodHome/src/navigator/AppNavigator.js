import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator , TransitionPreset , CardStyleInterpolators } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from '../screens/Home';
import Menu from '../screens/Menu';
import OrderSummary from '../screens/OrderSummary';
import Address from '../screens/Address';
// import ConfirmedOrder from './screens/ConfirmedOrder';
// import loginScreenUI from './screens/loginScreenUI';
import Done from '../screens/Done'




const Stack = createStackNavigator();


const AppNavigator = ({navigation})=>{

  
    return(
        
      
    
      <Stack.Navigator initialRouteName = "ConfirmedOrder" 
      screenOptions = {{
        cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS
      }}>
      
      <Stack.Screen name = "Home" component = {Home}
      options = {{
        headerStyle : {
        backgroundColor : "#151515",
        borderBottomWidth : 0.18,
        borderBottomColor : "#19480B",
        },
        title : 'N Food',
        headerTitleStyle : {
        textAlign : "left",
        color : "#FFF",
        },
       headerLeft : null,
        headerRight : ()=>(
            <Icon name = "user-circle"  style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}} ></Icon> 
         )
      }}> 
      </Stack.Screen>

      <Stack.Screen name = "Menu" component = {Menu}
      options = {{
        headerTintColor : "#D1D1D1",
        headerStyle : {
          backgroundColor : "#151515",
          borderBottomWidth : 0.18,
          borderBottomColor : "#19480B",
          
        
        },
        title : 'N Food ',
        headerTitleStyle : {
          textAlign : "left",
          color : "#FFF"
        },
        headerRight : ()=>(  <Icon name = "user-circle"  style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
      }}></Stack.Screen>

      <Stack.Screen name = "OrderSummary" component = {OrderSummary}
      options = {{
        headerTintColor : "#D1D1D1",
        headerStyle : {
          backgroundColor : "#151515",
          borderBottomWidth : 0.18,
          borderBottomColor : "#19480B",
          
        },
        title : 'Order Summary',
        headerTitleStyle : {
          textAlign : "left",
          color : "#FFF"
        },
        headerRight : ()=>(  <Icon name = "user-circle" style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
      }}></Stack.Screen>
      <Stack.Screen name = "Address" component = {Address}
      options = {{
        headerTintColor : "#D1D1D1",
        headerStyle : {
          backgroundColor : "#151515",
          borderBottomWidth : 0.18,
          borderBottomColor : "#19480B",
        },
        title : 'Address',
        headerTitleStyle : {
          textAlign : "left",
          color : "#FFF",
        },
          headerRight : ()=>(  <Icon name = "user-circle" style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
        
      }}></Stack.Screen>
      <Stack.Screen name = "Done" component = {Done}
      options = {{
        headerShown : false ,
        headerStyle : {
          backgroundColor : "#151515",
          borderBottomWidth : 0.18,
          borderBottomColor : "#19480B",
        },
        title : 'N Food',
        headerTitleStyle : {
          textAlign : "left",
          color : "#FFF",
        },
        headerRight : ()=>(  <Icon name = "user-circle" style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
        
      }}></Stack.Screen>
    </Stack.Navigator>

      
)}

export default AppNavigator;