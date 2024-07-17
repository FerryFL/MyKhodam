// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCu_k_kzupGuqsKl1DMT8pdFp60ZpxnES0",
    authDomain: "mykhodam-e7e20.firebaseapp.com",
    projectId: "mykhodam-e7e20",
    storageBucket: "mykhodam-e7e20.appspot.com",
    messagingSenderId: "781271553278",
    appId: "1:781271553278:web:4ba2b6ed96ec41020681af",
    measurementId: "G-R9YD32C53Y"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };