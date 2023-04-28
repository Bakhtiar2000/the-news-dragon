// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvuk75EXLaZtT9Hi8E0RnGK4imcTUroxI",
  authDomain: "the-news-dragon-adff1.firebaseapp.com",
  projectId: "the-news-dragon-adff1",
  storageBucket: "the-news-dragon-adff1.appspot.com",
  messagingSenderId: "1091135823614",
  appId: "1:1091135823614:web:14f5962d1f5e1c4efe0faf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;