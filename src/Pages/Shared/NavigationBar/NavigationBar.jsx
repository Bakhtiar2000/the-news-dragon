import React, { useContext } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='mb-3 rounded'>
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to="/category/0">Home</Link>
                            <Link to="">About</Link>
                            <Link to="">Career</Link>
                        </Nav>
                        <Nav className='d-lg-flex align-items-lg-center gap-lg-3'>
                            {
                                user &&
                                    <FontAwesomeIcon style={{ fontSize: '1.5rem' }} icon={faUserCircle} />
                            }
                            {
                                user ?
                                    <Button variant="secondary">Logout</Button> :
                                    <Link to="/login"><Button variant="secondary">Login</Button></Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;