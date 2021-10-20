import React from 'react';
import './Homemain.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import imgs1 from "../../images/slide1.jpg";
import imgs2 from "../../images/slide2.jpg";
import imgs3 from "../../images/slide3.jpg";


const Homemain = () => {
    return (
        <>
            <div className="slider">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="slider-img"
                            src={imgs1}
                            alt="First slide"
                        />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className=" slider-img"
                            src={imgs2}
                            alt="Second slide"
                        />


                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="slider-img"
                            src={imgs3}
                            alt="Third slide"
                        />


                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="mt-5">
                <h1>Best Hospital In Town</h1>
                <h6>When it comes about Health Care</h6>
            </div>
            <Container>
                <Row className="my-5">
                    <Col><h3>Experienced Doctors</h3>
                        <p>We do have so many experienced Doctors. Their
                            experience in this sector is 20 years+
                        </p>
                    </Col>
                    <Col xs={6}><h3>Experienced Nurses</h3>
                        <p>
                            We do have so many experienced Nurses.
                            Their experience in this sector is 20 years+
                        </p></Col>
                    <Col><h3>Equipments</h3>
                        <p>
                            We do have all the digital equipments of medical science to support our petient
                        </p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col><h3>24/7 Service</h3>
                        <p>
                            Our services are avaiable 24 hours of a week
                        </p>
                    </Col>
                    <Col xs={6}><h3>Digital ICU</h3>
                        <p>We do have digitalized Intensive Care Unit</p>
                    </Col>
                    <Col><h3>Digital CCU</h3>
                        <p>
                            We also have degitalized Critical Care Unit
                        </p>
                    </Col>
                </Row>

            </Container>
        </>
    );
};

export default Homemain;