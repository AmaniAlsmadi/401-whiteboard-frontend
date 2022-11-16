//import AddPost from "./components/Add-post-form";
import Post from "./components/Post";
//import './App.css';
import { useEffect } from "react";
import React from 'react';
import { When } from 'react-if';
import SignIn from "./components/signIn";
import { UseAuthContext } from './Context/AuthContext.js';
import { ChakraProvider  } from '@chakra-ui/react';
import { extendTheme, ColorModeScript,useColorMode,IconButton  } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { myTheme } from "./style/theme";

function App() {
  const {user} = UseAuthContext();

  const theme = extendTheme({ 
    initialColorMode: 'light',
  useSystemColorMode: false,
});

const { colorMode, toggleColorMode } = useColorMode('');


  useEffect(() => {
  }, []);

  return (
     <ChakraProvider theme={myTheme}>
       
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <div className="App"> 
      <When condition={user.loggedIn} >
      <Post colorMode={colorMode} toggleColorMode={toggleColorMode}/>
     </When>
     <When condition={!user.loggedIn}>
      
           <IconButton
        bg='one'
        aria-label='Send email'
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun /> }
        onClick={toggleColorMode}
        alignSelf='flex-end'
      />
      <SignIn colorMode={colorMode}/>
     </When>
     </div>
      </ChakraProvider>
    

  );
}

export default App;
