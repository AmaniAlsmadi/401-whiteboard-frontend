import React from "react";
import '../App.css';
import { Button, FormLabel, FormControl, Input, VStack, Container, Box } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { UseAuthContext } from '../Context/AuthContext.js';


export default function SignIn(props) {

    const { handleSignIn } = UseAuthContext();
   


    return (

        <Container>
            <Box
                border='1px'
                borderColor='tertiary'
                p='4'
                borderRadius='lg'
                bgColor={props.colorMode === 'light' ? 'quaternary' : 'secondary' }
                marginBlock='50px'
            >
                <form onSubmit={handleSignIn}>
                    <VStack>
                        <FormControl>
                            <FormLabel >Email address</FormLabel>
                            <Input className="input" type="emai" id="email" placeholder="Enter email" />
                        </FormControl>
                        <FormControl>

                            <FormLabel >Password</FormLabel>
                            <Input className="input" type="password" id="password" placeholder="Password" />
                        </FormControl>
                        <Button bg='one' type="submit">
                            Sign in
                        </Button>
                        <Link to={`/signup`} ><Input type="submit" value="If you don't have account sign up here" /> </Link>

                    </VStack>
                </form>
            </Box>
        </Container>
    )
}