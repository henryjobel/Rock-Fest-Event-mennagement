import { NavLink, Link} from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import userImage from "../../../assets/3003035.png"
import Tickets from './../../Tickets/Tickets';

const Navbar = () => {

    const { user, singOut } = useContext(AuthContext)
    const handleSignOut = () => {
        singOut()
            .then()
            .catch()
    }
    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
        <li><NavLink to='/ticktes'> Tickets</NavLink></li>
        <li><NavLink to='/galary'> Lets Watch</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            
            <div className="navbar-end">
            <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                {
                        !user?.email ? (

                            <img src={userImage} alt="User Icon" />
                        ) : (
                            <img src={user.photoURL} alt={user.displayName} />
                        )
                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>
                                    <button className="btn btn-sm  btn-ghost">{user.email}</button>

                                </li>
                                <li>
                                    <button className="btn btn-active btn-primary"
                                        onClick={handleSignOut}
                                    >Singout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn bg-red-600 text-white">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;