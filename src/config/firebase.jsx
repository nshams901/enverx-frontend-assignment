// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCd8XJFp0TWSxz7Mqkg5bt2K7F5mR8qoV8",
  authDomain: "expense-tracker-3177f.firebaseapp.com",
  projectId: "expense-tracker-3177f",
  storageBucket: "expense-tracker-3177f.appspot.com",
  messagingSenderId: "404555368441",
  appId: "1:404555368441:web:5b9f0f13062caf368e9f28",
  measurementId: "G-6M8SRJEYR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
