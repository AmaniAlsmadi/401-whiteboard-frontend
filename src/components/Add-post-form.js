import axios from "axios";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';


function AddPost(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,

        };
        await axios.post(
            `http://localhost:3001/post`,
            post
        ).then(() => {
            props.getData();
        });
    };

    return (
        <div className="whiteBoard">
            <h2>Add Post</h2>

            <Form onSubmit={handleSubmit}>

                <Form.Label>Title</Form.Label>
                <Form.Control type="title" placeholder="Enter title" id="title" />


                <Form.Label>Content</Form.Label>
                <Form.Control type="text" placeholder="add post" id="content" />

                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    );
}

export default AddPost;