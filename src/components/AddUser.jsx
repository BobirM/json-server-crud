import React from 'react'
import { Link ,useNavigate} from "react-router-dom"
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux/es/exports';
import { FuntionAddUser } from './redux/action';

function AddUser() {

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const navigate = useNavigate()

	const dispatch = useDispatch()

	
	const handleSubmit = (e)=>{
		e.preventDefault()
		const userobj = { name, email, phone }
		dispatch(FuntionAddUser(userobj))
		console.log(userobj);
		navigate('/users')
	}

	return (
		<div className='d-flex justify-content-center'>
			<div className="col-md-4">
				<div className="card mt-4">
					<form onSubmit={handleSubmit}>
						<div className="card-header">
						</div>
						<div className="card-body">
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
							<Link className='btn btn-danger'>Cancel</Link>
						</div>
					</form>

				</div>
			</div>

		</div>
	)
}

export default AddUser