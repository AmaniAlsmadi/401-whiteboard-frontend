
import { React, useEffect } from "react";
import AddComment from "./Add-comment-form";
import { Link } from "react-router-dom";
import AddPost from "./Add-post-form";
import NavBar from "./navbar";
import { UsePostContext } from "../Context/PostContext";
import { UseAuthContext } from "../Context/AuthContext";
import '../App.css';
import { VStack, HStack, Container, Box, Circle, Spacer, Heading, Text, Button, Center } from '@chakra-ui/react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'


function Post(props) {

    const { post, handleDelete, deleteComment, checkRole } = UsePostContext();
    const { canDo } = UseAuthContext();
   

    useEffect(() => {
        checkRole();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
        
            <NavBar colorMode={props.colorMode} toggleColorMode={props.toggleColorMode} />
            <AddPost colorMode={props.colorMode}/>

            <VStack className="theCards">
                {post && post.map((post, idx) => {
                    return (

                        <Container key={idx} >
                            <Box border='1px' 
                            borderColor='gray.300' 
                            p='4' 
                            borderRadius='lg'
                            bgColor={ props.colorMode === 'light' ? 'gray.100' : 'rgb(26,32,44)' }
                            >
                                <Box>
                                    <Box>
                                        <HStack>
                                            <Circle size='40px' bgGradient='linear(to-r, blue.700, blue.500, blue.900)' color='white'>{post.username} </Circle>
                                            <Spacer />
                                            <Heading as='h4' size='md'>{post.title}</Heading>
                                            <Spacer />
                                        </HStack>
                                    </Box>
                                    <Text fontSize='xl'><Center> {post.content}</Center></Text>

                                </Box>


                                <Accordion defaultIndex={[0]} allowMultiple borderColor='gray.300'>
                                    <AccordionItem>
                                        <h2>
                                            <AccordionButton>
                                                <Box flex='1' textAlign='left'>
                                                    Comments
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={4}>
                                            {post.comments && post.comments.map((comment, idx) => {
                                                return (
                                                    <Box border='1px' borderColor='gray.300' p='2' borderRadius='lg' marginBottom='4' key={idx}>
                                                        <HStack className="commentCard">
                                                            <Box><HStack>
                                                                <Circle size='40px' bgGradient='linear(to-r, blue.700, blue.500, blue.900)' color='white'>{comment.ownername} </Circle>
                                                                <Text className="text">
                                                                    {comment.content}
                                                                </Text>
                                                            </HStack>
                                                            </Box>
                                                            <Spacer />
                                                            {canDo(comment.ownerId, localStorage.getItem('userID')) &&
                                                                <Box>
                                                                    <HStack>
                                                                        <Button variant='ghost' size="xs" onClick={() => deleteComment(comment.id)} >Delete</Button>
                                                                        <Link to={`/comment/${comment.id}`}><Button variant='ghost' size="xs" id={comment.id}>Edit</Button></Link>
                                                                    </HStack>
                                                                </Box>
                                                            }

                                                        </HStack>
                                                    </Box>
                                                );
                                            })}
                                            <AddComment postId={post.id} />
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>




                                {canDo(post.ownerId, localStorage.getItem('userID')) &&
                                    <Box p='4'>
                                        <HStack>
                                            <Spacer />
                                            <Button colorScheme='facebook' onClick={() => handleDelete(post.id)} >Delete Post</Button>
                                            <Link to={`/post/${post.id}`} ><Button colorScheme='facebook' >Edit Post</Button></Link>
                                            <Spacer />
                                        </HStack>
                                    </Box>
                                }
                            </Box>
                        </Container>

                    );
                })}
            </VStack>

        </>
    );
}
export default Post;