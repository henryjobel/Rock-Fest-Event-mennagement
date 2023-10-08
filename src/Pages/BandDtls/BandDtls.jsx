import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BandDtls = () => {
    const bandsData = useLoaderData();
    const { id } = useParams();

    const selectedBand = bandsData.find(band => band.id === parseInt(id));

    if (!selectedBand) {
        return <div>Band not found</div>;
    }

    return (
        <div className='text-red-600'>
            <h2>{selectedBand.title}</h2>
            <img src={selectedBand.imge} alt="Band Details" />
            <p>{selectedBand.longDescription}</p>
            <p>Hire Price: {selectedBand.hirePrice}</p>
        </div>
    );
};

export default BandDtls;
