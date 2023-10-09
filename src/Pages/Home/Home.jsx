import { useLoaderData } from 'react-router-dom';
import Banner from '../../Components/Banner/Banner';
import CaruselDe from '../../Components/CaruselDe/CaruselDe';
import DateEvent from '../../Components/DateEvent/DateEvent';
import TicktePriceOtp from '../../Components/TicktePriceOtp/TicktePriceOtp';
import BandsCards from '../../Components/BandsCard/BandsCards';



const Home = () => {

    const bandAll = useLoaderData()
    console.log(bandAll)


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
            <div>
                <h1 className='text-5xl font-bold mt-36 mb-10 text-center text-white'>TOP <span className='text-red-700'>6</span> LISTED <span className='text-red-700'>BANDS</span></h1>
                <p className='text-red-600 text-center text-3xl font-semibold'>You Can Hire rock band that will make your event unforgettable</p>
                <p className='font-bold text-red-700 text-center'>___________________________________</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-7 mt-6' style={{ backgroundImage: 'url("https://www.madebydesignesia.com/themes/rockfest/images/background/t5.jpg")' }}>
                {
                    bandAll.map(bands => <BandsCards key={bands.id} bands={bands}></BandsCards>)
                }
            </div>


        </div>
    );
};

export default Home;