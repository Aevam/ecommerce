let email = document.getElementById("email");
let password = document.getElementById("password");
let submit = document.getElementById("submit");
// let signin_email = document.getElementById("signin-email");
// let signin_password = document.getElementById("signin-password");
// let signin_submit = document.getElementById("signin-submit");
let google_signin = document.getElementById("google-signin");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrtGyJNp8m7FPvTthdZsP1mUwoXwEfpsA",
  authDomain: "e-commerce-web-433c5.firebaseapp.com",
  projectId: "e-commerce-web-433c5",
  storageBucket: "e-commerce-web-433c5.appspot.com",
  messagingSenderId: "638948613495",
  appId: "1:638948613495:web:82c5a1ca393b75bddd1572",
  measurementId: "G-QQYSWHLW3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const provider = new GoogleAuthProvider();


submit.addEventListener("click", function () {
  let emval = email.value;
  let pasval = password.value;
  if (emval != "" && pasval != "") {
    console.log(emval)
    console.log(pasval)
    createUserWithEmailAndPassword(auth, emval, pasval)
      .then((userCredential) => {
        // New user signed up
        const user = userCredential.user;
        console.log('User:', user);
        alert("Thanks for signing up. We will contact you shortly.")
      })
      .catch((error) => {
        // Handle error
        console.log('Error:', error.message);
        alert("This account is already signed up.")
      });
  }
  else {
    alert("Fill all the fields")
  }
})

// console.log("this part is reached")

// signin_submit.addEventListener("click", function () {
//   console.log("clicked1")
//   let signin_emval = signin_email.value;
//   let signin_pasval = signin_password.value;
//   if (signin_emval != "" && signin_pasval != "") {
//     console.log(signin_emval)
//     console.log(signin_pasval)

//     signInWithEmailAndPassword(auth, signin_emval, signin_pasval)
//       .then((userCredential) => {
//         // User signed in
//         const user = userCredential.user;
//         console.log('User:', user);
//       })
//       .catch((error) => {
//         // Handle error
//         console.log('Error:', error.message);
//       });
//   }
// })


google_signin.addEventListener("click", function () {
  console.log("clicked")
  signInWithPopup(auth, provider)
    .then((result) => {
      // User signed in with Google
      const user = result.user;
      console.log('User:', user);
      alert("Signed Up!")
    })
    .catch((error) => {
      // Handle error
      console.log('Error:', error.message);
      alert("An unknown occupied")
    });
})