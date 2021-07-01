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

import logo from './Assets/logo.jpeg';
import { widthToDp, heightToDp } from './dimension';


const App = ()=>{
    return(
        <>
        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>N Food </Text>
                <Image source = {logo} style = {styles.imageLogo}></Image>
            </View>

       </View>
      </>
    )
}
export default App;

