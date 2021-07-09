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


import Home from './src/screens/Home';
import Menu from './src/screens/Menu';
import OrderSummary from './src/screens/OrderSummary';
import Address from './src/screens/Address';
import ConfirmedOrder from './src/screens/ConfirmedOrder';
import loginScreenUI from './src/screens/loginScreenUI';
import Done from './src/screens/Done'

import auth from '@react-native-firebase/auth'


import { widthToDp, heightToDp } from './dimension';
import { firebase } from '@react-native-firebase/auth';
import AppContainer from './src/navigator/index'


const Stack = createStackNavigator();


const App = ({navigation})=>{

  
    return(
        <>
        <AppContainer/> 
        </>
    )
    }
  
export default App;
    
// ufhapigjfk[]