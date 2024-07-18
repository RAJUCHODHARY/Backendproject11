import React, { useState } from 'react' 
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Login() {
const [email,setEmail]=useState()
const [Password,setPassword]=useState()
const navigate=useNavigate()
const handleSubmit=(e)=>{
  e.preventDefault()
  axios.post('http://localhost:3001/login', {email, Password})
  .then(result =>{console.log(result)
    if(result.data){
        navigate('/home')
    }
  })
  .catch(err => console.log(err))

}
  return (
    <>
     <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
         
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input type="email"
            placeholder='Enter Email'
            name='email'
            onChange={(e)=>setEmail(e.target.value)}
            className='form-control rounded-0' />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input type="possword"
            placeholder='Enter possword'
            name='possword'
            onChange={(e)=>setPassword(e.target.value)}
            className='form-control rounded-0' />
          </div>
          <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
        </form>

      </div>
     </div>
    </>
  )
}

export default Login
