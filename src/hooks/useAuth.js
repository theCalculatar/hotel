import { useContext, useState } from "react";
import { Authcontext } from "../context/useAuthProvider";
import { isEmail, isLength, isEmpty } from "validator";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function useAuth() {
  const { setIsAuthenticated,setIsloading,setResults } = useContext(Authcontext);

  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [results,setResults] = useState(null)

  const navigate = useNavigate()

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const sign_up = async () => {
    let hasError = false;
    const newErrors = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };

    if (isEmpty(firstName)) {
      newErrors.firstname = "First name is required.";
      hasError = true;
    }
    if (isEmpty(lastName)) {
      newErrors.lastname = "Last name is required.";
      hasError = true;
    }
    if (isEmpty(email) || !isEmail(email)) {
      newErrors.email = "A valid email is required.";
      hasError = true;
    }
    if (isEmpty(password) || !isLength(password, { min: 6 })) {
      newErrors.password = "Password must be at least 6 characters long.";
      hasError = true;
    }
    setErrors(newErrors);

    if (!hasError) {
      try {
        const new_user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const userCredentials = new_user.user;
        const userID = userCredentials.uid;

        setIsloading(true)
        await setDoc(doc(db, "users",userID), {
          userID,
          firstName,
          lastName,
          email,
        });
        
        setIsloading(false)
        setResults({msg:"Account created",status:1});
        setIsAuthenticated(true)
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setIsloading(false)
          setResults({msg:"Email already in use",status:0});
        } else {
          setIsloading(false)
          setResults({msg:"Error during sign-up",status:0});
        }
        setIsloading(false)
        console.error("Error during sign-up:", error);
      }
    }
  };

  const sign_in = async () => {
    setResults({msg:"Logged in successfully",status:1});
    setIsloading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsloading(false)
      setIsAuthenticated(true)
     
    } catch (error) {
      setResults({msg:"Wrong credentials",status:0});
      setIsloading(false)
      // console.error("Error during sign-in:", error);
    }
  };
  const sign_out = () => {
    try {
      signOut(auth)
        .then(() => {
          setIsAuthenticated(false);
          navigate('/');
        })
    } catch (error) {
      console.log(error)
    }
  }

  return {
    setFirstname,
    setLastname,
    setEmail,
    setPassword,
    sign_up,
    errors,
    sign_in,
    sign_out
  };
}
