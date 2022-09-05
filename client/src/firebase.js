// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAF6iaCr1TYW6xJt0SR66-qczofY8pd8ic",
    authDomain: "video-app-36918.firebaseapp.com",
    projectId: "video-app-36918",
    storageBucket: "video-app-36918.appspot.com",
    messagingSenderId: "648159139305",
    appId: "1:648159139305:web:6f09ec6e78837e9e232778"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const provider =new GoogleAuthProvider()
export default app