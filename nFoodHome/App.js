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
        <>
        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>N Food </Text>
                <Image source = {logo} style = {styles.imageLogo}></Image>
            </View>
            
        {/* <ImageBackground source = {unsplash} style = {styles.image1} > */}
        
       
        
        <ScrollView >
            <View style = {styles.scrollContainer}>
            <View >
            <View style = {styles.card1}>
            <View style = {styles.innerCard1}> 
            <Text style = {styles.cardtext}>Bhukkhad</Text>
            </View>
            <Image source = {require("./Assets/bhukkhad.png")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80, 
                position : "absolute",borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>The Foodie</Text>
            </View>
            <Image source = {require("./Assets/Foodie.jpg")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>The Flaves</Text>
            </View>
            <Image source = {require("./Assets/flaves.jpg")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Dominos</Text>
            </View>
            <Image source = {require("./Assets/dominos.jpg")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
             <View>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Adda</Text>
            </View>
            <Image source = {require("./Assets/adda.png")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#FFF", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Moments</Text>
            </View>
            <Image source = {require("./Assets/moments.png")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
            <View style = {styles.card1}> 
            <View></View>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>BBQ</Text>
            </View>
            <Image source = {require("./Assets/bbq.jpg")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
            <View style = {styles.card1}> 
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Kaveri</Text>
            </View>
            <Image source = {require("./Assets/kaveri.jpg")} 
                style ={{width:40, height : 40, borderRadius : 30 ,marginLeft : 4,marginTop:80,
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            </View>
        </ScrollView>
        {/* </ImageBackground> */}
        
       </View>
      </>
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
        height : "10%",
        width : "100%",
        backgroundColor : "#FFF",
        flexDirection : "row",
        
    },
    imageLogo : {
        width :"14%",
        height:"80%",
        flexDirection : "row",
        alignItems: "flex-end",
        marginHorizontal : 190,
        marginTop : 7,
        borderRadius :30,
    },
    scrollContainer: {
        flexDirection : "row",
        flexWrap : "wrap",
        marginTop : 20,
    },

    card1 : {
        backgroundColor : "#FFF",
        height:140,
        width : "100%",
       marginHorizontal:13,
        marginVertical:13,
        
    },
    innerCard1 : {
        backgroundColor : "#242B2E",
        height : 40,
        width : "100%",
        marginTop : 100,
    },
    cardtext: {
        fontSize: 20,
        textAlign : "right",
        color : "#FFF",
        padding :6,
        marginRight : 4,
    },
  
})