import { actionType } from "../config/constant";

export const AuthReducer = (state, action) => {
    switch (action.type) {
        case actionType.REQUEST_LOGIN:
            return {
                ...state,
                loading: true,
            }
        case actionType.LOGIN:
            return {
                ...state,
                user: action.payload.user,
                loading: false,
                loggedIn: true,
                role: action.payload.role,
                capabilities: action.payload.capabilities,
                token: action.payload.token,
                username: action.payload.username,
                userID: action.payload.userID,
            };
        case actionType.LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                loggedIn: false,
            };
        case actionType.LOGOUT:
            return {
                ...state,
                user: {},
                errorMessage: null,
                loading: false,
                loggedIn: false,
                role: '',
                capabilities: '',
                token: '',
                username: '',
                userID: '',
            };
        case actionType.REQUEST_SIGNUP:
            return {
                ...state,
                loading: true,
            }
        case actionType.SIGNUP_ERROR:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload,
                loggedIn: false,
            };
        default:
            throw new Error(`Unkown action type: ${action.type}`);
            
    }
}