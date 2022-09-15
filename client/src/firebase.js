// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRty4Ak1qpbok2ewv9UJnbLA-cOGrze_k",
  authDomain: "memories-f6e98.firebaseapp.com",
  projectId: "memories-f6e98",
  storageBucket: "memories-f6e98.appspot.com",
  messagingSenderId: "11758435603",
  appId: "1:11758435603:web:fbd1dde6ea300428b4eee6",
  measurementId: "G-Q9WBYJF9QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)