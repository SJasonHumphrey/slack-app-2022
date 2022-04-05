// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdxaT_RTjqblOQB4k5KvUQkUF2kdRCU6Q",
  authDomain: "react-slack-9862d.firebaseapp.com",
  databaseURL: "https://react-slack-9862d-default-rtdb.firebaseio.com",
  projectId: "react-slack-9862d",
  storageBucket: "react-slack-9862d.appspot.com",
  messagingSenderId: "28797851313",
  appId: "1:28797851313:web:449af65dca53de03e9f490"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;