import React from 'react';
import './Homemain.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import imgs1 from "../../images/slide1.jpg";
import imgs2 from "../../images/slide2.jpg";
import imgs3 from "../../images/slide3.jpg";
import doctor from "../../images/doctor.jpg";
import nurse from "../../images/nurse.jpg";
import equipments from "../../images/equipments.jpg";
import twentyFour from "../../images/24 7.jpg";
import icu from "../../images/icu.jpg";
import ccu from "../../images/ccu.jpg";


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
                <h1><b>Best <span className="hospital">Hospital</span> In Town</b></h1>
                <h6 className="hospital">When it comes about Health Care</h6>
            </div>
            <Container className="home-container">
                <Row className="my-5">

                    <Col>
                        <img src={doctor} alt="" />
                        <h3>Experienced Doctors</h3>
                        <p>We do have so many experienced Doctors. Their
                            experience in this sector is 20 years+
                        </p>
                    </Col>
                    <Col xs={6}>
                        <img src={nurse} alt="" />
                        <h3>Experienced Nurses</h3>
                        <p>
                            We do have so many experienced Nurses. <br />
                            Their experience in this sector is 20 years+
                        </p></Col>
                    <Col>
                        <img src={equipments} alt="" />
                        <h3>Equipments</h3>
                        <p>
                            We do have all the digital equipments of medical science to support our petient
                        </p>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col>
                        <img src={twentyFour} alt="" />
                        <h3>24/7 Service</h3>
                        <p>
                            Our services are avaiable 24 hours of a week
                        </p>
                    </Col>
                    <Col xs={6}>
                        <img src={icu} alt="" />
                        <h3>Digital ICU</h3>
                        <p>We do have digitalized Intensive Care Unit</p>
                    </Col>
                    <Col>
                        <img src={ccu} alt="" />
                        <h3>Digital CCU</h3>
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