//import AddPost from "./components/Add-post-form";
import Post from "./components/Post";
//import './App.css';
import { useEffect } from "react";
import React from 'react';
import { When } from 'react-if';
import SignIn from "./components/signIn";
import { ChakraProvider  } from '@chakra-ui/react';
import { extendTheme, ColorModeScript,useColorMode,IconButton  } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { myTheme } from "./style/theme";
import { useSelector } from "react-redux";

function App() {

const loggedIn = useSelector(state=>state.auth.loggedIn);

  const theme = extendTheme({ 
    initialColorMode: 'light',
  useSystemColorMode: false,
});

const { colorMode, toggleColorMode } = useColorMode('');


  useEffect(() => {
  }, []);

  return (
  <div className="App"> 
     <ChakraProvider theme={myTheme}>
       
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      
      <When condition={loggedIn} >
      <Post colorMode={colorMode} toggleColorMode={toggleColorMode}/>
     </When>
     <When condition={!loggedIn}>
      
           <IconButton
        bg='one'
        aria-label='Send email'
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun /> }
        onClick={toggleColorMode}
        alignSelf='flex-end'
      />
      <SignIn colorMode={colorMode}/>
     </When>
    
      </ChakraProvider>
     </div>

  );
}

export default App;
