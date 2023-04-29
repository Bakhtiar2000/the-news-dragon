import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const [error, setError]= useState('')
    const [success, setSuccess]= useState('')
    const {signInUser} =useContext(AuthContext)

    const handleSignIn= event=>{
        event.preventDefault()
        const form= event.target;
        const email= form.email.value
        const password= form.password.value
        console.log(email, password)
        setError('')
        setSuccess('')

        signInUser(email, password)
        .then(result=>{
            const createdUser= result.user
            console.log(createdUser)
            setSuccess('login successful')
        })
        .catch(err=> setError(err.message))
    }
    
    return (
        <Container className='w-50 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                </Form.Group>
                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button> 
                <br />      
                
                <Form.Text className='text-success' style={{display:'block'}}>{success}</Form.Text>          
                <Form.Text className='text-warning' style={{display:'block'}}>{error}</Form.Text>        
                <Form.Text className="text-secondary">
                        Don't have an account? Please <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">
                        
                </Form.Text>
                <Form.Text className="text-danger">
                        
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;