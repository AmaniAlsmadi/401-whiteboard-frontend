import { createContext, useContext,useState} from "react";
import cookies from "react-cookies";
import axios from "axios";
import base64 from 'base-64';

const AuthContext = createContext();

// Custom Hook
export const UseAuthContext = () => useContext(AuthContext);

const AuthContextProvider = props => {

  const [loggedin, setLoggedin] = useState(false);
  const capabilities = cookies.load('capabilities');
  const userID = cookies.load('userID');
  const canDo = (postOwnerId, loggedUserId) => {
    //console.log(loggedUserId, postOwnerId);
    if (+postOwnerId === +loggedUserId || capabilities.includes("update")) {
      return true;
    }
    return false;
  };

 const checkToken = () => {
  const token = cookies.load('token');
  console.log(token);
  if (token) {
    setLoggedin(true);
  }
 }

 const handleSignout = () => {
  cookies.remove('token');
 cookies.remove('username');
 cookies.remove('userID');
 cookies.remove('role');
 setLoggedin(false);
 };

 
 
    const handleSignIn = (e) => {
        e.preventDefault();
        const data = {
          username: e.target.email.value,
          password: e.target.password.value
        };
    
        const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
        
        axios.post(`https://thawing-peak-42804.herokuapp.com/login`, {}, {
          headers: {
            Authorization: `Basic ${encodedCredintial}`
          }
        })
          .then(res => {
            console.log(res.data)
            alert(`welcome ${res.data.username}`);
            cookies.save('token', res.data.token);
            cookies.save('userID', res.data.id); 
            cookies.save('username', res.data.username);
            cookies.save('role', res.data.role);
            cookies.save('capabilities', res.data.capabilities);
            setLoggedin(true);
            //window.location.href = '/post';
          })
          .catch(() => alert('Invalid Login'));
      }

      const handleSignUp = async (e) => {
        e.preventDefault();
        const data = {
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
          role: e.target.role.value,
        };
    if (data.password === e.target.confirmPassword.value) {
        await axios.post(`https://thawing-peak-42804.herokuapp.com/signup`, data)
        
        .then(res => {
          console.log(res.data)
          alert(`signup successfully , please login`)
          window.location.href = '/';
        })
        .catch(() => alert('Error try again'));
    } else{alert('passwords do not match')};}

      const value = {handleSignIn, handleSignUp,loggedin, setLoggedin, checkToken,handleSignout,canDo,userID};

    return (
        <AuthContext.Provider value={value}>
        {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;