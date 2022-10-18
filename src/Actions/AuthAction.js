import axios from "axios";
import { actionType } from "../config/constant";

export const Login = (dispatch, payload) => {
    try{     
        dispatch({ type: actionType.REQUEST_LOGIN });   
        
        axios.post(`http://localhost:3001/login`, {}, {
          headers: {
            Authorization: `Basic ${payload}`
          }
        })
          .then(res => {
            //console.log(res.data);
            dispatch({ type: actionType.LOGIN, payload: res.data });
            localStorage.setItem('currentUser', JSON.stringify(res.data));
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('userID', res.data.id);
            localStorage.setItem('role', res.data.role);
            localStorage.setItem('capabilities', res.data.capabilities);
            
          })
          .catch(err => dispatch({type: actionType.LOGIN_ERROR, payload: err}));
      
    } catch(e) {
        dispatch({type: actionType.LOGIN_ERROR, payload: e}); 
    }};



    export const signup = async (dispatch, payload) => {
        try{
            dispatch({ type: actionType.REQUEST_SIGNUP });
            await axios.post(`http://localhost:3001/signup`, payload)
            .then(res => {
              console.log(res.data)
              alert(`signup successfully , please login`)
              window.location.href = '/';
            })
            .catch(() => alert('Error try again'));
        } catch(e) {
            dispatch({type: actionType.SIGNUP_ERROR, payload: e});
        }
    };


    export const Logout = (dispatch) => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userID');
      localStorage.removeItem('role');
      localStorage.removeItem('capabilities');
      dispatch({ type: actionType.LOGOUT });
    }
