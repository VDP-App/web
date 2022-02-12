import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBf7STnsKahNEzWaRW0B3mR21gqvuQNepY",
  authDomain: "vdp-production-40318.firebaseapp.com",
  databaseURL:
    "https://vdp-production-40318-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vdp-production-40318",
  storageBucket: "vdp-production-40318.appspot.com",
  messagingSenderId: "739874571718",
  appId: "1:739874571718:web:6d0bde7cc3b3c2d9021ec7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
