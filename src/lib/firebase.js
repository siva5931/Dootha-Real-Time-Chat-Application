import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactfire-chat-9f653.firebaseapp.com",
  projectId: "reactfire-chat-9f653",
  storageBucket: "reactfire-chat-9f653.appspot.com",
  messagingSenderId: "792948184524",
  appId: "1:792948184524:web:e17d95b77c247d80d4b969"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
