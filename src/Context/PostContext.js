import { createContext, useContext,useReducer, useState} from "react";
import axios from "axios";
//import cookies from 'react-cookies';
import { PostReducer } from "../Reducer/PostReducer";
import { postState } from "../config/initials";
import { getPost ,addPost,deletePost} from "../Actions/PostAction";

const AuthContext = createContext();
export const UsePostContext = () => useContext(AuthContext);
const PostContextProvider = props => {

 const [post, dispatch] = useReducer(PostReducer, postState);

    const [role, setRole] = useState('');
    
   

    const getData =  () => {
        try {
            getPost(dispatch);
        } catch (error) {
            console.log(error);
        }
    };


    const handleAddPost = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'username': localStorage.getItem("username"),
            'ownerId': localStorage.getItem("userID"),
        };
        addPost(dispatch, post);
        getPost(dispatch);

    }; 
    
    const handleDelete =  (id) => {
            deletePost(dispatch, id);
    };

    const deleteComment = async (id) => {
        const token = localStorage.getItem('token');
        try {
            await axios.delete(`https://thawing-peak-42804.herokuapp.com/comment/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }});
            getData();
        } catch (error) {
            console.log(error);
        }
    };

    const checkRole = () => {
        setRole(localStorage.getItem('role'));
        getData();
    };
    
  
    const value = {role, setRole , getData, handleDelete, deleteComment,checkRole,handleAddPost,post};
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default PostContextProvider;