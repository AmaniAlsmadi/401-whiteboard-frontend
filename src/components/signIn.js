import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";
import axios from "axios";
import base64 from 'base-64';
import cookies from 'react-cookies';

export default function signIn(props) {
    
    const handleSignIn = (e) => {
    e.preventDefault();
    const data = {
      username: e.target.email.value,
      password: e.target.password.value
    };

    const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
    
    axios.post('https://thawing-peak-42804.herokuapp.com/login', {}, {
      headers: {
        Authorization: `Basic ${encodedCredintial}`
      }
    })
      .then(res => {
        console.log(res.data)
        alert(`welcome ${res.data.username}`);
        cookies.save('token', res.data.token);
        cookies.save('userID', res.data.id); 
        cookies.save('username', res.data.username);
        props.setLoggedin(true);
        //window.location.href = '/post';
      })
      .catch(() => alert('Invalid Login'));
  }


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