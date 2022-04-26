// firebase.js
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDvoCdGA74pWTJyWNU4lUB6Aa7FURQOslA",
  authDomain: "project-3-react-api.firebaseapp.com",
  databaseURL: "https://project-3-react-api-default-rtdb.firebaseio.com",
  projectId: "project-3-react-api",
  storageBucket: "project-3-react-api.appspot.com",
  messagingSenderId: "775134679517",
  appId: "1:775134679517:web:0607f8a265a1f7e6a5e634",
};

// setting a variable that initializes our application
const firebase = initializeApp(firebaseConfig);
// this exports the CONFIGURED version of firebase
export default firebase;
