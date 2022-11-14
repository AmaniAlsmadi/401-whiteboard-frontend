import axios from 'axios';
import { useParams } from "react-router-dom";
import cookies from "react-cookies";
import { Container, Box, Button, HStack,FormControl,Input } from '@chakra-ui/react';




export default function EditComment() {

    const { id } = useParams();


    const handleEditComment = async (e) => {
        e.preventDefault();
        const comment = {
            'content': e.target.newContent.value,
            'username': cookies.load("ownername"),
            'ownerId': cookies.load("ownerId"),

        };
        const token = localStorage.getItem('token');
        console.log(comment);
        console.log(id);

        try {
            await axios.put(`https://thawing-peak-42804.herokuapp.com/comment/${id}`, comment, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(() => {
                window.location.href = `/`;
            })

        } catch (error) {
            console.log(error);
        }
    }





    return (
        <Container>
            <Box border='1px' borderColor='gray.300' p='4' borderRadius='lg' margin='50px 0px 50px 0px' bgColor='rgb(54,86,148)'>
                <form className="commentForm" onSubmit={handleEditComment}>
                    <HStack>
                        <FormControl>
                        <Input className="commentInput" id="newContent" type="text" placeholder="Edit comment" />
                       </FormControl>
                        <Button colorScheme='facebook' type="submit">
                            Edit
                        </Button></HStack>
                </form>
            </Box>
        </Container>
    )

}

