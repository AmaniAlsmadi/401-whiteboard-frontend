import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import AddComment from "./Add-comment-form";
import React from 'react';


function Post ( props ) {

    const [ post, setPost ] = useState( [] );

    const getData = async () => {
        const response = await axios.get( `https://thawing-peak-42804.herokuapp.com/post` );
        setPost( response.data );
    };

    const handleDelete = async ( id ) => {
        await axios.delete( `https://thawing-peak-42804.herokuapp.com/post/${id}` );
        getData();
    };

    useEffect( () => {
        getData();
    }, [ props.rerender ] );

    return (
        <>
            {post && post.map( ( post, idx ) => {
                return (
                    <div className="post-class" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                        <div className="card-body">
                            <h1 className="card-title">{post.title}</h1>
                            <p className="card-text">{post.content}</p>
                        </div>
                        <div>
                            <button onClick={() => {
                                handleDelete( post.id );
                            }}>delete post</button>
                        </div>
                        <div>
                            {post.Comments &&
                                <h2>Comments</h2>
                            }
                            {post.Comments && post.Comments.map( ( comment, idx ) => {
                                return (
                                    <div className="card" style={{ justifyContent: 'center', margin: '1rem' }} key={idx}>
                                        <div className="card-body">
                                            <p className="card-text">{comment.content}</p>
                                        </div>
                                    </div>
                                );
                            }
                            )}
                            <AddComment postId={post.id} getData={getData} />
                        </div>
                    </div>
                );
            }
            )}
        </>
    );
}
export default Post;