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
        <View>
            <Image source = {unsplash} styles = {styles.container} ></Image>
        <Text></Text>
        </View>
        </ScrollView>
    )
}
export default App;

const styles = StyleSheet.create({
    container : {
        flex:1,
    }
})