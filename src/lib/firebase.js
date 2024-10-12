import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-34e27.firebaseapp.com",
  projectId: "reactchat-34e27",
  storageBucket: "reactchat-34e27.appspot.com",
  messagingSenderId: "951310510692",
  appId: "1:951310510692:web:b50c13c852633234a7cd71"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()