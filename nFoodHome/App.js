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
        <ScrollView styles= {styles.container}>
        <View>
        <Image source = {unsplash} styles = {styles.image1} ></Image>
        </View>
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