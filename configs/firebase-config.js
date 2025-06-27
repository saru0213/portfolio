import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCYYsJ2tjWIZX_N0fk_szbWyvd3X0wdDqY",
    authDomain: "jobpreparation-b81d9.firebaseapp.com",
    projectId: "jobpreparation-b81d9",
    storageBucket: "jobpreparation-b81d9.firebasestorage.app",
    messagingSenderId: "49239751821",
    appId: "1:49239751821:web:bbd21ff3d20c15ef57f6c4",
    measurementId: "G-5BWE4ETLMX"
  };
  const app=initializeApp(firebaseConfig);
  const db=getFirestore(app);
  export const auth = getAuth(app);
  export { db };
