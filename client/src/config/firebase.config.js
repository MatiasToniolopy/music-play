import { getApp, getApps, initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyB1mwPsEU89R8LsPYHL3_bXOmoE5S0M284",
//   authDomain: "music-player-app-bd1bc.firebaseapp.com",
//   projectId: "music-player-app-bd1bc",
//   storageBucket: "music-player-app-bd1bc.appspot.com",
//   messagingSenderId: "1015317178463",
//   appId: "1:1015317178463:web:f71027734f619bc9d913ea",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const storage = getStorage(app);
export { app, storage };
