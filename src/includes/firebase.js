import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0Rz5oxau_AVgfGu4odYeUxixJnnIC6v4',
  authDomain: 'music-app-cb7ab.firebaseapp.com',
  projectId: 'music-app-cb7ab',
  storageBucket: 'music-app-cb7ab.appspot.com',
  appId: '1:915084093977:web:308de5b84f9cedd62b1888',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');
const songsCollection = db.collection('songs');

export {
  auth,
  db,
  storage,
  usersCollection,
  songsCollection,
};
