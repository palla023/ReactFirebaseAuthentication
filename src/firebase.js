import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDo8EkWnk_L6uVmFxTCvmbHu6FgAcARwFs",
  authDomain: "auth-2f1da.firebaseapp.com",
  projectId: "auth-2f1da",
  storageBucket: "auth-2f1da.appspot.com",
  messagingSenderId: "1046183110776",
  appId: "1:1046183110776:web:d523739d8a3a368ff9a58d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();        //for storing the DataBase
  const auth = firebase.auth();           //for authentication Process

  //Firstly we have intialised db and auth and now we have to export that
  export {auth};
  export default db;