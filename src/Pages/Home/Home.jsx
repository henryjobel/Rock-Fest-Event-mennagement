import Banner from '../../Components/Banner/Banner';
import DateEvent from '../../Components/DateEvent/DateEvent';



const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <div className='max-w-6xl mx-auto'>
           <DateEvent></DateEvent>
           </div>
        </div>
    );
};

export default Home;