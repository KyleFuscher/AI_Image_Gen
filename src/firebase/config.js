import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrRvU1BDUsCHMoB0l6_i8TZ8aW7af36sI",
  authDomain: "resume-cover-letter-1.firebaseapp.com",
  projectId: "resume-cover-letter-1",
  storageBucket: "resume-cover-letter-1.firebasestorage.app",
  messagingSenderId: "790884869904",
  appId: "1:790884869904:web:966a1e31e9b542ffbca795",
  measurementId: "G-0XJEXN69RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
