// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa7sLtYSDHgd4PH_PK92Hessa_dtSXFzA",
  authDomain: "security-e2a5b.firebaseapp.com",
  projectId: "security-e2a5b",
  storageBucket: "security-e2a5b.appspot.com",
  messagingSenderId: "570454249919",
  appId: "1:570454249919:web:95d598e4e05fd1f7dfd10a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
