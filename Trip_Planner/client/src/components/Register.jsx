import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const regHandler=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/register',{
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        },{withCredentials:true, credentials:'include'})
        .then((res)=>{
            navigate('/trips')
            console.log(res.data)
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassword("")
            setConfirmPassword("")
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }
    
    const loginHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/login',{
            email,
            password,
        }, {withCredentials:true, credentials:'include'})
        .then((res)=>{
            console.log(res)
            navigate('/trips')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div className="d-flex justify-content-center">
            <div className='w-50'>
                <h2>Register:</h2>
                <form onSubmit={regHandler} className='col-6'>
                    <label>First name:</label>
                    <input type="text" className="form-control" name="firstName" onChange={(e)=>setFirstName(e.target.value)}/>
                    { errors.firstName ? <p className='alert alert-danger'>{errors.firstName.message}</p> : null}
                    <label>Last name:</label>
                    <input type="text" className="form-control" name="lastName" onChange={(e)=>setLastName(e.target.value)}/>
                    { errors.lastName ? <p className='alert alert-danger'>{errors.lastName.message}</p> : null}
                    <label>Email:</label>
                    <input type="text" className="form-control" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                    { errors.email ? <p className='alert alert-danger'>{errors.email.message}</p> : null}
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                    { errors.password ? <p className='alert alert-danger'>{errors.password.message}</p> : null}
                    <label>Confirm Password:</label>
                    <input type="password" className="form-control" name="" onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <button className="btn btn-primary">Register</button>
                </form>
            </div>
            <div className='w-30'>
                <h2>Login</h2>
                <form onSubmit={loginHandler}>
                    <label>Email:</label>
                    <input type="text" className="form-control" name="email" onChange={((e) => setEmail(e.target.value))} />
                    <label>Password:</label>
                    <input type="password" className="form-control" name="password" onChange={((e) => setPassword(e.target.value))} />
                    <button className="btn btn-success my-5">Login</button>
                </form>
            </div>
        </div>
        
)
}

export default Register