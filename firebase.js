import * as firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { Alert } from 'react-native';

const firebaseConfig = {
    apiKey: "AIzaSyBM3ru67vuBMxnQEb0smbTf6KD31sgH7w4",
    authDomain: "akiasiankitchen-7a799.firebaseapp.com",
    projectId: "akiasiankitchen-7a799",
    storageBucket: "akiasiankitchen-7a799.appspot.com",
    messagingSenderId: "437039282480",
    appId: "1:437039282480:web:421af1075173e5e21db0f5",
    measurementId: "G-VK3PFCKK0Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {auth};
export default db;