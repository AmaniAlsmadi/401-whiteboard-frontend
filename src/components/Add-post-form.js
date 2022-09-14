import axios from "axios";
import React from "react";



function AddPost(props) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,

        };
        await axios.post(
            `https://thawing-peak-42804.herokuapp.com/post`,
            post
        ).then(() => {
            props.getData();
        });
    };

    return (
        <div className="whiteBoard">
            <h2>Add Post</h2>

            <form onSubmit={handleSubmit}>

                <label>Title</label>
                <input type="title" placeholder="Enter title" name="title" />

                <label>Content</label>
                <input type="text" placeholder="add post" name="content"/>

                <input type="submit" />
            </form>
        </div>
    );
}

export default AddPost;