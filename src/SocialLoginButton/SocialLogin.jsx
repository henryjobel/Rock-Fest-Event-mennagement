import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Provider/AuthProvider';

const SocialLogin = () => {

    const {loginWithLogin} = useContext(AuthContext);
    const handlegoogleLogin = (socialMedia) =>{
        socialMedia()
        .then(result=>console.log(result))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <button onClick={()=>handlegoogleLogin(loginWithLogin)} className='btn'><FcGoogle></FcGoogle> Sing In with Google</button>
        </div>
    );
};

export default SocialLogin;