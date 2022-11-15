import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import Constants from "expo-constants"
import "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBHKHLK_EmhyeKqgr8toNsOIl8kVLXvrn8",
  authDomain: "klockner-rn.firebaseapp.com",
  projectId: "klockner-rn",
  storageBucket: "klockner-rn.appspot.com",
  messagingSenderId: "392518270380",
  appId: "1:392518270380:web:2d848830d555b1828ece09",
  measurementId: "G-T8DWFR89MB",
  
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig)
const firestore = getFirestore();
export default {firebase, firestore}