
import { useEffect } from "react";
import AddComment from "./Add-comment-form";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { Link } from "react-router-dom";
import AddPost from "./Add-post-form";
import NavBar from "./navbar";
import { UsePostContext } from "../Context/PostContext";
import {UseAuthContext} from "../Context/AuthContext";

function Post() {

    const {role, post,handleDelete,deleteComment,checkRole }= UsePostContext();
    const {canDo,userID}= UseAuthContext();

    useEffect(() => {
        checkRole();
    },[]);

    return (
        <>
        <NavBar />

      <AddPost />

            <div className="theCards">
                {post && post.map((post, idx) => {
                    return (
                        <div key={idx} className='postCard'>
                            <Card className="allCards" style={{ width: '50rem' }}>
                                <Card.Body>
                                <Card.Title>{post.username} </Card.Title>
                                <Card.Title>{post.title}</Card.Title>
                                    <Card.Text>
                                        {post.content}
                                    </Card.Text>
                                    {post.comments &&
                                        <h5>Comments</h5>
                                    }
                                    {post.comments && post.comments.map((comment, idx) => {
                                        return (
                                            <Card className="cards" key={idx}>
                                                <Card.Body className="commentCard">
                                                    <Card.Title>{comment.ownername} </Card.Title>
                                                    <Card.Text className="text">
                                                        {comment.content}
                                                    </Card.Text>
                                                    {canDo(comment.ownerId, userID) &&
                                                     <>
                                                    <input className="commentButtons" type="submit" value="Delete" onClick={() => deleteComment(comment.id)} />
                                                    <Link to={`/comment/${comment.id}`}><input className="commentButtons" type="submit" value="Edit" id={comment.id} /></Link>
                                                    </> 
                                                    }
                                                </Card.Body>
                                            </Card>
                                        );
                                    })}
                                    <AddComment postId={post.id} />
                                    {canDo(post.ownerId, userID) &&
                                    <>
                                    <Button className="postButtons" onClick={() => { handleDelete(post.id); }} variant="primary">Delete Post</Button>
                                    <Link to={`/post/${post.id}`} ><Button className="postButtons" variant="primary"  >Edit Post</Button></Link>
                                     </> 
                                     }
                                    </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            </div>

        </>
    );
}
export default Post;