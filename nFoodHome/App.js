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
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>N Food </Text>
                <Image source = {logo} style = {styles.imageLogo}></Image>
            </View>
        <ImageBackground source = {unsplash} style = {styles.image1} >
        <ScrollView>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}></View>
            </View>
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
       
    },
    text : {
        fontSize : 28,
        color : "#000000",
        fontWeight : "bold",
        fontFamily:  "Roboto",
        paddingTop:8,
        paddingLeft :15,
    },
    textContainer : {
        height : 60,
        width : 500,
        backgroundColor : "#FFF",
        flexDirection : "row",
        
    },
    imageLogo : {
        width :40,
        height:40,
        flexDirection : "row",
        marginLeft : 210,
        marginTop : 8,
        borderRadius :20,
    },

    card1 : {
        backgroundColor : "#FFF",
        height : 140,
        width : 170,
        marginTop : 30,
        marginLeft : 20,

    },
    innerCard1 : {
        backgroundColor : "#242B2E",
        height : 40,
        width : 170,
        marginTop : 100,
    }


})