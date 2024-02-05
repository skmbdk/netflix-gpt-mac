// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAz4YHKqWHd2K3t_TUlvrnOdprcm7wmlRY",
  authDomain: "netflixgpt-4045a.firebaseapp.com",
  projectId: "netflixgpt-4045a",
  storageBucket: "netflixgpt-4045a.appspot.com",
  messagingSenderId: "507091871937",
  appId: "1:507091871937:web:d045b89c6d3a7727aacc40",
  measurementId: "G-YWHRRDF7R5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();