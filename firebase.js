// Import the functions you need from the SDKs you need
import firebase from 'firebase';
// import 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOsBTxeonQRTrjETtQGJh3HmbE4FhcWZI",
  authDomain: "pullup-e7315.firebaseapp.com",
  projectId: "pullup-e7315",
  storageBucket: "pullup-e7315.appspot.com",
  messagingSenderId: "305864516181",
  appId: "1:305864516181:web:7793f66f7b5ca6e29e6adc"
};


!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()


const db = firebase.firestore()


export {firebase, db }