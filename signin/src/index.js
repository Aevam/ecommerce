let signin_email = document.getElementById("signin-email");
let signin_password = document.getElementById("signin-password");
let signin_submit = document.getElementById("signin-submit");
let google_signin = document.getElementById("google-signin");

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDrtGyJNp8m7FPvTthdZsP1mUwoXwEfpsA",
    authDomain: "e-commerce-web-433c5.firebaseapp.com",
    projectId: "e-commerce-web-433c5",
    storageBucket: "e-commerce-web-433c5.appspot.com",
    messagingSenderId: "638948613495",
    appId: "1:638948613495:web:82c5a1ca393b75bddd1572",
    measurementId: "G-QQYSWHLW3T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

signin_submit.addEventListener("click", function () {
  console.log("clicked1")
  let signin_emval = signin_email.value;
  let signin_pasval = signin_password.value;
  if (signin_emval != "" && signin_pasval != "") {
    console.log(signin_emval)
    console.log(signin_pasval)

    signInWithEmailAndPassword(auth, signin_emval, signin_pasval)
      .then((userCredential) => {
        // User signed in
        const user = userCredential.user;
        console.log('User:', user);
        alert("Signed In")
      })
      .catch((error) => {
        // Handle error
        console.log('Error:', error.message);
        alert("Wrong email or password")
      });
  }
})

google_signin.addEventListener("click", function () {
  console.log("clicked")
  signInWithPopup(auth, provider)
    .then((result) => {
      // User signed in with Google
      const user = result.user;
      console.log('User:', user);
      alert("Signed In!")
    })
    .catch((error) => {
      // Handle error
      console.log('Error:', error.message);
      alert("An unknown occupied")
    });
})