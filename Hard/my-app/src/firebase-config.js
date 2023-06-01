// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3YVsEJeAb4L8r1SUgH2Ei4TJ6dqFlOWU",
  authDomain: "chat-app-53735.firebaseapp.com",
  projectId: "chat-app-53735",
  storageBucket: "chat-app-53735.appspot.com",
  messagingSenderId: "144179338638",
  appId: "1:144179338638:web:13e899eae013060eec18df"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();