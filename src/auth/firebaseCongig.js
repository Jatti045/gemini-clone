// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjQuzB58Vn8i030rB89IXhdUWREHF1wVQ",
  authDomain: "gemini-clone-9e34e.firebaseapp.com",
  projectId: "gemini-clone-9e34e",
  storageBucket: "gemini-clone-9e34e.firebasestorage.app",
  messagingSenderId: "47199591598",
  appId: "1:47199591598:web:5683a015ad36c2f7e1613f",
  measurementId: "G-GNTWRH696H",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
