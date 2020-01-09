import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCb70TQUYzObkhNoz3OcxSzmZxx6LzCNB4',
  authDomain: 'crwn-db-14447.firebaseapp.com',
  databaseURL: 'https://crwn-db-14447.firebaseio.com',
  projectId: 'crwn-db-14447',
  storageBucket: 'crwn-db-14447.appspot.com',
  messagingSenderId: '26684404606',
  appId: '1:26684404606:web:82604a57906eafc566792f',
  measurementId: 'G-6G7E49YV9V'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
