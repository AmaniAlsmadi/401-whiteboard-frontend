import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import cookies from "react-cookies";

function AddPost(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'username': cookies.load("username"),
            'ownerId': cookies.load("userID"),
        };
        await axios.post(
            `http://localhost:3001/post`, post ).then(() => {
            props.getData();
        });
    };

    return (
        <div className="whiteBoard">
            <Form onSubmit={handleSubmit}>

                <Form.Label className="label">Title</Form.Label>
                <Form.Control className="input" type="title" placeholder="Enter title ..." id="title" />


                <Form.Label className="label">Content</Form.Label>
                <Form.Control as="textarea" rows={3} className="input" type="text" placeholder="Enter post ..." id="content" />

                <Button className="buttons" variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    );
}

export default AddPost;