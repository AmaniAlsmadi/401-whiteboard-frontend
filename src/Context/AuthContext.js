import { createContext, useContext,useReducer} from "react";
//import cookies from "react-cookies";
//import axios from "axios";
import base64 from 'base-64';
import { Login,signup,Logout } from "../Actions/AuthAction";
import { AuthReducer } from "../Reducer/AuthReducer";
import { initialState } from "../config/initials";


const AuthContext = createContext();

// Custom Hook
export const UseAuthContext = () => useContext(AuthContext);

const AuthContextProvider = props => {

  const [user , dispatch ] = useReducer(AuthReducer, initialState)

  const canDo = (postOwnerId, loggedUserId) => {
    console.log(postOwnerId, loggedUserId);
    if (postOwnerId ===  parseInt(loggedUserId) || localStorage.getItem('capabilities').includes("delete", "update")) {
      return true;
    }
    return false;
  };

 

 const handleSignout = () => {
  Logout(dispatch);
 };

 
 
    const handleSignIn = (e) => {
        e.preventDefault();
        const data = {
          username: e.target.email.value,
          password: e.target.password.value
        };
    
        const encodedCredintial = base64.encode(`${data.username}:${data.password}`);
        
       Login(dispatch, encodedCredintial);
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
      signup(dispatch, data);
    } else{alert('passwords do not match')};}

    

      const value = {handleSignIn, handleSignUp,handleSignout,canDo, user};

    return (
        <AuthContext.Provider value={value}>
        {props.children}
        </AuthContext.Provider>
    );
}
export default AuthContextProvider;