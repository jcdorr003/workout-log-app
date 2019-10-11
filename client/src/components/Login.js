import React from 'react';
import '../css/Login.css';

const Login = (props) => {
  return (
    <div className='login-container'>
      <h2>login</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
        props.handleLogin();}} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;
