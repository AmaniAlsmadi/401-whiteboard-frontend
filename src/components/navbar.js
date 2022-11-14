import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import { UseAuthContext } from '../Context/AuthContext.js';
import { Circle,HStack,Text,IconButton } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';



function NavBar(props) {
    
  const {handleSignout} = UseAuthContext();
  

  return (
    <Navbar className='navbar'>
      <Container>
        <Navbar.Brand>WHITEBOARD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          
            
            <HStack>
              <Text>Signed in as:</Text>
              <Circle size='50px' bgGradient='linear(to-r, blue.600, blue.500, blue.400)' fontSize='xs'> {localStorage.getItem('username')}</Circle>
          </HStack>
        </Navbar.Collapse>
        <Button onClick={handleSignout} className="postButtons"  type="submit">
                log out
            </Button>

            <IconButton
        colorScheme='facebook'
        aria-label='Send email'
        icon={props.colorMode === 'light' ? <FaMoon /> : <FaSun /> }
        onClick={props.toggleColorMode}
        alignSelf='flex-end'
      />
      </Container>
    </Navbar>
  );
}

export default NavBar;