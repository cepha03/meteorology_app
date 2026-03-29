// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKaj9UrNHhwSmzvM0Zta4mznhu5OaYRs4",
  authDomain: "synoptic-app-d80bb.firebaseapp.com",
  projectId: "synoptic-app-d80bb",
  storageBucket: "synoptic-app-d80bb.firebasestorage.app",
  messagingSenderId: "536260549224",
  appId: "1:536260549224:web:e62ff0d8218348b1f779dd",
  measurementId: "G-1QD1NWM7RK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);