import firebase from "firebase/app"
import "firebase/auth"
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA2Z1Xer7C3QvGesTTU_aUVE-8FT_PsKGc",
    authDomain: "online-shopping-e0f10.firebaseapp.com",
    projectId: "online-shopping-e0f10",
    storageBucket: "online-shopping-e0f10.appspot.com",
    messagingSenderId: "254057588872",
    appId: "1:254057588872:web:a31c24d4c8312ae249573d"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }