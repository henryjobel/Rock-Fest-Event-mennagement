import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/NavBar/Navbar'; 

const Root = () => {
    return (
        <div className='bg-black '>
            <div className='max-w-6xl mx-auto text-red-700 font-extrabold'><Navbar></Navbar></div>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
