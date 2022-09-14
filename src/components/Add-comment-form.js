import axios from "axios";
import React from 'react';
;

function AddComment(props) {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
        };
        await axios.post(
            `https://thawing-peak-42804.herokuapp.com/comment/${props.postId}`,
            comment
        ).then(() => {
            props.getData();
        });
    };
    return (
        <div>
            <h2>Add comment</h2>
            <form onSubmit={handleSubmit}>
                    <textarea type="text" placeholder="add comment" />
                    <input type="submit" />
            </form>
        </div>
    );
}

export default AddComment;