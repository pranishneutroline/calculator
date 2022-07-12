import React from "react";
import { auth } from "./firebase";
// import firebase from "firebase/app";
// import "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import "./login.css";

function Login() {
  return (
    <div className="login">
      <h2>Chat App</h2>
      <button
        className="signin-google"
        onClick={() =>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())}
      >
        Sign in with google
      </button>
      <input type="text" placeholder="Email" className="login-email" />
      <input
        type="password"
        name=""
        id=""
        placeholder="password"
        className="login-password"
      />
      <button className="login-submit">Login</button>

      <button className="forgot-password">Forgot Password</button>
      <button className="signup-submit">Signup</button>
    </div>
  );
}

export default Login;
