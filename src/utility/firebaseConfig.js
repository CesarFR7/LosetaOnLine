// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL1QolPC63ikhZCigwaTJBToyzBSpiKRE",
  authDomain: "losetaonline.firebaseapp.com",
  projectId: "losetaonline",
  storageBucket: "losetaonline.firebasestorage.app",
  messagingSenderId: "678377956442",
  appId: "1:678377956442:web:ec972013d3f26a3093e463"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app as firebaseApp}