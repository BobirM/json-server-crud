import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import AddUser from './components//AddUser'
import UserList from "./components/UserList.jsx"
import UpdateUser from "./components/UpdateUser"
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <div className="App">
      <div className="container">
        <div className='mb-4'>
          <Link className=' m-1' to={'/'}>Home</Link>
          <Link className=' m-1' to={'/users'}>Users</Link>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UserList />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/edit/:code' element={<UpdateUser />} />
        </Routes>
        <ToastContainer />
      </div>

    </div>
  );
}

export default App;
