import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EditComment from './components/EditPost';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import SignIn from './components/signIn';
import SignUp from './components/signUp';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route exact path="/post" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/post/:id" element={<EditComment />} />

      </Routes>
      
    </Router>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

