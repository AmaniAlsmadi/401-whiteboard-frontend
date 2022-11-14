import axios from 'axios';
import { useParams } from "react-router-dom";
import { Container, Box ,Button, Center,FormLabel,Input,FormControl } from '@chakra-ui/react';
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
            <Box border='1px' borderColor='gray.300' p='4' borderRadius='lg' margin='50px 0px 50px 0px' bgColor='rgb(54,86,148)'>
            <form onSubmit={(e)=>handleEditPost(e)}>
                <FormControl>
                <FormLabel className="label">Edit Title</FormLabel>
                <Input id="newTitle" className="input" type="title"   />
                </FormControl>
                <FormControl>
                <FormLabel className="label">Edit Content</FormLabel>
                <Input id="newContent" as="textarea" rows={3} className="input" type="text"  />
                </FormControl>
                <Center>
                <Button colorScheme='facebook' type="submit" > Save</Button>
                </Center>
            </form>
           </Box>
        </Container>
        )
    
}

