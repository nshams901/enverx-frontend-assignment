// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'

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
  measurementId: "G-6M8SRJEYR3",
  databaseURL: "https://expense-tracker-3177f-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
