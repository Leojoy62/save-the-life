import React from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const { serviceKey } = useParams();
    return (
        <div>
            <h2>This is details: {serviceKey}</h2>
        </div>
    );
};

export default Details;