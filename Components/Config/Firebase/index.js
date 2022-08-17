import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeU8bFMDGiTQDhiWgQMWjph_AeqyHW0o4",
  authDomain: "the-urbarn-car-wash.firebaseapp.com",
  projectId: "the-urbarn-car-wash",
  storageBucket: "the-urbarn-car-wash.appspot.com",
  messagingSenderId: "724207947135",
  appId: "1:724207947135:web:c1d7a931fd66c8be155e4a"
};


let app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage(app);
const auth = getAuth(app);
export { storage, db, auth };
