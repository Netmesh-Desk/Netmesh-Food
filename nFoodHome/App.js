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
<<<<<<< HEAD
        <ScrollView>
        
        <Image source = {unsplash} style = {styles.container} ></Image>
        <View style = {styles.bar} >

        <Text></Text>
=======
        <ScrollView styles= {styles.container}>
        <View>
        <Image source = {unsplash} styles = {styles.image1} ></Image>
>>>>>>> 149b5d889ef0566a5bcc850446be41f33e167300
        </View>
        
        </ScrollView>
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
<<<<<<< HEAD
    bar : {
      width : 400,
      
    }
=======
    image1 : {
        flex : 1,
    },
>>>>>>> 149b5d889ef0566a5bcc850446be41f33e167300
})