// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4dpaXDZH7bXEDSwcUUiIAn0O72rCI3J0",
  authDomain: "geekster-7d29f.firebaseapp.com",
  projectId: "geekster-7d29f",
  storageBucket: "geekster-7d29f.appspot.com",
  messagingSenderId: "187202141680",
  appId: "1:187202141680:web:c8f0f72023f38e42b4b135",
  measurementId: "G-YBFVZRD7K7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
// const analytics = getAnalytics(app);