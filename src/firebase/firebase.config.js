// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDodDI00T_g3IY_-s9o3kM9H37PIhtm-bE",
  authDomain: "glass-ff467.firebaseapp.com",
  projectId: "glass-ff467",
  storageBucket: "glass-ff467.appspot.com",
  messagingSenderId: "552445863990",
  appId: "1:552445863990:web:825458caa563d4a2b11097"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;