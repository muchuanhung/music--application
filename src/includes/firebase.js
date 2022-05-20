import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA0Rz5oxau_AVgfGu4odYeUxixJnnIC6v4',
  authDomain: 'music-app-cb7ab.firebaseapp.com',
  projectId: 'music-app-cb7ab',
  storageBucket: 'music-app-cb7ab.appspot.com',
  messagingSenderId: '915084093977',
  appId: '1:915084093977:web:308de5b84f9cedd62b1888',
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
