import { initializeApp } from 'firebase/app';

import {
  getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFOOh-0nv_ZTb0BIEjQc74dr5nPXE6C9A",
    authDomain: "todo-list-react-21bae.firebaseapp.com",
    projectId: "todo-list-react-21bae",
    storageBucket: "todo-list-react-21bae.appspot.com",
    messagingSenderId: "485895907300",
    appId: "1:485895907300:web:d0f235d297f62a56ba49f1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db