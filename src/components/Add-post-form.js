
import React from "react";
import { Container, Button, FormLabel,FormControl, Box, Center,Input } from '@chakra-ui/react';

import { UsePostContext } from "../Context/PostContext";


function AddPost(props) {
    const { handleAddPost } = UsePostContext();


    return (
        <Container>
            <Box border='1px'
             borderColor='gray.300' 
             p='4' 
             borderRadius='lg' 
             margin='50px 0px 50px 0px' 
            bgColor={ props.colorMode === 'light' ? 'gray.100' : 'rgb(26,32,44)' }
            >
                <form onSubmit={handleAddPost} >
                    <FormControl>
                    <FormLabel className="label">Title</FormLabel>
                    <Input type="title" placeholder="Enter title ..." id="title" />
                     </FormControl>
                     <FormControl>
                    <FormLabel className="label">Content</FormLabel>
                    <Input as="textarea" rows={3}  placeholder="Enter post ..." id="content" />
                    </FormControl>
                    <Center>
                        <Button colorScheme='facebook' type="submit" mt='4' >
                            Post
                        </Button></Center>
                </form>
            </Box>
        </Container>

    );
}

export default AddPost;