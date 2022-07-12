// import firebase from "firebase/app";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyDKaJ7oTnAPH2FL2rRGLEdtquJ_v5g7i4Y",
  authDomain: "auth-development-96074.firebaseapp.com",
  projectId: "auth-development-96074",
  storageBucket: "auth-development-96074.appspot.com",
  messagingSenderId: "687296292792",
  appId: "1:687296292792:web:84f21f6474f04f960f914d"
  }).auth();
  // console.log(auth);
// export const auth = app.auth();

// export default app
