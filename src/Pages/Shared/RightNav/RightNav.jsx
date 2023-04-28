import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h3>Login With</h3>
            <Button className='mt-2 w-100' variant="outline-primary"><FaGoogle /> Login with google</Button>
            <Button className='mt-2 w-100' variant="outline-secondary"><FaGithub />  Login with github</Button>
            <div className='mt-4'>
                <h3 className='mb-2'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item className='d-flex align-items-center gap-2'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-2'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-2'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img className='w-100 rounded' src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;