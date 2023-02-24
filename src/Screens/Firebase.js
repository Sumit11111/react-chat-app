import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBDTpkzb92l5DqUJQDTrweTXevZzg-mZ_k",
    authDomain: "messenger-a0190.firebaseapp.com",
    projectId: "messenger-a0190",
    storageBucket: "messenger-a0190.appspot.com",
    messagingSenderId: "135551989503",
    appId: "1:135551989503:web:dd6fabc2706f1b1aea7eca"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };
