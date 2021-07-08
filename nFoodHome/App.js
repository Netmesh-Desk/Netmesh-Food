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
    TouchableHighlight,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';



import Home from './screens/Home';
import Menu from './screens/Menu';
import OrderSummary from './screens/OrderSummary';
import Address from './screens/Address';
import ConfirmedOrder from './screens/ConfirmedOrder';
import loginScreenUI from './screens/loginScreenUI';


import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';


const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MenuStack = createStackNavigator();
const OrderSummaryStack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator initialRouteName = "Home" 
  screenOptions = {{
    headerShown : true,
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
    headerRight : ()=>(
        <Icon name = "user-circle"  onPress = {()=> navigation.openDrawer()} style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}} ></Icon> 
     )
     }}>
  <HomeStack.Screen name = "Home" component = {Home}
  options = {{
  }}> 
  </HomeStack.Screen>
  </HomeStack.Navigator>

)

const MenuStackScreen = ()=> (
  <MenuStack.Navigator screenOptions = {{
    headerShown : true,
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
    
  }}>
  <MenuStack.Screen name = "Menu" component = {Menu}
  options = {{
   
  }}></MenuStack.Screen>
  </MenuStack.Navigator>


)

const orderSummaryStackScreen = ()=>(
  <OrderSummaryStack.Navigator>
  <OrderSummaryStack.Screen name = "OrderSummary" component = {OrderSummary}
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
      }}>
      </OrderSummaryStack.Screen>
      </OrderSummaryStack.Navigator>
)



const App = ({navigation})=>{
    return(
        <>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerPosition= "right" drawerStyle={{
    backgroundColor: '#151515', 
  }}>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Menu"  component={MenuStackScreen} />
        <Drawer.Screen name="Menu"  component={orderSummaryStackScreen} />
      </Drawer.Navigator>

      {/* <Stack.Navigator initialRouteName = "Home">
      <Stack.Screen name = "Home" component = {DrawerNavigator}
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
        headerRight : ()=>(
            <Icon name = "user-circle"  onPress = {()=> navigation.openDrawer()} style = {{color : "#E1E1E1", position :"absolute", fontSize : 24, paddingRight : 18}} ></Icon> 
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

      </Stack.Navigator> */}
    </NavigationContainer>
      </>
    )
}
export default App;

