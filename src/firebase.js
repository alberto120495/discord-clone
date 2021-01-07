import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBK6tSaZM4t13A8jXaXlu4nnih-bwcQqj8",
  authDomain: "discord-clone-dc6ea.firebaseapp.com",
  databaseURL: "https://discord-clone-dc6ea.firebaseio.com",
  projectId: "discord-clone-dc6ea",
  storageBucket: "discord-clone-dc6ea.appspot.com",
  messagingSenderId: "780068582145",
  appId: "1:780068582145:web:018ed5c36511560435a100",
  measurementId: "G-CBLVPYGG86"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
