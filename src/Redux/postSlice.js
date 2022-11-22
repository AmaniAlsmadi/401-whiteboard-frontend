import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        GET_POST: (state, action) => {
            state.posts = action.payload;
        },
        ADD_POST: (state, action) => {
            state.posts = [...state.posts, action.payload];
        },
        DELETE_POST: (state, action) => {
            state.posts = state.posts.filter(post => post._id !== action.payload);
        },

    },
});
export const posts = state => state.post.posts;

export const { GET_POST, ADD_POST, DELETE_POST } = postSlice.actions;
export default postSlice.reducer;