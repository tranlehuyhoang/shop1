import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAOO806Q9YNr_6XL_NiLTfMYl-k3j0Fmmg",
    authDomain: "clonesnew.firebaseapp.com",
    projectId: "clonesnew",
    storageBucket: "clonesnew.appspot.com",
    messagingSenderId: "327370414003",
    appId: "1:327370414003:web:5c29bc8cb4573401739dc6"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Add a new price to the "prices" node
const addPrice = (time, price, user) => {
    const priceRef = database.ref(`lichsu/${time}`);
    priceRef.set({
        price: price,
        user: user
    });
};

// Update the price with the specified time
const updatePrice = (time, price) => {
    const priceRef = database.ref(`prices/${time}`);
    priceRef.update({
        price: price
    });
};

// Add a new user to the "users" node
const addUser = (userId, name) => {
    const userRef = database.ref(`users/${userId}`);
    userRef.set({
        name: name
    });
};

// Update the user with the specified ID
const updateUser = (userId, name) => {
    const userRef = database.ref(`users/${userId}`);
    userRef.update({
        name: name
    });
};

export { addPrice, updatePrice, addUser }