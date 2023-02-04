import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCfCXghSI2b7ISIma0To2fCZx7z5kr8eTQ",
	authDomain: "roger-roger.firebaseapp.com",
	projectId: "roger-roger",
	storageBucket: "roger-roger.appspot.com",
	messagingSenderId: "705289168669",
	appId: "1:705289168669:web:17b59a5bc4dfe93d5ae3f4",
	measurementId: "G-28BVRDRJZ9",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
