import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { FuntionEditUser } from './redux/action';
import { FetchUserObj } from './redux/action';

function UpdateUser() {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const { code } = useParams();
  const userobj = useSelector((s) => s.user.userobj)

  const dispatch = useDispatch()


  const handleSubmit = (e) => {
    e.preventDefault()
    const userobj = { id, name, email, phone }
    dispatch(FuntionEditUser(userobj,id))
    navigate('/users')
  }

  const cancelFunction=()=>{
    window.location.href= "/users"
  }

  useEffect(() => {
    dispatch(FetchUserObj(code))
  }, [])

  useEffect(() => {
    if (userobj) {
      setId(userobj.id)
      setName(userobj.name)
      setEmail(userobj.email)
      setPhone(userobj.phone)
    }
  }, [userobj])

  return (
    <div className='d-flex justify-content-center'>
      <div className="col-md-4">
        <div className="card mt-4">
          <form onSubmit={handleSubmit}>
            <div className="card-header">
            </div>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="">Id</label>
                <input type="text" value={id || ""} disabled onChange={e => setId(e.target.value)} className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="">Name</label>
                <input type="text" required value={name} onChange={e => setName(e.target.value)} className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="">email</label>
                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className='form-control' />
              </div>
              <div className="form-group">
                <label htmlFor="">phone</label>
                <input type="text" required value={phone} onChange={e => setPhone(e.target.value)} className='form-control' />
              </div>
            </div>
            <div className="card-footer">
              <button className='btn btn-success me-2' type='submit'>Submit</button>
              <Link className='btn btn-danger' onClick={cancelFunction}>Cancel</Link>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default UpdateUser