import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
//import axios from "axios";
import { Link } from "react-router-dom";
import { UseAuthContext } from '../Context/AuthContext.js';



export default function signUp() {

 const {handleSignUp}  = UseAuthContext();

    return (  
        <div className="whiteBoard">
        <Form onSubmit={handleSignUp}>

        <Form.Label className="label">User name</Form.Label>
        <Form.Control className="input" type="text" id="username"  />

        <Form.Label className="label">Email address</Form.Label>
        <Form.Control className="input" type="email" id="email" />
       

        <Form.Label className="label">Password</Form.Label>
        <Form.Control className="input" type="password" id="password"  />

        <Form.Label className="label">confirm password</Form.Label>
                <Form.Control className="input" type="Password" id="confirmPassword"  />

                <Form.Label className="label" htmlFor="disabledSelect">Roles</Form.Label>
                <Form.Control className="input" type="text" id="role" placeholder="admin || user" />

            <Button className="postButtons" variant="primary" type="submit">
                Sign up
            </Button>
            <Link to={`/`} ><Button  className="postButtons"  variant="primary" >Cancel</Button></Link>
        </Form>
        </div>
    )
}
