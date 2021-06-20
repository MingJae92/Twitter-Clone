import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBnIk1OTrWPp5lpvvCjbzW8WLGgTu99fMA",
    authDomain: "api-project-273221.firebaseapp.com",
    projectId: "api-project-273221",
    storageBucket: "api-project-273221.appspot.com",
    messagingSenderId: "876976560710",
    appId: "1:876976560710:web:3970b0ac049e0c4cd88847",
    measurementId: "G-P5RGPDSZWR"
  };

  const firebassApp = firebase.initializeApp(firebaseConfig);

  const db = firebassApp.firestore();

  export default db;
  