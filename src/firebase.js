// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_d_VBKBdl7Rcu2wfbMmT1aJHMPQsU958",
  authDomain: "chatting-app-fb0d6.firebaseapp.com",
  projectId: "chatting-app-fb0d6",
  storageBucket: "chatting-app-fb0d6.appspot.com",
  messagingSenderId: "307604575645",
  appId: "1:307604575645:web:39d87716d0b7cc8c44cb74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)