
import axios from "axios";
import { useEffect, useState } from "react";
import AddComment from "./Add-comment-form";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { Link } from "react-router-dom";
import AddPost from "./Add-post-form";
import cookies from 'react-cookies';
//import Container from 'react-bootstrap/Container';
//import Navbar from 'react-bootstrap/Navbar';
import NavBar from "./navbar";



function Post(props) {

    const [post, setPost] = useState([]);
    const [role, setRole] = useState('');

    const getData = async () => {
        try {
            const allData = await axios.get(`http://localhost:3001/post`);
            setPost(allData.data.post);
            console.log(allData.data.post);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        const token = cookies.load('token');
        try {
            await axios.delete(`http://localhost:3001/post/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
            getData();
        } catch (error) {
            console.log(error);
        }
    };



    const deleteComment = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/comment/${id}`);
            getData();
        } catch (error) {
            console.log(error);
        }
    };



    useEffect(() => {
        setRole(cookies.load('role'));
        getData();
    }, []);

    return (
        <>
        {console.log(props)}
        <NavBar  setLoggedin={props.handleSignout}/>

      <AddPost getData={getData}/>

            <div className="theCards">
                {post && post.map((post, idx) => {
                    return (
                        <div key={idx} className='postCard'>
                            <Card className="allCards" style={{ width: '50rem' }}>
                                <Card.Body>
                                <Card.Title>id : {post.ownerId} / {post.username} </Card.Title>
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
                                                    <Card.Title>id : {comment.ownerId} / {comment.ownername} </Card.Title>
                                                    <Card.Text className="text">
                                                        {comment.content}
                                                    </Card.Text>
                                                    {role === 'admin' &&
                                                     <>
                                                    <input className="commentButtons" type="submit" value="Delete" onClick={() => deleteComment(comment.id)} />
                                                    <Link to={`/post`}><input className="commentButtons" type="submit" value="Edit" /></Link>
                                                    </> 
                                                    }
                                                </Card.Body>
                                            </Card>
                                        );
                                    })}
                                    <AddComment postId={post.id} getData={getData} />
                                    {role === 'admin' &&
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