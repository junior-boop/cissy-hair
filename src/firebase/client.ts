import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAdxvneOb5LgD1dknGL9JlE9u9lB7SUnMg",
    authDomain: "cissy-promotion.firebaseapp.com",
    projectId: "cissy-promotion",
    storageBucket: "cissy-promotion.appspot.com",
    messagingSenderId: "623793458239",
    appId: "1:623793458239:web:c0d81a052637f409adfc8a"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app)