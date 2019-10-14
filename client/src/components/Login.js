import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

const Login = (props) => {
  console.log('Login - props', props)
  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    props.handleLogin()
    
  }

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={(e) => handleOnSubmit(e)} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button id='login-button'>LOGIN</button>
        <p>Dont have an account? Create one <Link to='/register'>HERE</Link></p>
      </form>
    </div>
  )
}

export default Login;
