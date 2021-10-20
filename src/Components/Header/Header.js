import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" sticky="top" variant="dark" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><h1><b className="hospital">Save The Life</b></h1></Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about#about">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contact#contact">Contact</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} >Logout </Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text className="m">
                            User: <a href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>


        </>


    );
};

export default Header;