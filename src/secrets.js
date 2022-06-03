// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYJCfM9GxkD-Lh1RwlfY64Ulr8ZtgbElg",
  authDomain: "barro-rojo-d83a7.firebaseapp.com",
  projectId: "barro-rojo-d83a7",
  storageBucket: "barro-rojo-d83a7.appspot.com",
  messagingSenderId: "59436789480",
  appId: "1:59436789480:web:fb206b306ae9bdefff635d",
  measurementId: "G-Z200EVZQ0M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);