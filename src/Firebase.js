// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-H3Z1ktKeKQOK8ZfbsYuU43b5btj-7rM",
  authDomain: "dsestarchaser.firebaseapp.com",
  projectId: "dsestarchaser",
  storageBucket: "dsestarchaser.appspot.com",
  messagingSenderId: "546413067401",
  appId: "1:546413067401:web:d0f33ece785c2f01cb9a58",
  measurementId: "G-BJJTFMQJTQ",
};
// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export {firebase};
