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
import { widthToDp, heightToDp } from './dimension';


const App = ()=>{
    return(
        <>
        <View style = {styles.container}>
            <View style = {styles.textContainer}>
                <Text style = {styles.text}>N Food </Text>
                <Image source = {logo} style = {styles.imageLogo}></Image>
            </View>
            
        
        
       
        
        <ScrollView >
            <View style = {styles.scrollContainer}>
            <View >
            <View style = {styles.card1}>
            <Image source = { require("./Assets/cover1.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}> 
            <Text style = {styles.cardtext}>Bhukkhad</Text>
            </View>
            <Image source = {require("./Assets/bhukkhad.png")} 
                style ={{width:widthToDp(10.1), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14), 
                position : "absolute",borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            
            <View>
            <View style = {styles.card1}> 
            <Image source = { require("./Assets/cover2.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>The Foodie</Text>
            </View>
            <Image source = {require("./Assets/Foodie.jpg")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#000000", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
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
            </View>
            <View>
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
            </View>
             <View>
            <View style = {styles.card1}>
            <Image source = { require("./Assets/cover5.jpg") }
            style = {styles.coverImage}></Image>
            <View style = {styles.innerCard1}>
            <Text style = {styles.cardtext}>Adda</Text>
            </View>
            <Image source = {require("./Assets/adda.png")} 
                style ={{width:widthToDp(10.3), height : heightToDp(5.3), borderRadius : widthToDp(10) ,marginLeft : widthToDp(1),marginTop:heightToDp(14),
                 position : "absolute", borderColor : "#FFF", borderWidth :1}}></Image>
            </View>
            </View>
            <View>
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
            </View>
            <View>
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
            </View>
            <View>
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
            </View>
            </View>
        </ScrollView>
        
        
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
        fontSize : widthToDp(8),
        color : "#000000",
        fontWeight : "bold",
        fontFamily:  "Roboto",
        paddingTop:heightToDp(1.2),
        paddingLeft :widthToDp(4),
    },
    textContainer : {
        height : heightToDp(8),
        width : widthToDp(100),
        backgroundColor : "#FFF",
        flexDirection : "row",
        
    },
    imageLogo : {
        width : widthToDp(10),
        height:heightToDp(5),
        flexDirection : "row",
        alignItems: "flex-end",
        marginHorizontal : widthToDp(55),
        marginTop : heightToDp(1.5),
        borderRadius : widthToDp(8),
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
        margin :widthToDp(1.3),
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