import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, push, set } from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyAOO806Q9YNr_6XL_NiLTfMYl-k3j0Fmmg",
    authDomain: "clonesnew.firebaseapp.com",
    projectId: "clonesnew",
    storageBucket: "clonesnew.appspot.com",
    messagingSenderId: "327370414003",
    appId: "1:327370414003:web:5c29bc8cb4573401739dc6"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();
export default auth