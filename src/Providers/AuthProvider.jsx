import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    // google login 
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = ()=>{
        setLoading(true)
      return  signInWithPopup(auth, googleProvider)
    }

    // create account 
    const createAccount = (email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password)
    }

    // login account function 
    const logIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set user 
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth,(user)=>{
            setUser(user)
            setLoading(false)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    // logout user function 
    const logOut = ()=>{
       return signOut(auth)
    }


    // login with github 
    const githubProvider = new GithubAuthProvider();
    const githubLogin = ()=>{
       return signInWithPopup(auth, githubProvider)
    }





    // context obj for sending data
    const authentications = {googleLogin, createAccount, logIn, user, logOut, loading, githubLogin}

  return (
    <authContext.Provider value={authentications}>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider