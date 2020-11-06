import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnVJtnTpePmG_09ezl3RNmrFe08SfauG4",
    authDomain: "inbound-space.firebaseapp.com",
    databaseURL: "https://inbound-space.firebaseio.com",
    projectId: "inbound-space",
    storageBucket: "inbound-space.appspot.com",
    messagingSenderId: "1012234186328",
    appId: "1:1012234186328:web:48af635d86d5587a70e42d"
};
// Initialize Firebase
// const app =  !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : "no";
// export const db = firebase.firestore();
// export default app;
try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const db = firebase.firestore();

export  {
    db, firebase as default
}