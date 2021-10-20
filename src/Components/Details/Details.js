import React from 'react';
import { useParams } from 'react-router';
import './Details.css';

const Details = () => {
    const { serviceName } = useParams();
    return (
        <div className="mt-5">
            <h2>Welcome to our <span className="service-name">{serviceName}</span> service.</h2>
            <h6>Please make an appoinment to take our {serviceName} service. </h6>
        </div>
    );
};

export default Details;