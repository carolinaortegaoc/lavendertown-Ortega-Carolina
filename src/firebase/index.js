import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTkk-H5fQvH_zE6L6oX8NrkHVIjBOKZUs",
    authDomain: "lavendertown-ecommerce.firebaseapp.com",
    projectId: "lavendertown-ecommerce",
    storageBucket: "lavendertown-ecommerce.appspot.com",
    messagingSenderId: "422986867156",
    appId: "1:422986867156:web:d99c73b7eade430aa7f641"
};

const app = initializeApp(firebaseConfig);

export const getFirebase = () => app;

export { getFirestore };