// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDwnqNFpYYEyTSxY63AmMnJwmG7seGtZQ",
  authDomain: "web-assist-ru.firebaseapp.com",
  projectId: "web-assist-ru",
  storageBucket: "web-assist-ru.appspot.com",
  messagingSenderId: "556136000932",
  appId: "1:556136000932:web:ce86ff972aae5aa7656531",
  measurementId: "G-RXW8LJFQ7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth, signInWithEmailAndPassword };