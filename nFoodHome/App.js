import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import unsplash from './Assets/unsplash.jpg';

const App = ()=>{
    return(
        <ScrollView>
        <View>
            <Image source = {unsplash} ></Image>
        <Text></Text>
        </View>
        </ScrollView>
    )
}
export default App;