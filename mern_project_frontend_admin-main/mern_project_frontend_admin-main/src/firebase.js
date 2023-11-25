// // // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCothhqcm759qd3U-rKtIZicEph5Sl3aOY",
    authDomain: "quizusers-424b1.firebaseapp.com",
    projectId: "quizusers-424b1",
    storageBucket: "quizusers-424b1.appspot.com",
    messagingSenderId: "929049277440",
    appId: "1:929049277440:web:3de23f86af25ebb3eb14e5"
};

// // // Initialize Firebase
//  const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyClNjGNH_5IGMWPueM9mD_7SYlAyn_dwKA",
//   authDomain: "quizadmin-ba9e3.firebaseapp.com",
//   projectId: "quizadmin-ba9e3",
//   storageBucket: "quizadmin-ba9e3.appspot.com",
//   messagingSenderId: "991548138551",
//   appId: "1:991548138551:web:e7652d166ce3952c644bb2"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export default app;