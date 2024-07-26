// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "scribesynapse.firebaseapp.com",
  projectId: "scribesynapse",
  storageBucket: "scribesynapse.appspot.com",
  messagingSenderId: "1071329988482",
  appId: "1:1071329988482:web:be593626db0ccb80cb899b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
