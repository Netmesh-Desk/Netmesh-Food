import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk'
import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import { back } from 'react-native/Libraries/Animated/Easing'
import { Alert } from 'react-native';

// export const signUp = (data) => async(dispatch) => {
//     console.log(data)
//     const {name, email, password }= data

//     auth().createUserWithEmailAndPassword(email,password)
//     .then((data)=>{
//         console.log(data);
//         console.log("User creation successful");
//     })
//     .catch((error)=> {
//         console.log(error)
//         Snackbar.show ({
//             text : 'SignUp Failed',
//             textColor : "#FFF",
//             backgroundColor: 'red',
//         })
//     })
// }

// export const signIn = (data) => async(dispatch) => {
//     console.log(data)
//     const {email,password} = data

//     auth()
//     .signInWithEmailAndPassword(email,password)
//     .then(()=>{
//         console.log("Sign in Success")
//         Snackbar.show ( {
//             text : "Account SignIn",
//             textColor : "#FFF",
//             backgroundColor : "red"
//         })
//     })
//     .catch((error) => {
//         console.log(error);
//         Snackbar.show({
//             text : "SignIn Failed",
//             textColor : "#FFF",
//             backgroundColor : "red"
//         })
//     })  
// }

const signUp = (fullName, email, password) => {
    if(!fullName || !email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().createUserWithEmailAndPassword(email, password)
    .then( cred => {
        const {uid} = cred.user;

        auth().currentUser.updateProfile({
            displayName: fullName
        })

        return uid
    })
    .then( uid => createUserInDb(uid, fullName, email))
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const signIn = (email, password) => {
    if(!email || !password){
        Alert.alert('Error', 'Please enter all fields')
    }

    return auth().signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(
        err => Alert.alert(err.code, err.message)
    )
}

const Auth = {
    signIn,
    signUp,
}

export default Auth;