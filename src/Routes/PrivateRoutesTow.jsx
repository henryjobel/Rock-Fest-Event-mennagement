import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const PrivateRoutesTow = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation();

    if(loader){
        return <span className="loading loading-spinner text-accent"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoutesTow;