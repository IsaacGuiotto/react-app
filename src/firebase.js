import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7tV24_E3i7dtM5KnWFMZf08iMWuXFXQw",
    authDomain: "react-project-9c203.firebaseapp.com",
    projectId: "react-project-9c203",
    storageBucket: "react-project-9c203.firebasestorage.app",
    messagingSenderId: "582197844472",
    appId: "1:582197844472:web:0ac47f2e0b761c1dfcde0d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);