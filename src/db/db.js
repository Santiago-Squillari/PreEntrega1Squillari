import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsrzFuWhBRXWYO3PItVImGQQ7YdtdrC4E",
  authDomain: "ecommerce-ss-83c77.firebaseapp.com",
  projectId: "ecommerce-ss-83c77",
  storageBucket: "ecommerce-ss-83c77.appspot.com",
  messagingSenderId: "601202953263",
  appId: "1:601202953263:web:9ac6d03cdb3ff58daa4ada"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export default db