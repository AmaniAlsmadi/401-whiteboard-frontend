import axios from "axios";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddComment(props) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
            'userId': props.postId
        };
        await axios.post(
            `http://localhost:3001/comment/${props.postId}`,
            comment
        ).then(() => {
            props.getData();
        });
    };
    return (
        <div>
            <h2>Add comment</h2>
            <Form onSubmit={handleSubmit}>
                    <Form.Control id="content" type="text" placeholder="add comment" />
                <Button type="submit">
                    Comment
                </Button>
            </Form>
        </div>
    );
}

export default AddComment;