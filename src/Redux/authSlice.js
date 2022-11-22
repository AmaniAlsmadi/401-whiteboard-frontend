import { createSlice } from "@reduxjs/toolkit";

const userInfo = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : {};
const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';

const initialState = {
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

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        REQUEST_LOGIN: (state, action) => {
            state.user = action.payload;
        },

        LOGIN: (state, action) => {
            state.user = action.payload.user;
            state.loading = false;
            state.loggedIn = true;
            state.role = action.payload.role;
            state.capabilities = action.payload.capabilities;
            state.token = action.payload.token;
            state.username = action.payload.username;
            state.userID = action.payload.userID;
        },

        LOGIN_ERROR: (state, action) => {
            state.errorMessage = action.payload;
            state.loading = false;
            state.loggedIn = false;
        },
        LOGOUT: (state) => {
            state.user = {};
            state.loggedIn = false;
            state.token = '';
            state.role = '';
            state.capabilities = "";
            state.username = "";
            state.userID = "";
        },
        REQUEST_SIGNUP: (state, action) => {
            state.user = action.payload;
            state.loading = true;
        },
        SIGNUP_ERROR: (state, action) => {
            state.user = action.payload;
            state.errorMessage = action.payload;
            state.loading = false;
            state.loggedIn = false;
        }
    },
});

export const users = state => state.user;
export const logged = state => state.loggedIn;

export const { REQUEST_LOGIN, LOGIN, LOGIN_ERROR, LOGOUT, REQUEST_SIGNUP, SIGNUP_ERROR } = authSlice.actions;
export default authSlice.reducer;