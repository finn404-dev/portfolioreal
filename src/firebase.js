// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlRSJsynZeksdsowR5K2bD1_XjvxqErc4",
  authDomain: "tevada123-873ad.firebaseapp.com",
  projectId: "tevada123-873ad",
  storageBucket: "tevada123-873ad.firebasestorage.app",
  messagingSenderId: "608980845399",
  appId: "1:608980845399:web:302510ea56d0d6612e3412"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
