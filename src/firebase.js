import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDk8HOeBP1-gIjHREqMBNjnRSuuHNbfGPE",
  authDomain: "cartoon-cl.firebaseapp.com",
  projectId: "cartoon-cl",
  storageBucket: "cartoon-cl.appspot.com",
  messagingSenderId: "486885785233",
  appId: "1:486885785233:web:bd4255939a5818227a4930",
  measurementId: "G-Y712435D5F",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { auth, provider, storage };
export default db;
