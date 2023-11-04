import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
  

  const firebaseConfig = {
    apiKey: "AIzaSyBx-mBoTzLIQ1DKmRTA6M2WqKYh9fEB1hw",
    authDomain: "homeloginsignup-2d60f.firebaseapp.com",
    projectId: "homeloginsignup-2d60f",
    storageBucket: "homeloginsignup-2d60f.appspot.com",
    messagingSenderId: "614418935452",
    appId: "1:614418935452:web:fc2dc13653f5c9b95c4759",
    measurementId: "G-68N0GTE6E6"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let btn = document.getElementById('sbtn')
btn.addEventListener('click', () => {
    let email = document.getElementById('semail').value
    let password = document.getElementById('spass').value
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
});
 

     