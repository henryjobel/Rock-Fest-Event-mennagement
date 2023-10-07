import React from 'react';

const CaruselDe = () => {
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold mt-36 mb-10 text-center text-white'>0<span className='text-red-700'>2</span> Schedule</h1>
                <p className='font-bold text-red-700 text-center'>___________________________________</p>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-outline text-red-500">Day 1</a>
                <a href="#item2" className="btn btn-outline text-red-500 ">Day 2</a>
                <a href="#item3" className="btn btn-outline text-red-500">Day 3</a>
                <a href="#item4" className="btn btn-outline text-red-500">Day 4</a>
            </div>
            <div className="carousel w-full h-[700px]">
                <div id="item1" className="carousel-item w-full">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t2.jpg)' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-red-700 font-bold">Artcell</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t3.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-red-700 font-bold">Aurthohin</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t4.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-red-700 font-bold">Warfez</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://www.madebydesignesia.com/themes/rockfest/images/background/t5.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl text-red-700 font-bold">Black</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CaruselDe;