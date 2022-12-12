import { initializeApp, } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { collection, getDocs, getFirestore, doc, getDoc} from 'firebase/firestore'

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
const db = getFirestore(app);

const mainItemsCol = collection(db, "category");
const productsCol = collection(db, 'products');
const ordersCol = collection(db, 'orders');


const auth = getAuth(app);

export {
        db, mainItemsCol, auth,
        productsCol, ordersCol
      }