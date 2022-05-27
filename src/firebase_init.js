// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvUIDWmLNq2NNIoOB6cJ_1fPOcwM3dfos",
  authDomain: "falcon-car-parts-manufacturer.firebaseapp.com",
  projectId: "falcon-car-parts-manufacturer",
  storageBucket: "falcon-car-parts-manufacturer.appspot.com",
  messagingSenderId: "664071907560",
  appId: "1:664071907560:web:f5bdd799dd66c7adfe015d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth