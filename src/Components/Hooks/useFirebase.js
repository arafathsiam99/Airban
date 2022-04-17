import { useEffect, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";

// initialize firebase app
initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState({});
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setAdmin] = useState(false);
  let history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Google Sign In
  const googleSignIn = () => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        setIsLoading(false);
        history.push(redirect_uri);
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error.message);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  //Email Registration
  const registration = (email, password, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        if (user) {
          history.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorMessage);
      });
  };

   useEffect(() => {
     const unsubscribed = onAuthStateChanged(auth, (user) => {
       if (user) {
         setUser(user);
       } else {
         setUser({});
       }
       setIsLoading(false);
     });
     return () => unsubscribed;
   }, []);


    const login = (email, password, history, location) => {
      setIsLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          setUser(user);
          console.log(user);

          alert("Login Successfull");
          const destination = location?.state?.from || "/";
          history.push(destination);
        })
        .catch((error) => {
          setAuthError(error.message);
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

  useEffect(() => {
    fetch(`http://localhost:8000/users/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.admin) {
          setAdmin(true);
        }
      });
  }, [user?.email]);

  // this is using for Log Out
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setAuthError(error);
      })
      .finally(() => setIsLoading(false));
  };

  const updateName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((error) => {});
  };
  
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("http://localhost:8000/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  return {
    user,
    googleSignIn,
    registration,
    admin,
    logout,
    login,
    isLoading,
    authError,
  };
};

export default useFirebase;
