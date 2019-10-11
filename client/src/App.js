import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './App.css';
import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Workouts from './components/Workouts';
import SingleWorkout from './components/SingleWorkout';
import {
  loginUser,
  registerUser,
  showWorkouts,
  showWorkout,
  postWorkout,
  putWorkout,
  destroyWorkout,
  verifyUser
} from './services/api-helper';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      currentUser: null,
      workouts: [],
      workout: null,
      clicked:false,
      authFormData: {
        username: "",
        password: ""
      }
    }
  }

  // onClick function to redirect to the workouts component 
  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleRegisterButton = () => {
    this.props.history.push('/register')
  }

  componentDidMount = async () => {
    this.getWorkouts();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser })
    }
  }

  getWorkouts = async () => {
    const workouts = await showWorkouts();
    this.setState({ workouts })
  }

  getWorkout = async (id) => {
    const workout = await showWorkout(id);
    this.setState({ workout })
  }

  // Function to login a user
  // we set the user data in state and the JWT in local storage
  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/")
  }

  // Function to register a user
  // After register, we just call the login function with the same data
  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  // Function to logout user
  // We delete the token from local storage and set the current user in state back to null
  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    })
  }


  // Handle change function for the auth forms
  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }



  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <main>
        <Route exact path="/" render={(props) => (
          <Landing
            currentUser={this.state.currentUser}
            handleLogin={this.handleLogin}
            handleLoginButton={this.handleLoginButton}
            handleRegisterButton={this.handleRegisterButton}
            handleLogout={this.handleLogout}
          />)} />
        <Route exact path="/login" render={(props) => (
          <Login
            handleLogin={this.handleLogin}
            handleLoginButton={this.handleLoginButton}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} 
          />)} />
        <Route exact path="/register" render={(props) => (
          <Register
            handleRegister={this.handleRegister}
            handleRegisterButton={this.handleRegisterButton}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />)} />
        <Route exact path="/workouts" render={(props) => (
          <Workouts
            workouts={this.state.workouts}
            handleClick={this.handleClick}
            clicked={this.state.clicked}
          />)} />
        <Route exact path="/workouts/:id" render={(props) => (
          <SingleWorkout {...props}
            workout={this.state.workout}
            getWorkout = {this.getWorkout}
          />)} />
        
        </main>
        <Footer />
      </div>
    )
  }
  
}

export default withRouter(App);
