import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDlL3gNchy_ACMDZs51c7fEgKxOlcl6gdA",
    authDomain: "say-something-bc9db.firebaseapp.com",
    projectId: "say-something-bc9db",
    storageBucket: "say-something-bc9db.appspot.com",
    messagingSenderId: "229547371699",
    appId: "1:229547371699:web:271827c8d385f372cb14c6"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firestore = firebase.firestore()


  export{
      firestore
  }