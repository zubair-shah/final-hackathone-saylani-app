import * as firebase from '@firebase/app';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1OBw5r6WGOQsRg-l7xwQ0BwvjHYlDrAw",
  authDomain: "sfhackathone.firebaseapp.com",
  projectId: "sfhackathone",
  storageBucket: "sfhackathone.appspot.com",
  messagingSenderId: "783823220426",
  appId: "1:783823220426:web:969a370708f42fd6e10e33",
  measurementId: "G-K8KLE93NNR",
   databaseURL: 'https://sfhackathone-default-rtdb.firebaseio.com/',
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {
  firebase,
  db,
  auth,
  addDoc,
  collection,
  doc,
  getDocs,
  setDoc,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
