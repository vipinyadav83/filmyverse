
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAdrw_-4HtJG4Ivwb461oOukO5ovTcPwRw",
  authDomain: "filmyverse-a2947.firebaseapp.com",
  projectId: "filmyverse-a2947",
  storageBucket: "filmyverse-a2947.appspot.com",
  messagingSenderId: "227604336659",
  appId: "1:227604336659:web:137cb1776414f2dce4efe6"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app;;