import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnlmee9zGRqwGVU-JqLDVxZojbuqAu1sk",
    authDomain: "graspapp-8cfb9.firebaseapp.com",
    projectId: "graspapp-8cfb9",
    storageBucket: "graspapp-8cfb9.appspot.com",
    messagingSenderId: "965283752702",
    appId: "1:965283752702:web:5b9204494eb0b131a293af"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();


  export { db, auth };