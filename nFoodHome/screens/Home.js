import React  from 'react';
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

const Home = ({navigation})=> {
    return(
    <>
    <StatusBar backgroundColor = {"#000000"}/>
    <View style = {styles.container}>
    <ScrollView >
            <View style = {styles.scrollContainer}>
            <View>
            <TouchableOpacity activeOpacity={1.0}
             onPress = {() => navigation.navigate("Menu")}>   
            <View style = {styles.card1}>
            <Image source = { require("./Assets/cover1.jpg") }
           
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}> 
            <Text style = {styles.cardtext}>Bhukkhad</Text>
            </View>
            <Image source = {require("./Assets/bhukkhad.png")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14), 
                position : "absolute",borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity> 
            </View>
            
            
            <View>
                <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}> 
            <Image source = { require("./Assets/cover2.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>The Foodie</Text>
            </View>
            <Image source = {require("./Assets/Foodie.jpg")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : 40 ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}>
            <Image source = { require("./Assets/cover3.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>The Flaves</Text>
            </View>
            <Image source = {require("./Assets/flaves.jpg")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}> 
            <Image source = { require("./Assets/cover4.png") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Dominos</Text>
            </View>
            <Image source = {require("./Assets/dominos.jpg")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
             <View>
                 <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}>
            <Image source = { require("./Assets/cover5.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Adda</Text>
            </View>
            <Image source = {require("./Assets/adda.png")} 
                style ={{width:widthToDp(10.5), height : heightToDp(5.2), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#FFF", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}>
            <Image source = { require("./Assets/cover6.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Moments</Text>
            </View>
            <Image source = {require("./Assets/moments.png")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}> 
            <Image source = { require("./Assets/cover7.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>BBQ</Text>
            </View>
            <Image source = {require("./Assets/bbq.jpg")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity activeOpacity={1.0}>
            <View style = {styles.card1}> 
            <Image source = { require("./Assets/cover8.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Kaveri</Text>
            </View>
            <Image source = {require("./Assets/kaveri.jpg")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </TouchableOpacity>
            </View>
            
            </View>

            <View> 
                <Text style = {{color : "#929491", alignSelf : "center", margin : 25, 
                fontSize : widthToDp(4.5), borderBottomWidth : 0.18,
                 borderBottomColor : "#19480B",paddingBottom : widthToDp(2.7)}}> Serving Happiness! </Text>

            </View>
        </ScrollView>
        </View>
    </>)
}

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
        fontSize : widthToDp(6),
        color : "#E0E0E0",
        fontWeight : "bold",
        fontFamily:  "Roboto",
        paddingTop:heightToDp(1.8),
        paddingLeft :widthToDp(5),
    },
    textContainer : {
        height : heightToDp(8),
        width : widthToDp(100),
        backgroundColor : "#151515",
        flexDirection : "row",
        borderBottomWidth : 0.18,
        borderBottomColor : "#19480B",
        
        
    },
    imageLogo : {
        width : widthToDp(10),
        height:heightToDp(5),
        flexDirection : "row",
        alignItems: "flex-end",
        marginHorizontal : widthToDp(55),
        marginTop : heightToDp(1.5),
        borderRadius : 50,
    },
    scrollContainer: {
        flexDirection : "row",
        flexWrap : "wrap",
        marginTop : heightToDp(4),

    },

    card1 : {
        backgroundColor : "#FFF",
        height:heightToDp(22),
        width : widthToDp(43),
        marginLeft:widthToDp(4.2),
        marginBottom :heightToDp(4),
        margin :widthToDp(2.2),
        borderRadius : widthToDp (6),
      
    },
    innerCard1 : {
        backgroundColor : "#242B2E",
        height : heightToDp(6.5),
        width : widthToDp(43),
        marginBottom: heightToDp(2),
        borderBottomEndRadius : widthToDp(6),
        borderBottomStartRadius : widthToDp (6),
    },
    cardtext: {
        fontSize: 20,
        textAlign : "right",
        color : "#FFF",
        padding :6,
        marginRight : widthToDp(2),
    },
    coverImage : {
        width :  widthToDp(43),
        height:heightToDp(16),
       borderTopLeftRadius : widthToDp(6),
       borderTopRightRadius : widthToDp(6),
    },
  
})

export default Home;