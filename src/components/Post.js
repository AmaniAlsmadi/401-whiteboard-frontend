
import axios from "axios";
import { useEffect , useState } from "react";
import AddComment from "./Add-comment-form";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function Post ( props ) {

    const [ post, setPost ] = useState( [] );

    const getData = async () => {
        try{
        const allData = await axios.get( `https://thawing-peak-42804.herokuapp.com/post` );
        setPost( allData.data.post );
        console.log( allData.data.post );
        } catch ( error ) {
            console.log( error );
        }
    };

    const handleDelete = async ( id ) => {
        try{
        await axios.delete( `https://thawing-peak-42804.herokuapp.com/post/${id}` );
        getData();
    } catch ( error ) {
        console.log( error );
    }
    };

    const handleEdit = async ( id ) => {
        try{
      await axios.put( `https://thawing-peak-42804.herokuapp.com/post/${id}` );
      getData(); 
    } catch ( error ) {
        console.log( error );
    }
  };
    useEffect( () => {
        getData();
    }, [props.rerender ] );

    return (
        <div className="theCards">
            {post && post.map( ( post, idx ) => {
                return (
                  <div key={idx} className='postCard'>
                  <Card className="allCards" style={{ width: '50rem' }}>
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    <Card.Text>
                    {post.content}
                    </Card.Text>
                    
                     {post.comments &&
                                <h5>Comments</h5>
                            }
                            {post.comments && post.comments.map( ( comment, idx ) => {
                                return (
                                <Card className="commentCard" key={idx}>
                                    {comment.content}       
                                </Card>
                                   
                                );
                            }
                            )}
                            
                            <AddComment postId={post.id} getData={getData} />
                    <Button className="postButtons" onClick={() => { handleDelete( post.id ); }} variant="primary">Delete Post</Button>
                    <Button className="postButtons" onClick={() => { handleEdit( post.id ); }} variant="primary">Edit Post</Button>
                  </Card.Body>
                </Card>
                        </div>
                    
                );
            }
            )}
        </div>
    );
}
export default Post;