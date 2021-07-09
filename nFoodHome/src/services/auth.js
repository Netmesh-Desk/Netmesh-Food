import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import { back } from 'react-native/Libraries/Animated/Easing'
import { Alert } from 'react-native';


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
    // .then( uid => createUserInDb(uid, fullName, email))
    // .catch(
    //     err => Alert.alert(err.code, err.message)
    // )
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

const signOut = ()=>{
    return auth().signOut()
}

const Auth = {
    signIn,
    signUp,
    signOut
}

export default Auth;