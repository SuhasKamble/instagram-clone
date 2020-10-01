import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBFAMpS6RdMIQ2sjBxLDIAWQrNJhyppU3w",
  authDomain: "todo-app2-d8c2c.firebaseapp.com",
  databaseURL: "https://todo-app2-d8c2c.firebaseio.com",
  projectId: "todo-app2-d8c2c",
  storageBucket: "todo-app2-d8c2c.appspot.com",
  messagingSenderId: "993660409180",
  appId: "1:993660409180:web:2a490d06cc0fc3d9941d99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
