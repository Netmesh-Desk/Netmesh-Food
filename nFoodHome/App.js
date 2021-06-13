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
        <ScrollView>
        
        <Image source = {unsplash} style = {styles.container} ></Image>
        <View style = {styles.bar} >

        <Text></Text>
        </View>
        
        </ScrollView>
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
        flex:1,
    },
    bar : {
      width : 400,
      
    }
})