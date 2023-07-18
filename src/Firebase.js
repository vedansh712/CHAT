// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAoa8Mg4biAQEz0GaUlTS0P4fAo3XGSKSU",
  authDomain: "chat-1a3cb.firebaseapp.com",
  projectId: "chat-1a3cb",
  storageBucket: "chat-1a3cb.appspot.com",
  messagingSenderId: "269783614957",
  appId: "1:269783614957:web:3c1769aba6a0171a0d53e4"
};

// this is just a test
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)