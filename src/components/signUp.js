import React from "react";
import '../App.css';
import { Button, FormLabel, FormControl, Input, VStack, Container, Box, HStack } from '@chakra-ui/react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { UseAuthContext } from '../Context/AuthContext.js';
import colorMode from '../App.js';


export default function signUp() {

    const { handleSignUp } = UseAuthContext();

    return (
        <Container>
            <Box
                border='1px'
                borderColor='gray.300'
                p='4'
                borderRadius='lg'
                margin='50px 0px 50px 0px'
                bgColor={colorMode === 'light' ? 'gray.100' : 'rgb(26,32,44)'}
            >
                <form onSubmit={handleSignUp}>
                    <VStack>
                        <FormControl>
                            <FormLabel className="label">User name</FormLabel>
                            <Input type="text" id="username" />
                        </FormControl>
                        <FormControl>
                            <FormLabel className="label">Email address</FormLabel>
                            <Input type="email" id="email" />
                        </FormControl>
                        <FormControl>
                            <FormLabel className="label">Password</FormLabel>
                            <Input type="password" id="password" />
                        </FormControl>
                        <FormControl>
                            <FormLabel className="label">confirm password</FormLabel>
                            <Input type="Password" id="confirmPassword" />
                        </FormControl>
                        <FormControl>
                            <FormLabel className="label" htmlFor="disabledSelect">Roles</FormLabel>
                            <Input type="text" id="role" placeholder="admin || user" />
                        </FormControl>
                        <HStack>
                            <Button colorScheme='facebook' type="submit">
                                Sign up
                            </Button>
                            <Link to={`/`} ><Button colorScheme='facebook'   >Cancel</Button></Link>
                        </HStack>
                    </VStack>
                </form>
            </Box>
        </Container >
    )
}
