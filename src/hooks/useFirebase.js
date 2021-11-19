import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import initializeAuthentication from '../pages/LoginPage/Firebase/firebase.init';

const useFirebase = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  initializeAuthentication();

  const auth = getAuth();

  // auth providers

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  // create account with email

  const signUpUsingEmail = (name, email, password) => {
    const loading = toast.loading('Please Wait...');
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        updateProfile(auth.currentUser, {
          photoURL: 'https://i.ibb.co/G31TsrC/user.png',
          displayName: name,
        });
        toast.dismiss(loading);
        toast.success('Your Account is created Successfully');
        setLoggedInUser(res.user);
      })
      .catch((err) => {
        toast.dismiss(loading);
        toast.error(err.message);
      });
  };

  // email password signIn

  const signInUsingEmail = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google signIn

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // gitHub signIn

  const signInUsingGitHub = () => {
    setIsLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // signOut function

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedInUser(null);
        toast.error('Logged Out!');
      })
      .catch((err) => toast.error(err.message))
      .finally(() => setIsLoading(false));
  };

  // observe user state change

  useEffect(() => {
    const unSubscrived = onAuthStateChanged(auth, (user) => {
      user ? setLoggedInUser(user) : setLoggedInUser(null);
      setIsLoading(false);
    });
    return () => unSubscrived;
  }, [auth]);

  return {
    loggedInUser,
    signInUsingGoogle,
    signInUsingGitHub,
    logOut,
    signUpUsingEmail,
    signInUsingEmail,
    setIsLoading,
    isLoading,
  };
};

export default useFirebase;
