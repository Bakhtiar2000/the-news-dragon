import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [accept, setAccept] = useState(false)

    const handleRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password)
        setError('')
        setSuccess('')

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                setSuccess('Registration successful')

                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated!')
                    })
                    .catch((error) => setError(error.message));
            })
            .catch(err => setError(err.message))
    }

    const handleAccept = event => {
        console.log(event.target.checked)
        setAccept(event.target.checked)
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="Enter your photo url" required />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccept}
                        type="checkbox" name="accept"
                        label={<>Accept <Link to="/terms">terms and conditions</Link></>} />
                </Form.Group>
                <Button className='mb-2' variant="primary" type="submit" disabled={!accept}>
                    Register
                </Button>
                <br />
                <Form.Text className='text-success' style={{ display: 'block' }}>{success}</Form.Text>
                <Form.Text className='text-warning' style={{ display: 'block' }}>{error}</Form.Text>
                <Form.Text className="text-secondary">
                    Already have an account? Please <Link to="/login">Login</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-danger">

                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;