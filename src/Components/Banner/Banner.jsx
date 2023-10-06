
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/slider/2.jpg)' }}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-7xl font-extrabold">Be a part of musical history</h1>
                                <p className="mb-5 text-2xl font-sans">The biggest music event in decades. Attended by more than 100 musicians from all over the world. Get your ticket now!</p>
                                <button className="btn btn-error">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/slider/1.jpg)' }}>
                        
                    <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 className="mb-5 text-7xl font-extrabold">The Biggest Music Event of the Year</h1>
                                <p className="mb-5 text-2xl font-sans">The biggest music event in decades. Attended by more than 100 musicians from all over the world. Get your ticket now!</p>
                                <button className="btn btn-error">Explore</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;