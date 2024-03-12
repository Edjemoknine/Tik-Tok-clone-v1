import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBeTmc8kHv9SBkYZvG35AA_tWonlvGj_nY",
  authDomain: "tik-tok-clone-49dc1.firebaseapp.com",
  projectId: "tik-tok-clone-49dc1",
  storageBucket: "tik-tok-clone-49dc1.appspot.com",
  messagingSenderId: "352710678017",
  appId: "1:352710678017:web:188db8bb64271d5adb9200",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
