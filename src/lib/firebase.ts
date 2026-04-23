import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_dAzyJKdn9XSQxiGZFLIl2iGZE8u3nZQ",
  authDomain: "rifatdev-website.firebaseapp.com",
  projectId: "rifatdev-website",
  storageBucket: "rifatdev-website.firebasestorage.app",
  messagingSenderId: "303491209331",
  appId: "1:303491209331:web:eac6c13423522c42c7b206",
  measurementId: "G-RPVHRVJ5DM"
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

if (typeof window !== 'undefined') {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } catch (e) {
    console.error('Firebase init error:', e);
  }
}

export { app, auth, db, storage };