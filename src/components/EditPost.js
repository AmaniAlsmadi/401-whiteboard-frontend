import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import cookies from "react-cookies";



export default function EditPost() {
  
    const {id} = useParams();
  
  
    const handleEditPost  = async(e) =>{
        e.preventDefault();
        const post = {
            'title': e.target.newTitle.value,
            'content': e.target.newContent.value,
            'username': cookies.load("username"),
            'ownerId': cookies.load("userID"),

        };
        const token = cookies.load('token');
        console.log(post);
        console.log(id);

        try{
            await axios.put(`https://thawing-peak-42804.herokuapp.com/post/${id}`, post, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }).then(() => {
                window.location.href = `/`;})
            
        } catch(error){
            console.log(error);
        }}
    

   

    
        return (
            <div className="whiteBoard">
            <Form onSubmit={(e)=>handleEditPost(e)}>

                <Form.Label className="label">Edit Title</Form.Label>
                <Form.Control id="newTitle" className="input" type="title"   />


                <Form.Label className="label">Edit Content</Form.Label>
                <Form.Control id="newContent" as="textarea" rows={3} className="input" type="text"  />
               
                <Button className="buttons" variant="primary" type="submit" > Save</Button>
            </Form>
        </div>
        )
    
}

