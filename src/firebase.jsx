import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKg1ROHa-XmXl3Xx95po790jobr3HcF6Q",
  authDomain: "pdf-manager-30be2.firebaseapp.com",
  projectId: "pdf-manager-30be2",
  storageBucket: "pdf-manager-30be2.appspot.com",
  messagingSenderId: "1022285452233",
  appId: "1:1022285452233:web:5d35ddae219daf423b8e18"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
