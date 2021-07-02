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

import Home from './screens/Home';
import Menu from './screens/Menu';
import OrderSummary from './screens/OrderSummary';
import Address from './screens/Order';

import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';

const Stack = createStackNavigator();

const App = ()=>{
    return(
        <>
       <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {Home}
      options = {{
        headerStyle : {
        backgroundColor : "#151515",
        },
        title : 'N Food',
        headerTitleStyle : {
        textAlign : "left",
        color : "#FFF"
        }
      }}></Stack.Screen>

      <Stack.Screen name = "Menu" component = {Menu}
      options = {{
        headerStyle : {
          backgroundColor : "#03203C",
        },
        title : 'N Food ',
        headerTitleStyle : {
          textAlign : "center",
          color : "#12B0E8"
        }
      }}></Stack.Screen>

      <Stack.Screen name = "OrderSummary" component = {OrderSummary}
      options = {{
        headerStyle : {
          backgroundColor : "#03203C",
        },
        title : 'N Food',
        headerTitleStyle : {
          textAlign : "center",
          color : "#12B0E8"
        }
      }}></Stack.Screen>
      <Stack.Screen name = "Address" component = {Address}
      options = {{
        headerStyle : {
          backgroundColor : "#03203C",
        },
        title : 'N Food',
        headerTitleStyle : {
          textAlign : "center",
          color : "#12B0E8"
        }
      }}></Stack.Screen>
      {/* <Stack.Screen name = "Order" component = {Order}
      options = {{
        headerStyle : {
          backgroundColor : "#03203C",
        },
        title : 'N Food',
        headerTitleStyle : {
          textAlign : "center",
          color : "#12B0E8"
        }
      }}></Stack.Screen> */}
      </Stack.Navigator>
    </NavigationContainer>
      </>
    )
}
export default App;

