// import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDHOWMsu3JOCfJWLdkf0WIg94ruiylSYaY",
    authDomain: "business-id-app.firebaseapp.com",
    databaseURL: "https://business-id-app-default-rtdb.firebaseio.com",
    projectId: "business-id-app",
    storageBucket: "business-id-app.appspot.com",
    messagingSenderId: "1082506774496",
    appId: "1:1082506774496:web:b6aca49d9912f45e6ecd85"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);