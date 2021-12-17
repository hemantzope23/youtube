// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvzI19wd4OFjFMD4y1E0lm3AGX4PGlMFY",
  authDomain: "yt-2525.firebaseapp.com",
  projectId: "yt-2525",
  storageBucket: "yt-2525.appspot.com",
  messagingSenderId: "1025528414769",
  appId: "1:1025528414769:web:b1115d140bce416adccb10",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
