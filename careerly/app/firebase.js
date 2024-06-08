// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFUatPIDMDjREmTi7Q0t7xmxGLRLUsHKI",
  authDomain: "careerly-hackprix.firebaseapp.com",
  projectId: "careerly-hackprix",
  storageBucket: "careerly-hackprix.appspot.com",
  messagingSenderId: "589685551780",
  appId: "1:589685551780:web:918860fa370d2810cd6c31",
  measurementId: "G-H323R9DBK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
