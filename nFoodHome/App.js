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

        <ScrollView  style = {styles.container}>
       <Image source = {unsplash} style = {styles.image1} ></Image>
        </ScrollView>
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
        flex:1,
    },

    image1 : {
        flex : 1,
    },

})