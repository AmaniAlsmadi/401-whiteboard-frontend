import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";



export default function EditPost(props) {
  
    const {id} = useParams();
    const [onePost, setOnePost] = useState({});

    const fetchData = async (e) => {
        try {
            const response = await axios.get(`https://thawing-peak-42804.herokuapp.com/post/${id}`);
            setOnePost(response.data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    } 
  
    const handleEdit  = async(id) =>{
        
        try{
            await axios.put(`https://thawing-peak-42804.herokuapp.com/post/${id}`);
            fetchData();
        } catch(error){
            console.log(error);
        }}
    

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );
   

    
        return (
            <div className="whiteBoard">
            <Form onSubmit={()=>handleEdit(id)}>

                <Form.Label className="label">Edit Title</Form.Label>
                <Form.Control id="newTitle" className="input" type="title" placeholder={onePost.title}  />


                <Form.Label className="label">Edit Content</Form.Label>
                <Form.Control id="newContent" as="textarea" rows={3} className="input" type="text" placeholder={onePost.content}  />
               
                <Button className="buttons" variant="primary" type="submit" > Save</Button>
            </Form>
        </div>
        )
    
}

