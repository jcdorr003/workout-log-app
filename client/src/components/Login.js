import React from 'react';
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
      <form onSubmit={(e) => handleOnSubmit(e)} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
