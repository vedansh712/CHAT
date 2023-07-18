import React, { useState } from "react";
import "./Login.css";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Firebase";
import GoogleIcon from "@mui/icons-material/Google";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async() => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login">
      <img
        src="https://i.ibb.co/Y0YGrb2/In-Shot-20230616-220956970.jpg"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button onClick={handleLogin}>login</button>
      <button onClick={signInWithGoogle}>
        {" "}
        <GoogleIcon /> <span>Login with Google</span>
      </button>
    </div>
  );
}

export default Login;
