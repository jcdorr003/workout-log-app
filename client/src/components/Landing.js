import React from 'react';
import '../css/Landing.css';
import { Link } from 'react-router-dom';

const Landing = (props) => {
  console.log("Landing Page")
  return (
    <div className='landing-container'>
          {props.currentUser
              ?
              <div>
                {/* This is a greeting to the user if there user info has been set in state.
                We use the guard operator to check '&&' */}
                <div className='logout-container'>
                  <h3>Hi, {props.currentUser && props.currentUser.username}<button onClick={props.handleLogout}>Logout</button></h3>
                </div>
                <Link to='/workouts'>Workouts</Link>
              </div>
              :
              <div>
              <button onClick={props.handleLoginButton}>Login</button>
              <button onClick={props.handleRegisterButton}>Register</button>
              </div>
            }
        </div>
  )
}

export default Landing;