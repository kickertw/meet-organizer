// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
//import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAq2sjoP1fIdGUmt0WEF5AQKu8djBI0IV4",
  authDomain: "meet-organizer-f509b.firebaseapp.com",
  projectId: "meet-organizer-f509b",
  storageBucket: "meet-organizer-f509b.appspot.com",
  messagingSenderId: "717740964062",
  appId: "1:717740964062:web:4c207564699e4cb4096a4f",
  measurementId: "G-94FQPBD4D8",
  databaseURL: "https://meet-organizer-f509b-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

// Read
const readDb = (query, callback) => {
    const queryRef = ref(db, query);
    onValue(queryRef, (snapshot) => {
        const data = snapshot.val();
        callback(data);
    });
}

export {
    readDb
}
