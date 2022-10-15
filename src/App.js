//import AddPost from "./components/Add-post-form";
import Post from "./components/Post";
import './App.css';
import { useEffect } from "react";
import React from 'react';
import { When } from 'react-if';
import SignIn from "./components/signIn";
import { UseAuthContext } from './Context/AuthContext.js';

function App() {

  const {loggedin, setLoggedin,checkToken} = UseAuthContext();



  useEffect(() => {
    checkToken();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    
      <div className="App">
      <When condition={loggedin}>
      <Post />
     </When>
     <When condition={!loggedin}>
      
      <SignIn setLoggedin={setLoggedin}/>
     </When>
     </div>
    

  );
}

export default App;
