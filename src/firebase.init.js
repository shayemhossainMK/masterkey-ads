import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAB4lVdaNh6GX_ZmAgBaKAP5Ior1tey7Gc",
  authDomain: "masterkey-ads.firebaseapp.com",
  projectId: "masterkey-ads",
  storageBucket: "masterkey-ads.appspot.com",
  messagingSenderId: "20055801103",
  appId: "1:20055801103:web:c73080c4874688f62b927a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
