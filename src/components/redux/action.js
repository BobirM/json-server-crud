import axios from "axios"
import { ADD_USER, DELETE_USER, EDIT_USER, FAIL_REQUEST, GET_USER_LIST, GET_USER_OBJ, MAKE_REQUEST } from "./actionType"
import {toast} from "react-toastify"

export const makeRequest = ()=>{
    return {
        type:MAKE_REQUEST
    }
}

export const failRequest = (err)=>{
    return {
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getUserList = (data)=>{
    return {
        type:GET_USER_LIST,
        payload:data
    }
}
export const deleteUser = (data)=>{
    return {
        type:DELETE_USER,
    }
}

export const addUser = ()=>{
    return {
        type:ADD_USER,
    }
}

export const editUser = ()=>{
    return {
        type:EDIT_USER,
    }
}

export const getUserObj = (data)=>{
    return {
        type:GET_USER_OBJ,
        payload:data
    }
}

export const FetchUserList = ()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get("http://localhost:8000/users").then(res=>{
            const userlist = res.data;
            dispatch(getUserList(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const Removeuser = (id)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.delete("http://localhost:8000/users/"+id).then(res=>{
            dispatch(deleteUser());
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}


export const FuntionAddUser = (data)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.post("http://localhost:8000/users/",data).then(res=>{
            dispatch(addUser());
            toast.success("succsess")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const FuntionEditUser = (data,id)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.put("http://localhost:8000/users/"+id,data).then(res=>{
            dispatch(editUser());
            toast.success("User edit succsess")
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

export const FetchUserObj = (code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get("http://localhost:8000/users/"+code).then(res=>{
            const userlist = res.data;
            dispatch(getUserObj(userlist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
