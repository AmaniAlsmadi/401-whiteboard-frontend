import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignUp from './components/signUp';
import AuthContextProvider from "./Context/AuthContext";
import EditPost from './components/EditPost';
import EditComment from './components/EditComment';
import PostContextProvider from "./Context/PostContext";
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Store from './Redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <React.StrictMode>
    <Provider store={Store}>  
  <AuthContextProvider>
  <PostContextProvider>
  <ChakraProvider>
    <Router>
      <Routes>
      
        <Route exact path="/" element={<App />} />

        <Route path="/signup" element={<SignUp />} />
        
        <Route path="/post/:id" element={<EditPost />} />

        <Route path="/comment/:id" element={<EditComment />} />

      </Routes>
      
    </Router>
   </ChakraProvider>
    </PostContextProvider>
    </AuthContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

