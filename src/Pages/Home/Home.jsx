import Banner from '../../Components/Banner/Banner';
import CaruselDe from '../../Components/CaruselDe/CaruselDe';
import DateEvent from '../../Components/DateEvent/DateEvent';
import TicktePriceOtp from '../../Components/TicktePriceOtp/TicktePriceOtp';



const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <div className='max-w-6xl mx-auto'>
           <DateEvent></DateEvent>
           </div>
           <div>
            <CaruselDe></CaruselDe>
           </div>
           <div className='max-w-6xl mx-auto'>
            <TicktePriceOtp></TicktePriceOtp>
           </div>
        </div>
    );
};

export default Home;