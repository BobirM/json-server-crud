import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FetchUserList ,Removeuser} from './redux/action';
import { useEffect } from 'react';
import { Link } from "react-router-dom"
import {toast} from "react-toastify"

function UserList() {

    const dispatch = useDispatch();

    const { loading, userList, errmessage } = useSelector(state => state.user)

    useEffect(() => {
        dispatch(FetchUserList())
    }, [])

    console.log(loading, userList)

    const handledelete = (id) => {
        dispatch(Removeuser(id))
        dispatch(FetchUserList())                  
        toast.success("Delete user")
    }

    return (

        loading ? <div><h4 className='text-primary'>loading...</h4></div> : errmessage ? <div><h4 className='text-danger'>{errmessage}</h4></div> :
            <div>
                        <h4>Users</h4>
                <div className="card">
                    <div className="card-header ">
                        <div className='d-flex justify-content-end'>
                            <Link to={'/users/add'} className="btn btn-primary">Add User</Link>
                        </div>
                    </div>
                    <div className="card-body">
                        <table className='table table-striped table-hover'>
                            <thead>
                                <tr className=''>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList && userList.map((item, index) =>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>
                                                <Link to={'/users/edit/'+item.id} className='btn btn-success me-1'>edit</Link>
                                                <Link className='btn btn-danger' onClick={()=>handledelete(item.id)}>delete</Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    )
}

export default UserList