import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBHKHLK_EmhyeKqgr8toNsOIl8kVLXvrn8",
  authDomain: "klockner-rn.firebaseapp.com",
  projectId: "klockner-rn",
  storageBucket: "klockner-rn.appspot.com",
  messagingSenderId: "392518270380",
  appId: "1:392518270380:web:2d848830d555b1828ece09",
  measurementId: "G-T8DWFR89MB",
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}