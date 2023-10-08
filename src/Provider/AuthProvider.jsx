// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types, no-unused-vars
import React, { createContext } from 'react';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../Config/firebaseconfig';

export const AuthContext = createContext(null)

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

    const loginWithLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }
    const authinfo = {
        loginWithLogin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;