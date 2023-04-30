import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import { useSelector } from 'react-redux';
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
// lấy tất cả  lịch sử chuyển khoản gồm {amount: amount,trangthai: false, timestamp: timestamp}
// thêm  lịch sử chuyển khoản gồm {amount: amount,trangthai: false, timestamp: timestamp}
// sửa trangthai của lịch sử chuyển khoản thành true
// thêm user gồm {balance: amount,userId: userId}
// lấy user theo userId gồm {balance: amount,userId: userId}
// sửa balance của user
// thêm hóa đơn gồm {userId: userId,timestamp: timestamp,price: price,quantity: quantity,productName: productName}
// lấy tất cả  hóa đơn gồm {userId: userId,timestamp: timestamp,price: price,quantity: quantity,productName: productName}
export const getAllTransactions = () => {
    return new Promise((resolve, reject) => {
        database.ref('transactions').once('value')
            .then((snapshot) => {
                const transactions = [];
                snapshot.forEach((childSnapshot) => {
                    const transaction = childSnapshot.val();
                    transactions.push({

                        amount: transaction.amount,
                        trangthai: transaction.trangthai,
                        userid: transaction.userid,
                        timestamp: transaction.timestamp
                    });
                });
                resolve(transactions);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const addTransaction = (amount, timestamp, userid) => {
    const transactionRef = database.ref(`transactions/${timestamp}`);
    return transactionRef.once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                return; // Node đã tồn tại, không thực hiện thêm bất kỳ thao tác nào
            } else {
                const transactionData = {
                    amount: amount,
                    trangthai: false,
                    userid: userid,
                    timestamp: timestamp
                };
                return transactionRef.set(transactionData); // Thêm node mới
            }
        });

};
export const updateTransactionStatus = (transactionId) => {
    const transactionRef = database.ref(`transactions/${transactionId}`);
    return transactionRef.update({ trangthai: true });
};
export const addUser = (userId, amount) => {
    const userRef = database.ref(`users/${userId}`);
    return userRef.once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                return; // Node đã tồn tại, không thực hiện thêm bất kỳ thao tác nào
            } else {
                const userData = {
                    balance: amount,
                    userId: userId
                };
                return userRef.set(userData); // Thêm node mới
            }
        });
};
export const getUserById = (userId) => {
    return new Promise((resolve, reject) => {
        database.ref(`users/${userId}`).once('value')
            .then((snapshot) => {
                const user = snapshot.val();
                resolve(user);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const updateUserBalance = (userId, currentBalance, amountToAdd) => {
    const newBalance = currentBalance + amountToAdd;
    if (newBalance < 0) {
        console.log(newBalance)
        return
    } else {

        const userRef = database.ref(`users/${userId}`);
        return userRef.update({ balance: newBalance });
    }
};
export const addInvoice = (userId, timestamp, price, quantity, productName) => {
    const invoiceRef = database.ref(`invoices/${timestamp}`);
    return invoiceRef.once('value')
        .then((snapshot) => {
            if (snapshot.exists()) {
                return;
            } else {
                const invoiceData = {
                    userId: userId,
                    timestamp: timestamp,
                    price: price,
                    quantity: quantity,
                    productName: productName
                };
                return invoiceRef.set(invoiceData);
            }
        });

};

export const getAllInvoices = () => {
    return new Promise((resolve, reject) => {
        database.ref('invoices').once('value')
            .then((snapshot) => {
                const invoices = [];
                snapshot.forEach((childSnapshot) => {
                    const invoice = childSnapshot.val();
                    invoices.push({
                        userId: invoice.userId,
                        timestamp: invoice.timestamp,
                        price: invoice.price,
                        quantity: invoice.quantity,
                        productName: invoice.productName
                    });
                });
                resolve(invoices);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const getAllProducts = () => {
    return new Promise((resolve, reject) => {
        database.ref('products').once('value')
            .then((snapshot) => {
                const products = [];
                snapshot.forEach((childSnapshot) => {
                    const product = childSnapshot.val();
                    products.push({

                        name: product.name,
                        price: product.price
                    });
                });
                resolve(products);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
export const createProduct = (productId, name, price) => {
    const productRef = database.ref(`products/${productId}`);
    return productRef.once('value')

        .then((snapshot) => {
            if (snapshot.exists()) {
                return;
            } else {
                const productData = {
                    name: name,
                    price: price
                };
                return productRef.set(productData);
            }
        });
};

