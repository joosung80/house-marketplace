import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAaq9Zau1lmmQCduY7Vw8y0g1mJ_Md3ou8",
  authDomain: "housemarkettest.firebaseapp.com",
  projectId: "housemarkettest",
  storageBucket: "housemarkettest.appspot.com",
  messagingSenderId: "158476907826",
  appId: "1:158476907826:web:2f9408274a23b9bb39132b",
  measurementId: "G-F596BNR38Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore()