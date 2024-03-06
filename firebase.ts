// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getApp, getApps, initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl3WGw4Cd2NYk-QF96zyR4PDirRQQoEgE",
  authDomain: "dropbox-clone-e598a.firebaseapp.com",
  projectId: "dropbox-clone-e598a",
  storageBucket: "dropbox-clone-e598a.appspot.com",
  messagingSenderId: "808663283119",
  appId: "1:808663283119:web:ce11856469d6a508aaeb5a",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
