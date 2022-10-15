
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { UsePostContext } from "../Context/PostContext";


function AddPost() {
    const { handleAddPost }= UsePostContext();


    return (
        <div className="whiteBoard">
            <Form onSubmit={handleAddPost}>

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