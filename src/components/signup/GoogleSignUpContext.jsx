//React Hooks
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

//Firebase utils
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

//Create the context
const GoogleLoginContext = createContext();

//Create a provider component to wrap the application
const GoogleLoginProvider = ({ children }) => {
  //States
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Used for Sign up with email && Password
  /* const auth = getAuth(); */

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const googleProvider = new GoogleAuthProvider();

  //Define Google Sign up function
  const googleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      navigate("/");
      console.log(result);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
      if (user) {
        navigate("/");
      }
    }
  };

  //Define Email and Password Sign up function
  const emailPasswordSignUp = async (email, password) => {
    /* const  signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }); */
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      console.log(userCredential.user)
    } catch (err) {
      const errorCode = err.errorCode
      const errorMessage = err.message;
      console.log(errorCode + errorMessage)
    } finally {
      navigate('/')
    }
  };

  // Provide the googleLogin function and isLoading state to the children components
  return (
    <GoogleLoginContext.Provider
      value={{ googleLogin, emailPasswordSignUp, isLoading }}
    >
      {children}
    </GoogleLoginContext.Provider>
  );
};

// Custom hook to access the googleLogin function and isLoading state
const useGoogleLogin = () => {
  const { googleLogin, isLoading } = useContext(GoogleLoginContext);
  return { googleLogin, isLoading };
};

const useEmailAndPasswordLogin = () => {
  const { emailPasswordSignUp } = useContext(GoogleLoginContext);
  return { emailPasswordSignUp };
};

export { GoogleLoginProvider, useGoogleLogin, useEmailAndPasswordLogin, auth };
