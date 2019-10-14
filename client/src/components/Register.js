import React from 'react';
import '../css/Register.css'

// This component handles our register form
const Register = (props) => {

  return (
    <div className='register-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={props.handleRegister} >
        <input name="username" type="text" value={props.formData.username} onChange={props.handleChange} />
        <input name="password" type="password" value={props.formData.password} onChange={props.handleChange} />
        <button id='register-button'>REGISTER</button>
      </form>
    </div>
  );
}

export default Register;