import axios from "axios";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UsePostContext } from "../Context/PostContext";


function AddComment(props) {
    const { getData }= UsePostContext();

    const handleAddComment = async (e) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
            'userId': props.postId,
            'ownername': localStorage.getItem("username"),
            'ownerId': localStorage.getItem("userID"),
            
        };
        await axios.post(
            `http://localhost:3001/comment/${props.postId}`,
            comment
        ).then(() => {
            getData();
        });
    };
    return (
        <div>
            <Form className="commentForm" onSubmit={handleAddComment}>
                    <Form.Control className="commentInput" id="content" type="text" placeholder="add comment" />
                <Button className="commentB" type="submit">
                    Comment
                </Button>
            </Form>
        </div>
    );
}

export default AddComment;