import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { key, name, description, img } = service;
    return (
        <Card className="service-card" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/service/${key}`}>
                    <Button variant="warning">See Details</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Service;