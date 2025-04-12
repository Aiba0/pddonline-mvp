import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAaNDGsFGWK6PMjNdUyTS1rN5G9owTmhRg",
    authDomain: "mvp-pdd-online.firebaseapp.com",
    projectId: "mvp-pdd-online",
    storageBucket: "mvp-pdd-online.appspot.com",
    messagingSenderId: "103913073399",
    appId: "1:103913073399:web:510fadd61f66fe716181f2"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
