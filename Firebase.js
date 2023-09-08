import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW2Mmyxfg_ZM8H66oqG4mw9KyPhLJWbUI",
  authDomain: "booking-app-9fc2b.firebaseapp.com",
  projectId: "booking-app-9fc2b",
  storageBucket: "booking-app-9fc2b.appspot.com",
  messagingSenderId: "177377304940",
  appId: "1:177377304940:web:a1ce2dca4c6cfc65ce9349"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = initializeFirestore(app, {
experimentalForceLongPolling: true
})

export { db, auth };