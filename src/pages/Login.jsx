import React, { useState } from "react";
import {Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">PDF Manager</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button><Link to="/home" className="nav-link" style={{"color":"white"}}>Sign in</Link></button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do not have an account? <Link to="/register" className="nav-link">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default Login;