// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'blog-mern-77bd6.firebaseapp.com',
  projectId: 'blog-mern-77bd6',
  storageBucket: 'blog-mern-77bd6.appspot.com',
  messagingSenderId: '559941782699',
  appId: '1:559941782699:web:c4b4eb02695b612c64bbee',
  measurementId: "G-ZDYEMRRJKE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
