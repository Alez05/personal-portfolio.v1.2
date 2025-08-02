// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhZCQso3nOU1MBwU1NdP6roRQ4zyZXvzE",
  authDomain: "personal-portfolio-2bc1e.firebaseapp.com",
  projectId: "personal-portfolio-2bc1e",
  storageBucket: "personal-portfolio-2bc1e.firebasestorage.com",
  messagingSenderId: "1008172091726",
  appId: "1:1008172091726:web:7d4170320daf8083f3f61f",
  measurementId: "G-G9KNK2SP8R"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

const storage = getStorage(app)

export { app, storage }
