// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: `AIzaSyBchmgPgf8c3SOFHVJUT-5-Dgk36yLLnmo`,
  authDomain: "hotel-cc32c.firebaseapp.com",
  projectId: "hotel-cc32c",
  storageBucket: "hotel-cc32c.appspot.com",
  messagingSenderId: "273695313891",
  appId: "1:273695313891:web:3ca271da9751ef90e71ad6",
  measurementId: "G-M644K7P15V"
};
console.log('lee',`${import.meta.env.API_KEY}`)
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db}