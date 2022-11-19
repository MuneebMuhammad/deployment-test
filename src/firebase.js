import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCKjoMq2fiqJ28b3pQlk8aVd0zM4W2a0w0",
    authDomain: "wired-height-323805.firebaseapp.com",
    projectId: "wired-height-323805",
    storageBucket: "wired-height-323805.appspot.com",
    messagingSenderId: "228526383994",
    appId: "1:228526383994:web:5520a8c7a573abfa30ecc3",
    measurementId: "G-XGWBVQ917Z"
  };

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage();