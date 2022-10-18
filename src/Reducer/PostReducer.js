import { actionType } from "../config/constant";

export const PostReducer = (state, action) => {
    switch (action.type) {
        case actionType.GET_POST:
            //console.log(action.payload);
            return action.payload;
        case actionType.ADD_POST:
            return [...state, action.payload];
        case actionType.DELETE_POST:
            console.log(action.payload);
            return state.filter(post => post.id !== action.payload);
        default:
            return state;
    }
}
