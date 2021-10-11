// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcd0unxi7VkaO8TClbRpefQcYquMOB0Eo",
  authDomain: "fir-authmidterm.firebaseapp.com",
  projectId: "fir-authmidterm",
  storageBucket: "fir-authmidterm.appspot.com",
  messagingSenderId: "352311421227",
  appId: "1:352311421227:web:62109b1d63fc11762b3d6e",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const auth = firebase.auth();
export { auth };
