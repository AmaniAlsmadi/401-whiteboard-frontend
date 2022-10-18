import axios from "axios";
import { actionType } from "../config/constant";

export const getPost = async (dispatch) => {
  try {
    const allData = await axios.get(`https://thawing-peak-42804.herokuapp.com/post`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`
        }
    } )
    console.log( allData.data.post );
    dispatch({ type: actionType.GET_POST, payload: allData.data.post });
  } catch (e) {
    console.log(e)
  }
}

export const addPost = (dispatch, data) => {
    //console.log(data);
  axios.post(`https://thawing-peak-42804.herokuapp.com/post`, data)
    .then(res => dispatch({ type: actionType.ADD_POST, payload: res.data }))
}

export const deletePost = async (dispatch, id) => {
  const ownerId=localStorage.getItem("userID");
  try {
    await axios.delete( `https://thawing-peak-42804.herokuapp.com/post/${id}/${ownerId}` ,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`
        }
    },getPost(dispatch) ).then( ( res ) => {
        dispatch( { type: actionType.DELETE_POST, payload: res.data } );
    } )
    .catch( ( err ) => {
        console.log( err );
    })
}
catch ( error ) {
    console.log( error );
}}
  





