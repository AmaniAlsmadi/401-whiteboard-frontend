export const postState = [];

const userInfo = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

export const initialState = {
    user: userInfo,
    errorMessage: null,
    loading: false,
    loggedIn: token ? true : false,
    token: token,
    role: '',
    capabilities: "",
    username: "",
    userID: "",

};