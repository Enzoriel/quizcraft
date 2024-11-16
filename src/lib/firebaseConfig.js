import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx_t_yDI6HxefNTuCDnEtIca3WvMvMuKE",
  authDomain: "futquiz-aa0d2.firebaseapp.com",
  projectId: "futquiz-aa0d2",
  storageBucket: "futquiz-aa0d2.firebasestorage.app",
  messagingSenderId: "463244247567",
  appId: "1:463244247567:web:c13fa0bdb5f107ef5c197a",
  measurementId: "G-M124GVPHTN",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
