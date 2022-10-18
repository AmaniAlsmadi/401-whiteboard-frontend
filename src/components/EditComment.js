import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useParams } from "react-router-dom";
import cookies from "react-cookies";



export default function EditComment() {
  
    const {id} = useParams();
  
  
    const handleEditComment  = async(e) =>{
        e.preventDefault();
        const comment = {
            'content': e.target.newContent.value,
            'username': cookies.load("ownername"),
            'ownerId': cookies.load("ownerId"),

        };
        const token = localStorage.getItem('token');
        console.log(comment);
        console.log(id);

        try{
            await axios.put(`https://thawing-peak-42804.herokuapp.com/comment/${id}`, comment, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              }).then(() => {
                window.location.href = `/`;})
            
        } catch(error){
            console.log(error);
        }}
    

   

    
        return (
            <div>
            <Form className="commentForm" onSubmit={handleEditComment}>
                    <Form.Control className="commentInput" id="newContent" type="text" placeholder="Edit comment" />
                <Button className="commentB" type="submit">
                    Edit
                </Button>
            </Form>
        </div>
        )
    
}

