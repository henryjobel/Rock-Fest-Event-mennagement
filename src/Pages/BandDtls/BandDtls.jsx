import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BandDtls = () => {
    const bandsData = useLoaderData();
    const { id } = useParams();

    const selectedBand = bandsData.find(band => band.id === parseInt(id));

    if (!selectedBand) {
        return <div>Band not found</div>;
    }

    const backgroundImageStyle = {
        backgroundImage: `url(${selectedBand.dtlsImg})`,
    };

    return (
        <div>
            <div className="hero min-h-screen" style={backgroundImageStyle}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={selectedBand.imge} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-red-500">{selectedBand.title}</h1>
                            <p className="py-6 text-white text-3xl font-semibold">{selectedBand.shortDescription}</p>
                            <p className="py-4 text-white text-xl font-medium">{selectedBand.longDescription}</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BandDtls;
