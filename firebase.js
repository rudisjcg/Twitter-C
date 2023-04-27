// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQhoJXkwyKbUyT0SC_c3ZSUwEvE4j7KF8",
  authDomain: "twitter-clone-a6de9.firebaseapp.com",
  projectId: "twitter-clone-a6de9",
  storageBucket: "twitter-clone-a6de9.appspot.com",
  messagingSenderId: "667822037865",
  appId: "1:667822037865:web:e012c5498ef5a0efba3bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)