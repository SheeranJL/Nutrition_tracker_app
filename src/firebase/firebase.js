import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD49GmJU-RNktiMX8zV47O8-SQONZKv694",
  authDomain: "nutrition-app-7ecc1.firebaseapp.com",
  projectId: "nutrition-app-7ecc1",
  storageBucket: "nutrition-app-7ecc1.appspot.com",
  messagingSenderId: "54732372691",
  appId: "1:54732372691:web:ddb7294739c4d83289b226",
  measurementId: "G-ZKV48XG3G7"
};

export const createUserProfileDocument = async(userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get();
  const collectionShapshot = await collectionRef.get();

  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        user: {
          displayName,
          email,
          createdAt,
          ...additionalData
        },
        data: {
          additionalData
        }
      })
    } catch(error) {
      console.log('error creating user document', error)
    }
  }
  return userRef;
}


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
