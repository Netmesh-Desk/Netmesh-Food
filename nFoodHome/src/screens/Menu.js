import React , {useState} from 'react';
import {Text , ScrollView , StyleSheet , TouchableOpacity , View , StatusBar} from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { widthToDp, heightToDp } from './dimension';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';








const Menu = ({route,navigation})=>{

    const [foodNum , setFoodNum ] = useState(0)
    const [foodNum2 , setFoodNum2 ] = useState(0)
    const [foodNum3, setFoodNum3 ] = useState(0)
    const [shouldShow, setShouldShow] = useState(false);
    const [priceOfVB , setPriceOfVB] = useState(0)
  
    const increase = ()=> {
    setFoodNum(foodNum + 1)
  
  
}

    const increase2 = ()=> {
        setFoodNum2(foodNum2 + 1)
    
      
        
   }

        const increase3 = ()=> {
            setFoodNum3(foodNum3 + 1)
       
          
          }
        
    

    const decrease = ()=> {setFoodNum(foodNum - 1 )
        if(foodNum<1)
        {setFoodNum(0)
            return Snackbar.show({
                text : "You cannot select the food quantity as negative LOL!",
                backgroundColor: "#AB0606",
                textColor: "FFF",
                textAlign: "center",});
            }}

            const decrease2 = ()=> {setFoodNum2(foodNum2 - 1 )
                if(foodNum2<1)
                {setFoodNum2(0)
                    return Snackbar.show({
                        text : "You cannot select the food quantity as negative LOL!",
                        backgroundColor: "#AB0606",
                        textColor: "FFF",
                        textAlign: "center",});
                    }}

                    const decrease3 = ()=> {setFoodNum3(foodNum3 - 1 )
                        if(foodNum3<1)
                        {setFoodNum3(0)
                            return Snackbar.show({
                                text : "You cannot select the food quantity as negative LOL!",
                                backgroundColor: "#AB0606",
                                textColor: "FFF",
                                textAlign: "center",});
                            }}

     const changePricePlus = ()=> { 
         setPriceOfVB(priceOfVB + 100)
        

     }    

     
     const changePricePlus2 = ()=> { 
        setPriceOfVB(priceOfVB + 60)
        


    }    

    const changePricePlus3 = ()=> { 
        setPriceOfVB(priceOfVB + 30)
      

    }    


     const changePriceMinus = ()=> { 
        setPriceOfVB(priceOfVB - 100)
        if (priceOfVB<=0)
        {setPriceOfVB(0)}
        if (foodNum === 0){
            setPriceOfVB(priceOfVB)
        }

    }    

    const changePriceMinus2 = ()=> { 
        setPriceOfVB(priceOfVB - 60)
        if (priceOfVB<=0)
        {setPriceOfVB(0)}
        if (foodNum2 === 0){
            setPriceOfVB(priceOfVB)
        }

    }    
 
    const changePriceMinus3 = ()=> { 
        setPriceOfVB(priceOfVB - 30)
        if (priceOfVB<=0)
        {setPriceOfVB(0)}
        if (foodNum3 === 0){
            setPriceOfVB(priceOfVB)
        }

    }    

  
 
  
    
    
          
    return(
        <>
        <ScrollView backgroundColor = "#000000">
        <StatusBar backgroundColor = {"#000000"}/>
       

        
        <Text style = {{color : "#D1D1D1",  marginLeft : 16, marginTop : heightToDp(4), fontSize : widthToDp(3.5), }}> Order Food On </Text>
        <Text style = {{color : "#FFF",  marginTop : heightToDp(0.8), marginLeft : 10, fontSize : widthToDp(9) }}> Bhukkhad! </Text>
        <View style = {{flexDirection:"row", marginLeft :21, marginTop : 8}}>
        <Icon name = "star" style = {{fontSize:16, color : "#1FAA08"}}></Icon>
        <Icon name = "star" style = {{fontSize:16, color : "#1FAA08" , paddingLeft : 3}}></Icon>
        <Icon name = "star" style = {{fontSize:16, color : "#1FAA08" , paddingLeft : 3}}></Icon>
        <Icon name = "star" style = {{fontSize:16, color : "#1FAA08" , paddingLeft : 3}}></Icon>
        <Icon name = "star" style = {{fontSize:16, color : "#1FAA08" , paddingLeft : 3}}></Icon>
        </View>
      
        

         <ScrollView>
        <Text style = {{color : "#E1E1E1", marginTop : heightToDp (8), marginLeft : 30, fontSize : widthToDp(5) }}> 1. Veg Biryani  </Text>

        <View style = {{ flexDirection : "row"}}>
        <TouchableOpacity onPress = {decrease} onPressOut = {changePriceMinus}>
        < Text style = {styles.minus}> - </Text>
        </TouchableOpacity>
        <Text style = {{color: "#FFF", fontSize : widthToDp(5), marginTop : heightToDp(2.8),  paddingLeft : 27, paddingTop : 4}}> {foodNum ? foodNum : 0} </Text>
        <TouchableOpacity onPress = {increase} onPressIn = {()=>setShouldShow(true)} onPressOut ={changePricePlus}  >
        < Text style = {styles.plus}> + </Text>
        </TouchableOpacity>

        <Text style = {{color :"#FFF", fontSize : widthToDp(4.2), borderWidth : 0.8, height : 40 , width : 60 , borderColor : "#1FAA08", marginLeft : 70, marginTop : 19, paddingTop : 8, paddingLeft : 8, borderRadius : 10}}>₹ 100</Text>

         </View>

         <Text style = {{color : "#E1E1E1",  marginTop : widthToDp(9), marginLeft : 30, fontSize : widthToDp(5) }}> 2. Egg Burger </Text>

         <View style = {{ flexDirection : "row"}}>
        <TouchableOpacity onPress = {decrease2} onPressIn = {changePriceMinus2}>
        < Text style = {styles.minus}> - </Text>
        </TouchableOpacity>
        <Text style = {{color: "#FFF",  fontSize : widthToDp(5), marginTop : heightToDp(2.8),  paddingLeft : 27, paddingTop : 4}}> {foodNum2 ? foodNum2 : 0} </Text>
        <TouchableOpacity onPress = {increase2} onPressIn = {()=>setShouldShow(true)} onPressOut = {changePricePlus2}>
        < Text style = {styles.plus}> + </Text>
        </TouchableOpacity>
        <Text style = {{color :"#FFF", fontSize : 16, borderWidth : 0.8, height : 40 , width : 60 , borderColor : "#1FAA08", marginLeft : 70, marginTop : 19, paddingTop : 8, paddingLeft : 10, borderRadius : 10}}>₹ 60</Text>

        </View>
         
         
        <Text style = {{color : "#E1E1E1",  marginTop : widthToDp(9), marginLeft : 30, fontSize : widthToDp(5) }}> 3. Tandoori Roti </Text>

        <View style = {{ flexDirection : "row"}}>
        <TouchableOpacity onPress = {decrease3} onPressIn = {changePriceMinus3}>
        < Text style = {styles.minus}> - </Text>
        </TouchableOpacity>
        <Text style = {{color: "#FFF",  fontSize : widthToDp(5), marginTop : heightToDp(2.8),  paddingLeft : 27, paddingTop : 4}}> { foodNum3 ? foodNum3 : 0} </Text>
        <TouchableOpacity onPress = {increase3} onPressOut = {()=>setShouldShow(true)} onPressIn = {changePricePlus3}>
        < Text style = {styles.plus}> + </Text>
        </TouchableOpacity>
        <Text style = {{color :"#FFF", fontSize : 16, borderWidth : 0.8, height : 40 , width : 60 , borderColor : "#1FAA08", marginLeft : 70, marginTop : 19, paddingTop : 8, paddingLeft : 10, borderRadius : 10}}>₹ 30</Text>

        </View>

        
        </ScrollView>

        <View >
            {shouldShow ? (  <TouchableOpacity onPress = {() => navigation.navigate("OrderSummary" ,
            {name1: 'Veg Biryani', itemNo1 : foodNum , name2: 'Egg Burger', itemNo2 : foodNum2 , name3: 'Tandoori Roti', itemNo3 : foodNum3 , totalPrice : priceOfVB,
        })} activeOpacity={0.7}  >
        <Text style = {{  fontSize : widthToDp(4.5) , height : heightToDp(7) , width : widthToDp(89) , color : "#FFF", borderWidth : 1 , borderColor :"#1FAA08", backgroundColor : "#0B4801" ,
         alignSelf :"center", marginTop : heightToDp(10), paddingTop : 14, paddingLeft : 224, borderRadius : 9, fontWeight : "bold"}}> View Cart </Text>
        </TouchableOpacity>) : null }
        <Icon name = "caret-right" style = {{color:"#FFF", fontSize : widthToDp(6), position : "absolute", marginTop : heightToDp(11.96), marginLeft : widthToDp(88)}}></Icon>

        <Text style = {{color : "#FFF", position : 'absolute', marginTop : heightToDp(12), marginLeft : widthToDp(12), fontSize : widthToDp(4.25), fontWeight : "bold"}}>₹ {priceOfVB ? priceOfVB : 0}</Text>
      
        </View>

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

