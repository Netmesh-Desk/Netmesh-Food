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

const App = ()=>{
    return(
        <ScrollView>
        <View style = {styles.container}>
     
       
        {/* <ImageBackground source = {unsplash} style = {styles.image1} ></ImageBackground>
  */}
        <Text>hello</Text>
        </View>
        </ScrollView>
       
        
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

})