import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyCfCXghSI2b7ISIma0To2fCZx7z5kr8eTQ",
	authDomain: "roger-roger.firebaseapp.com",
	projectId: "roger-roger",
	storageBucket: "roger-roger.appspot.com",
	messagingSenderId: "705289168669",
	appId: "1:705289168669:web:17b59a5bc4dfe93d5ae3f4",
	measurementId: "G-28BVRDRJZ9",
};

export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
export const userRef = collection(db, "users");
// export const storage = getStorage(firebaseApp);
