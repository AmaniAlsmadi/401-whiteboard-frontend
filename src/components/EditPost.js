import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container, Box ,Button, Center,FormLabel } from '@chakra-ui/react';
import '../App.css';



export default function EditPost() {
  
    const {id} = useParams();
  
  
    const handleEditPost  = async(e) =>{
        e.preventDefault();
        const post = {
            'title': e.target.newTitle.value,
            'content': e.target.newContent.value,
            'username': localStorage.getItem("username"),
            'ownerId': localStorage.getItem("userID"),

        };
        const token = localStorage.getItem('token');
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
            <Container>
            <Box border='1px' borderColor='gray.300' p='4' borderRadius='lg' margin='50px 0px 50px 0px' bgColor='rgb(240,242,245)'>
            <form onSubmit={(e)=>handleEditPost(e)}>

                <FormLabel className="label">Edit Title</FormLabel>
                <input id="newTitle" className="input" type="title"   />


                <FormLabel className="label">Edit Content</FormLabel>
                <input id="newContent" as="textarea" rows={3} className="input" type="text"  />
               
                <Center>
                <Button colorScheme='facebook' type="submit" > Save</Button>
                </Center>
            </form>
           </Box>
        </Container>
        )
    
}

