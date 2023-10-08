import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../../SocialLoginButton/SocialLogin';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {


    const {login} = useContext(AuthContext)

    const handlelogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')


        if(password.length < 6){
            toast.error("is less than 6 characters")
           
        }
        else{
            return toast.success('Log in successfully')

        }

        login(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <div className='text-red-500'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t4.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <h1 className='text-4xl text-red-600 font-extrabold my-10 text-center'>Login your account</h1>
                    <form onSubmit={handlelogin} className="w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label text-red-700">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h1 className='text-center my-4'>You don&rsquo;t have an account <Link className='text-blue-700 font-bold' to='/register'>Register</Link></h1>
                    <SocialLogin></SocialLogin>
                </div>
                
            </div>

        </div>
    );
};

export default Login;