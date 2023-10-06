import Footer from '../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/NavBar/Navbar'; 

const Root = () => {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-6xl mx-auto'><Navbar></Navbar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;
