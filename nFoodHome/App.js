import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Menu from './screens/Menu';
import OrderSummary from './Screens/OrderSummary';
import Address from './screens/Order';

import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';

const Stack = createStackNavigator();

const App = ()=>{
    return(
        <>
        {/* <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>N Food </Text>
                <Image source = {logo} style = {styles.imageLogo}></Image>
            </View>

       </View> */}
       <NavigationContainer>
      <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {Home}
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
      <Stack.Screen name = "Order" component = {Order}
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
      </Stack.Navigator>
    </NavigationContainer>
      </>
    )
}
export default App;

