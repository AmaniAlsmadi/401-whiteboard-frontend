import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";
import { UseAuthContext } from '../Context/AuthContext.js';

export default function signIn() {
    
const  { handleSignIn} = UseAuthContext();

    return (
        
        <div className="whiteBoard">
            <Form onSubmit={handleSignIn}>

                <Form.Label className="label">Email address</Form.Label>
                <Form.Control className="input" type="emai" id="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>

                <Form.Label className="label">Password</Form.Label>
                <Form.Control className="input" type="password" id="password" placeholder="Password" />

                <Button className="buttons" variant="primary" type="submit">
                    Sign in
                </Button>
                <Link to={`/signup`} ><input className="logButtons" type="submit" value="If you don't have account sign up here" /> </Link>
           
           
            </Form>
        </div>
    )
}