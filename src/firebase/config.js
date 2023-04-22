import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAOO806Q9YNr_6XL_NiLTfMYl-k3j0Fmmg",
    authDomain: "clonesnew.firebaseapp.com",
    projectId: "clonesnew",
    storageBucket: "clonesnew.appspot.com",
    messagingSenderId: "327370414003",
    appId: "1:327370414003:web:5c29bc8cb4573401739dc6"
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth