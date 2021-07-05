import React from 'react';
import 'react-native-gesture-handler';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


import Home from './screens/Home';
import Menu from './screens/Menu';
import OrderSummary from './screens/OrderSummary';
import Address from './screens/Address';
import ConfirmedOrder from './screens/ConfirmedOrder';


import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';

const Stack = createStackNavigator();

const App = ()=>{
    return(
        <>
       <NavigationContainer>
      <Stack.Navigator initialRouteName = "OrderSummary">
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
        headerRight : ()=>(  <Icon name = "user-circle" style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
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
        headerRight : ()=>(  <Icon name = "user-circle" style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
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
      <Stack.Screen name = "ConfirmedOrder" component = {ConfirmedOrder}
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
        headerRight : ()=>(  <Icon name = "user-circle" style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}}></Icon>)
        
      }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
      </>
    )
}
export default App;

