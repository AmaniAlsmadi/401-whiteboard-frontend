//import AddPost from "./components/Add-post-form";
import Post from "./components/Post";
import './App.css';
import { useEffect, useState } from "react";
import React from 'react';
import { When } from 'react-if';
import SignIn from "./components/signIn";
import cookies from "react-cookies";
//import NavBar from "./components/navbar";

function App() {

  const [loggedin, setLoggedin] = useState(false);



  useEffect(() => {
    const token = cookies.load('token');
    console.log(token);
    if (token) {
      setLoggedin(true);
    }
  }, []);

  const handleSignout = () => {
     cookies.remove('token');
    cookies.remove('username');
    cookies.remove('userID');
    cookies.remove('role');
    setLoggedin(false);
    };

  return (
    <div className="App">
      <When condition={loggedin}>
      <Post handleSignout={handleSignout}/>
     </When>
     <When condition={!loggedin}>
      
      <SignIn setLoggedin={setLoggedin}/>
     </When>
  
    </div>
  );
}

export default App;
