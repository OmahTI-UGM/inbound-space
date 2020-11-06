import firebase from 'firebase/app'
import 'firebase/firestore'

export function loadFirebase(){
    try{

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
        firebase.initializeApp(firebaseConfig)
        const settings = firebase.firestore().settings({})
    } catch (error) {
        if(/already exists/.test(error.message)){
            console.log("eror db.js" + error.message);
        }
    }
    return firebase

}