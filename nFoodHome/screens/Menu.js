import React , {useState} from 'react';
import {Text , ScrollView , StyleSheet , TouchableOpacity , View} from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { widthToDp, heightToDp } from './dimension';


const Menu = ({navigation})=>{

    const [foodNum , setFoodNum ] = useState(0)
  


    const increase = ()=> setFoodNum(foodNum + 1 ) 
    const decrease = ()=> setFoodNum(foodNum - 1 )
    
    return(
        <>
        <ScrollView backgroundColor = "#000000">
        
        <Text style = {{color : "#D1D1D1",  marginLeft : 16, marginTop : 38, fontSize : widthToDp(3.5), }}> Order Food On </Text>
        <Text style = {{color : "#FFF",  marginTop : 4, marginLeft : 10, fontSize : widthToDp(9) }}> Bhukkhad! </Text>

         <ScrollView>
        <Text style = {{color : "#E1E1E1",  marginTop : 105, marginLeft : 30, fontSize : widthToDp(5) }}> 1. Veg Biryani  </Text>

        <View style = {{ flexDirection : "row"}}>
        <TouchableOpacity onPress = {decrease}>
        < Text style = {styles.minus}> - </Text>
        </TouchableOpacity>
        <Text style = {{color: "#FFF", fontSize : 22, marginTop : 25, height : 40 , width : 40, paddingLeft : 20}}> {foodNum ? foodNum : 0} </Text>
        <TouchableOpacity onPress = {increase}>
        < Text style = {styles.plus}> + </Text>
        </TouchableOpacity>

         </View>

         <Text style = {{color : "#E1E1E1",  marginTop : 55, marginLeft : 30, fontSize : widthToDp(5) }}> 2. Egg Burger </Text>

         <View style = {{ flexDirection : "row"}}>

        < Text style = {styles.minus}> - </Text>
        <Text style = {{color: "#FFF", fontSize : 22, marginTop : 25, height : 40 , width : 40, paddingLeft : 20}}> 0 </Text>
        < Text style = {styles.plus}> + </Text>

        </View>
         
         
        <Text style = {{color : "#E1E1E1",  marginTop : 55, marginLeft : 30, fontSize : widthToDp(5) }}> 3. Tandoori Roti </Text>

        <View style = {{ flexDirection : "row"}}>

        < Text style = {styles.minus}> - </Text>
        <Text style = {{color: "#FFF", fontSize : 22, marginTop : 25, height : 40 , width : 40, paddingLeft : 20}}> 0 </Text>
        < Text style = {styles.plus}> + </Text>

        </View>

        
        </ScrollView>
        <TouchableOpacity onPress = {() => navigation.navigate("OrderSummary")} >
        <Text style = {{  fontSize : widthToDp(5) , height : 47 , width : 130 , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", marginTop : 40, paddingTop : 10, paddingLeft : 18, borderRadius : 22 }}> View Cart </Text>
        </TouchableOpacity>

        </ScrollView>
        </>
    )
}




const styles = StyleSheet.create({
    minus : {
        fontSize : widthToDp(7),
        color : "#000000" ,
        borderWidth : 1.3 ,
        borderColor : "#D1D1D1" , 
        backgroundColor : "#FFF",
        width : 40 ,
        height : 40 ,
        paddingLeft : 8,
        marginLeft : 50, 
        marginTop : 20,
        borderRadius : 8 

    },
    plus : {
        fontSize : widthToDp(5),
        color : "#000000" ,
        borderWidth : 1.3 ,
        borderColor : "#D1D1D1" , 
        backgroundColor : "#FFF",
        width : 40 ,
        height : 40 ,
        paddingLeft : 8,
        marginLeft : 30,
        borderRadius : 8 , 
        paddingTop : 6,
        marginTop : 20

    }
})

export default Menu;

