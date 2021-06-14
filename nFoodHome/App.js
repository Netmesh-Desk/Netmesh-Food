import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    ImageBackground,
} from 'react-native';
import unsplash from './Assets/unsplash.jpg';
import logo from './Assets/logo.jpeg';

const App = ()=>{
    return(
        <View style = {styles.container}>
            <View style = {styles.textContainer}><Text style = {styles.text}>N Food              
            <Image source = {logo} style = {styles.imageLogo}></Image></Text>
            </View>
        <ImageBackground source = {unsplash} style = {styles.image1} >
        <ScrollView>
        </ScrollView>
        </ImageBackground>
       
        </View>
      
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : "#000000",
    },

    image1 : {
        
        height: 900,
        width: 500,
        opacity : 0.4,
    },
    text : {
        fontSize : 28,
        color : "#000000",
        fontWeight : "bold",
        fontFamily: "Roboto",
        paddingTop:8,
        paddingLeft :15,
    },
    textContainer : {
        height : 50,
        width : 500,
        backgroundColor : "#FFF",
        
    },
    imageLogo : {
        width :30,
        height:30,
        paddingLeft :80,
        justifyContent : "flex-end",
        alignItems:"flex-end",
    }

})