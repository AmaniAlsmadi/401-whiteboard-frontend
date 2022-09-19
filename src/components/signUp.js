import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import axios from "axios";

export default function signUp() {

    const handleSignup = async (e) => {
        e.preventDefault();
        const data = {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value
        };
    
        await axios.post('https://thawing-peak-42804.herokuapp.com/signup', data)
        
        .then(res => {
          console.log(res.data)
          alert(`welcome ${res.data.username}`)
          window.location.href = '/post';
        })
        .catch(() => alert('Error try again'));
    }

    return (
        
        <div className="whiteBoard">
        <Form onSubmit={handleSignup}>

        <Form.Label className="label">User name</Form.Label>
        <Form.Control className="input" type="text" id="username" placeholder="Enter your name" />

        <Form.Label className="label">Email address</Form.Label>
        <Form.Control className="input" type="email" id="email" placeholder="Enter email" />
       

        <Form.Label className="label">Password</Form.Label>
        <Form.Control className="input" type="password" id="password" placeholder="Password" />

            <Button className="buttons" variant="primary" type="submit">
                Sign up
            </Button>
        </Form>
    </div>
    )
}