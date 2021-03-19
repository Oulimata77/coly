
import firebase from 'firebase/app';
import 'firebase/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAz9lGzagf0SvOuSzj1dr5IMEV5XV3ldug",
    authDomain: "ocean-f8e1d.firebaseapp.com",
    projectId: "ocean-f8e1d",
    storageBucket: "ocean-f8e1d.appspot.com",
    messagingSenderId: "160032021879",
    appId: "1:160032021879:web:fb93e638ea929662f95572",
    measurementId: "G-DM136SPFLS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();