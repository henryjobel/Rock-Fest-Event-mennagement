import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLoginButton/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
        if(password.length < 6){
            toast.error("is less than 6 characters")
            return; 
        }
        else if(!/[A-Z]/.test(password)){
            toast.error("You don't have a capital letter")
            return;
        }
        else if(!/[!@#$%^&*(),.?":{}|<>]/.test(password)){
            toast.error("You don't have a special character")
            return;
        }
    }
    
    return (
        <div className="hero min-h-screen text-red-800" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t2.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div>
                <h1 className='text-4xl my-10 text-center text-red-700 font-bold '>Register your account Herer</h1>
                <form onSubmit={handleRegister} className="w-96 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' required placeholder="PhotoURL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name='email' required placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name='password' required className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <h1 className='text-center text-2xl my-4 font-bold'>You have anaccount <Link className='text-blue-700 font-bold' to='/login'>Login</Link></h1>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;