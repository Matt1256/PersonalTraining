import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDxI7ZxWv4fceuhNQPLIcNxIIWXMVZ1idw",
    authDomain: "trainer-3b2a4.firebaseapp.com",
    databaseURL: "https://trainer-3b2a4.firebaseio.com",
    projectId: "trainer-3b2a4",
    storageBucket: "",
    messagingSenderId: "44145106005",
    appId: "1:44145106005:web:2a1c0e6afa609409"
  };

  export const fb = firebase.initializeApp(firebaseConfig);

