import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from 'react-native';
import unsplash from './Assets/unsplash.jpg';

const App = ()=>{
    return(
        <>
        <View style = {styles.container}>
        <Image source = {unsplash} style = {styles.image1} ></Image>
        <ScrollView>
        <Text>hello</Text>
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
        opacity : 0.4,
    },

})