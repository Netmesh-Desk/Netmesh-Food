import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk'
import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import { back } from 'react-native/Libraries/Animated/Easing'

export const signUp = (data) => async(dispatch) => {
    console.log(data)
    const {name, email, password }= data

    auth().createUserWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log(data);
        console.log("User creation successful");
    })
    .catch((error)=> {
        console.log(error)
        Snackbar.show ({
            text : 'SignUp Failed',
            textColor : "#FFF",
            backgroundColor: 'red',
        })
    })
}

export const signIn = (data) => async(dispatch) => {
    console.log(data)
    const {email,password} = data

    auth()
    .signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log("Sign in Success")
        Snackbar.show ( {
            text : "Account SignIn",
            textColor : "#FFF",
            backgroundColor : "red"
        })
    })
    .catch((error) => {
        console.log(error);
        Snackbar.show({
            text : "SignIn Failed",
            textColor : "#FFF",
            backgroundColor : "red"
        })
    })  
}
