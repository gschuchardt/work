import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const config = {
    apiKey: "AIzaSyDbz6bWcmPMjQ_SFMP2D-_C8WWS0k1S7IQ",
    authDomain: "crwn-db-2761a.firebaseapp.com",
    projectId: "crwn-db-2761a",
    storageBucket: "crwn-db-2761a.appspot.com",
    messagingSenderId: "981150531374",
    appId: "1:981150531374:web:3926e41e36b3ef271d44bf",
    measurementId: "G-SV69V74S2R"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

