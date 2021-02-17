import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAjhDZJfVlxHdAPqYdg-vxRimM1IGa4ZRg",
  authDomain: "facebook-clone-71300.firebaseapp.com",
  projectId: "facebook-clone-71300",
  storageBucket: "facebook-clone-71300.appspot.com",
  messagingSenderId: "279546698917",
  appId: "1:279546698917:web:057ae4bb2e3503ca3a014c",
  measurementId: "G-V75FBDM64D",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
// import phải đúng tên
export default db;
// import tên bất kỳ khác tên bên trên đều lấy db
