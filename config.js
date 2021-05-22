import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCpYRVDec4pdU08KG9rs8MrgYzuWdVQFaM",
    authDomain: "attendance-app-2-b218f.firebaseapp.com",
    projectId: "attendance-app-2-b218f",
    storageBucket: "attendance-app-2-b218f.appspot.com",
    messagingSenderId: "539945216397",
    appId: "1:539945216397:web:e7880e3d0d20c7c2f8b5c4",
    measurementId: "G-F7TZH7RRBG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  
  export default firebase.database