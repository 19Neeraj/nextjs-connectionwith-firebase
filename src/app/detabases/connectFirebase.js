// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_MESSAGING_SENDERID,
  appId: process.env.NEXT_PUBLIC_API_ID,
  measurementId:process.env.NEXT_PUBLIC_MEASUREMENID,
};

// Initialize Firebase
console.log(process.env.NEXT_PUBLIC_API_KEY);

const app = initializeApp(firebaseConfig);

export { app };
