import { createContext, useContext, useState} from "react";
import axios from "axios";
import cookies from 'react-cookies';



const AuthContext = createContext();
export const UsePostContext = () => useContext(AuthContext);
const PostContextProvider = props => {

    const [role, setRole] = useState('');
    const [post, setPost] = useState([]);

    const getData = async () => {
        try {
            const allData = await axios.get(`https://thawing-peak-42804.herokuapp.com/post`);
            setPost(allData.data.post);
            console.log(allData.data.post);
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        const token = cookies.load('token');
        try {
            await axios.delete(`https://thawing-peak-42804.herokuapp.com/post/${id}`, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              })
            getData();
        } catch (error) {
            console.log(error);
        }
    };



    const handleAddPost = async (e) => {
        e.preventDefault();
        const post = {
            'title': e.target.title.value,
            'content': e.target.content.value,
            'username': cookies.load("username"),
            'ownerId': cookies.load("userID"),
        };
        await axios.post(
            `https://thawing-peak-42804.herokuapp.com/post`, post ).then(() => {
            getData();
        });
    };

    const deleteComment = async (id) => {
        const token = cookies.load('token');
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
        setRole(cookies.load('role'));
        getData();
    }

    
  
    const value = {role, setRole , post, getData, handleDelete, deleteComment,checkRole,handleAddPost};
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default PostContextProvider;