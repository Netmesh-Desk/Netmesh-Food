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



import ConfirmedOrder from './screens/ConfirmedOrder';
import loginScreenUI from './screens/loginScreenUI';


import auth from '@react-native-firebase/auth'

import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';
import { firebase } from '@react-native-firebase/auth';


const Stack = createStackNavigator();


const AuthNavigator = ({navigation})=>{

  
    return(
    
        <Stack.Navigator initialRouteName = "ConfirmedOrder" 
        screenOptions = {{
          cardStyleInterpolator : CardStyleInterpolators.forHorizontalIOS
        }}>
             <Stack.Screen name = "ConfirmedOrder" component = {ConfirmedOrder}
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

<Stack.Screen name = "loginScreenUI" component = {loginScreenUI}
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
        )
    }
    export default AuthNavigator;
