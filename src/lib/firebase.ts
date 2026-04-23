import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';
import { getAnalytics, Analytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyC_dAzyJKdn9XSQxiGZFLIl2iGZE8u3nZQ",
  authDomain: "rifatdev-website.firebaseapp.com",
  projectId: "rifatdev-website",
  storageBucket: "rifatdev-website.firebasestorage.app",
  messagingSenderId: "303491209331",
  appId: "1:303491209331:web:eac6c13423522c42c7b206",
  measurementId: "G-RPVHRVJ5DM"
};

export const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);
export const analytics: Analytics = typeof window !== 'undefined' ? getAnalytics(app) : null as any;