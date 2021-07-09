import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk'
import auth from '@react-native-firebase/auth'
import Snackbar from 'react-native-snackbar'
import { back } from 'react-native/Libraries/Animated/Easing'

auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });