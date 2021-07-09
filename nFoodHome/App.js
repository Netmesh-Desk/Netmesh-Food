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


import Home from './screens/Home';
import Menu from './screens/Menu';
import OrderSummary from './screens/OrderSummary';
import Address from './screens/Address';
import ConfirmedOrder from './screens/ConfirmedOrder';
import loginScreenUI from './screens/loginScreenUI';
import Done from './screens/Done'

import auth from '@react-native-firebase/auth'

import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';
import { firebase } from '@react-native-firebase/auth';
import AppContainer from './src/action/index'


const Stack = createStackNavigator();


const App = ({navigation})=>{

  
    return(
        <>
        <AppContainer/> 
        </>
    )
    }
  
export default App;
    
