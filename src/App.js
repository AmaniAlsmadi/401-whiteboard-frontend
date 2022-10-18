//import AddPost from "./components/Add-post-form";
import Post from "./components/Post";
import './App.css';
import { useEffect } from "react";
import React from 'react';
import { When } from 'react-if';
import SignIn from "./components/signIn";
import { UseAuthContext } from './Context/AuthContext.js';

function App() {

  const {user} = UseAuthContext();



  useEffect(() => {
  }, []);

  return (
    
      <div className="App">
      <When condition={user.loggedIn}>
      <Post />
     </When>
     <When condition={!user.loggedIn}>
      
      <SignIn />
     </When>
     </div>
    

  );
}

export default App;
