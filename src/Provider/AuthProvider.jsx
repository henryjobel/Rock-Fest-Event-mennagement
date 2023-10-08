// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { createContext, useState } from 'react';
import { GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../Config/firebaseconfig';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const [user,setUser] = useState(null)
    const createUser = (email , password) =>{

        return createUserWithEmailAndPassword(auth , email , password)
    }

    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authinfo = {
        user,
        loginWithGoogle,
        createUser,
        login
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;