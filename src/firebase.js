// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGeG4TmPi8YRAv61ugivJYnO8y8NtyG8o",
  authDomain: "realtor-clone-fe3fd.firebaseapp.com",
  projectId: "realtor-clone-fe3fd",
  storageBucket: "realtor-clone-fe3fd.appspot.com",
  messagingSenderId: "477590803965",
  appId: "1:477590803965:web:e7833c626ca8e8b82b7594"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db= getFirestore();


