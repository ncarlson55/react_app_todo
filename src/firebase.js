import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAeOCowXGMizB43Q-2cQQnSGiAfGFhFVyU",
  authDomain: "todo-app-cp-e0be7.firebaseapp.com",
  projectId: "todo-app-cp-e0be7",
  storageBucket: "todo-app-cp-e0be7.appspot.com",
  messagingSenderId: "37775853437",
  appId: "1:37775853437:web:69831b134fa196e2d5ee14",
  measurementId: "G-MZ3SL58X12",
});

const db = firebaseApp.firestore();

export default db;
