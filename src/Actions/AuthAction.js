import axios from "axios";
import {  REQUEST_LOGIN, LOGIN, LOGIN_ERROR, LOGOUT, REQUEST_SIGNUP, SIGNUP_ERROR } from "../Redux/authSlice";

export const Login = async(dispatch, payload) => {
    try{     
        dispatch(REQUEST_LOGIN());   
        
        await axios.post(`https://thawing-peak-42804.herokuapp.com/login`, {}, {
          headers: {
            Authorization: `Basic ${payload}`
          }
        })
          .then(res => {
            //console.log(res.data);
            dispatch( LOGIN(res.data));
            localStorage.setItem('currentUser', res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('userID', res.data.id);
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('capabilities', res.data.capabilities);
            
          })
          .catch(err => dispatch(LOGIN_ERROR()));
      
    } catch(e) {
        dispatch(LOGIN_ERROR()); 
    }};



    export const signup = async (dispatch, payload) => {
        try{
            dispatch(REQUEST_SIGNUP());
            await axios.post(`https://thawing-peak-42804.herokuapp.com/signup`, payload)
            .then(res => {
              console.log(res.data)
              alert(`signup successfully , please login`)
              window.location.href = '/';
            })
            .catch(() => alert('Error try again'));
        } catch(e) {
            dispatch(SIGNUP_ERROR());
        }
    };


    export const Logout = (dispatch) => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userID');
      localStorage.removeItem('role');
      localStorage.removeItem('capabilities');
      dispatch( LOGOUT());
    }

    