import axios from "axios";
import React from 'react';
import{ Button ,HStack, FormControl,Input} from '@chakra-ui/react';
import { UsePostContext } from "../Context/PostContext";


function AddComment(props) {
    const { getData }= UsePostContext();
    //const {content, setContent} = React.useState('');

    const handleAddComment = async (e) => {
        e.preventDefault();
        const comment = {
            'content': e.target.content.value,
            'userId': props.postId,
            'ownername': localStorage.getItem("username"),
            'ownerId': localStorage.getItem("userID"),
            
        };
        await axios.post(
            `https://thawing-peak-42804.herokuapp.com/comment/${props.postId}`,
            comment
        ).then(() => {
            getData();
        });
    };
    return (
        
            <form p='4' onSubmit={handleAddComment}>
                <HStack>
                    <FormControl>
                 <Input className="commentInput" id='content' placeholder="add comment" />
                 </FormControl>
                <Button bg='one' size='md' type="submit" >
                    Comment
                </Button> 
                </HStack>
            </form>
       
    );
}

export default AddComment;