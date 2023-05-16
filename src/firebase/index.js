import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxkHY0fBXMUn8TKEB-KQ9UM-DZ_wG-Y4I",
  authDomain: "chatbot-3159a.firebaseapp.com",
  projectId: "chatbot-3159a",
  storageBucket: "chatbot-3159a.appspot.com",
  messagingSenderId: "778623683258",
  appId: "1:778623683258:web:a3d50847b030a67d5b5083",
  measurementId: "G-630T1J2RR8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };