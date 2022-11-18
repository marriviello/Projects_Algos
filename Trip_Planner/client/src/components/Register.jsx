import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'

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
        <div>
            {/* Navbar */}
            <nav className="navbar justify-content-start align-items-center p-3 mr-4">
                <a className="navbar-brand" href="/trips">
                    <img width="40" height="40" alt="airplane_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjmLj5xb476WS04R2uix_v00uGJBMfXlsQYw&usqp=CAU"></img>
                </a>
                <Link to={"/trips"} className="navbar-brand text-decoration-none text-white"><h4>Login</h4></Link>
                <Link to={"/trip/create"} className="navbar-brand text-decoration-none text-white"><h4>Register</h4></Link>
            </nav>

            <div style="background-image: url('https://w0.peakpx.com/wallpaper/102/600/HD-wallpaper-green-hills-green-mountains-nature-fields-misty-forests-valley.jpg');" className="p-5 text-center bg-image">
                <div className="d-flex justify-content-center align-items-center mt-5">
                    <div className="text-white">
                    <h1 className="mb-3">Stay Organized with Trip Planner</h1>
                    <h5 className="mb-4">
                        Best software for vacation planning
                    </h5>
                    <a className="btn btn-outline-light btn-lg m-2" href="#reg-page"
                        role="button" rel="nofollow" target="_blank">Sign-up</a>
                    <a className="btn btn-outline-light btn-lg m-2" href="#login-page"
                        target="_blank" role="button">Login</a>
                    </div>
                </div>
            </div>

            {/* Register Form */}
            <div id="reg-page" className="d-flex justify-content-center m-5">
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
                        <input type="password" className="form-control" name="" onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
                        <button className="btn btn-success">Register</button>
                    </form>
                </div>

                {/* Login Form */}
                <div id="login-page" className='w-30'>
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
        </div>
)
}

export default Register