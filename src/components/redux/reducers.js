import { ADD_USER, DELETE_USER, EDIT_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST } from "./actionType"

const initialstate = {
    loading: true,
    userList: [],
    userobj: {},
    errmessage: ""

}

export const Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case MAKE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FAIL_REQUEST:
            return {
                ...state,
                loading: false,
                errmessage: action.payload
            }
        case GET_USER_LIST:
            return {
                loading: false,
                errmessage: "",
                userList: action.payload,
                userobj: {}
            }
        case DELETE_USER:
            return {
                ...state,
                loading: false,

            }
        case ADD_USER:
            return {
                ...state,
                loading: false,

            }
        case EDIT_USER:
            return {
                ...state,
                loading: false,

            }
        case GET_USER_OBJ:
            return {
                ...state,
                loading: false,
                userobj:action.payload

            }

        default: return state
    }
}