import axios from "axios";
import { GET_POST, ADD_POST, DELETE_POST } from "../Redux/postSlice";

export const getPost = async (dispatch) => {
  try {
    const allData = await axios.get(`https://thawing-peak-42804.herokuapp.com/post`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`
        }
    } )
    console.log( allData.data.post );
    dispatch(GET_POST(allData.data.post));
  } catch (e) {
    console.log(e)
  }
}

export const addPost = (dispatch, data) => {
    //console.log(data);
  axios.post(`https://thawing-peak-42804.herokuapp.com/post`, data)
    .then(res => dispatch(ADD_POST( res.data )))
}

export const deletePost = async (dispatch, id) => {
  const ownerId=localStorage.getItem("userID");
  try {
    await axios.delete( `https://thawing-peak-42804.herokuapp.com/post/${id}/${ownerId}` ,{
        headers: {
            Authorization: `Bearer ${localStorage.getItem( 'token' )}`
        }
    },getPost(dispatch) ).then( ( res ) => {
        dispatch(DELETE_POST( res.data ));
    } )
    .catch( ( err ) => {
        console.log( err );
    })
}
catch ( error ) {
    console.log( error );
}}
  





