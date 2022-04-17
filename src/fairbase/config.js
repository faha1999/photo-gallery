import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCTpM_hpWk4pjsoRa0VB_6Faa4RvLqMp5Q',
  authDomain: 'fair-gram.firebaseapp.com',
  projectId: 'fair-gram',
  storageBucket: 'fair-gram.appspot.com',
  messagingSenderId: '767820929632',
  appId: '1:767820929632:web:aea7a53e82acafec134105',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage.storage();
const projectFairStorage = getFirestore.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFairStorage, timestamp };
