import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { useRouter } from "next/router";
import React, { useState } from "react";
import { auth } from "../firebase";
// import { doc, setDoc } from "firebase/firestore";
// import { useAuth } from "../context/AuthContext"; 


function Register() {

// const router = useRouter();
// const { setUser } = useAuth(); 
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [name, setName] = useState("");
const [err, setErr] = useState(false);
const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await createUserWithEmailAndPassword(auth, email, password).then(
      (res) => {
        const user = res.user;

        // updateProfile(res.user);
      }
    );
    // const userData = auth.currentUser;
    // if (userData) {
    //   setUser(userData);
    //   await setDoc(doc(db, "users", userData.uid), {
    //     name: name,
    //     email: userData.email,
    //     uid: userData.uid,
    //   });
    //   await setDoc(doc(db, "userChats", userData.uid), {});
    // }
    //   router.push("/");
    } catch (err) {
      setErr(true);
    }
  };

    return(

        <div className="formContainer">
            <div className="formWrapper">
            <span className="logo">PDF Manager</span>
            <span className="title">Register</span>
            <form className="form" action="submit" onSubmit={handleSignup}>
                <input 
                    required type="text" 
                    placeholder="Full Name" 
                    name="fullname"
                    onChange={(e) => {
                    setName(e.target.value);
                    }}
                 />
                <input 
                    required type="email" 
                    placeholder="Email"
                    name="email"
                    onChange={(e) => {
                    setEmail(e.target.value);
                    }}
                    />
                <input 
                    required type="password" 
                    name="password" 
                    placeholder="Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                        }}
                    />
                <button required type="submit">Sign Up</button>
                {err && <span>Something went wrong!</span>}
            </form>
            <p>Already have an account? Login</p>
            </div>
        </div>
    );
};

export default Register;