import atristpic1 from '../../assets/featured-1.jpg';
import atristpic2 from '../../assets/featured-2.jpg';
import atristpic3 from '../../assets/featured-3.jpg';
import artistpic4 from '../../assets/rockstar2.jpg'
import artistlog from '../../assets/artist.png';
const DateEvent = () => {
    return (
        <div className='text-white text-center'>
    <h1 className='text-7xl font-extrabold pt-32'>Nov 23-28</h1>
    <p className='text-red-700 text-4xl font-semibold pt-7'>Allegiant Stadium, Las Vegas, NV, United States</p>
    <div className='flex justify-center pt-20'>
        <img className='w-96' src={artistlog} alt="" />
    </div>
    <div className='grid grid-cols-3 gap-16'>
        <div className="card w-96 flex items-center shadow-xl image-full transform hover:scale-105 transition-transform">
            <figure><img src={atristpic1} alt="Shoes" /></figure>
            <div className="card-body pt-52">
                <p className='text-5xl text-red-500 font-bold'>Artcell</p>
            </div>
        </div>
        <div className="card w-96 flex items-center shadow-xl image-full transform hover:scale-105 transition-transform">
            <figure><img src={atristpic2} alt="Shoes" /></figure>
            <div className="card-body pt-52">
                <p className='text-5xl text-red-500 font-bold'>Warfez</p>
            </div>
        </div>
        <div className="card w-96 flex items-center shadow-xl image-full transform hover:scale-105 transition-transform">
            <figure><img src={atristpic3} alt="Shoes" /></figure>
            <div className="card-body pt-52">
                <p className='text-5xl text-red-500 font-bold'>Blak</p>
            </div>
        </div>
    </div>
    <div className='flex justify-center ml-12 pt-6'>
        <div className="card w-96 flex items-center shadow-xl image-full transform hover:scale-105 transition-transform">
            <figure><img src={artistpic4} alt="Shoes" /></figure>
            <div className="card-body pt-52">
                <p className='text-5xl text-red-500 font-bold'>Authohin</p>
            </div>
        </div>
    </div>
</div>

    );
};

export default DateEvent;