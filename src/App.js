
import AddPost from "./components/Add-post-form";
import Post from "./components/Post";
import { useState } from "react";
import React from 'react';

function App() {

  const [rerender, setRerender] = useState(false);

  const handleRerender = () => {
    setRerender(!rerender);
  };
  
  return (
    <div>
      <AddPost getData={handleRerender}/>
      <Post rerender={rerender}/>
    </div>
  );
}

export default App;