import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import Workouts from "./components/Workouts";
import SingleWorkout from "./components/SingleWorkout";
import {
  loginUser,
  registerUser,
  showWorkouts,
  showWorkout,
  postWorkout,
  putWorkout,
  destroyWorkout,
  verifyUser
} from "./services/api-helper";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
      workouts: [],
      workout: null,
      formData: {
        name: ""
      },
      clicked: false,
      authFormData: {
        username: "",
        password: ""
      }
    };
  }

  handleLoginButton = () => {
    this.props.history.push("/login");
  };

  handleRegisterButton = () => {
    this.props.history.push("/register");
  };

  componentDidMount = async () => {
    this.getWorkouts();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser });
    }
  };

  getWorkouts = async () => {
    const workouts = await showWorkouts();
    this.setState({ workouts });
  };

  getWorkout = async id => {
    const workout = await showWorkout(id);
    this.setState({ workout });
  };

  addWorkout = async () => {
    const newWorkout = await postWorkout(this.state.formData);
    this.setState(prevState => ({
      workouts: [...prevState.workout, newWorkout],
      formData: {
        name: ""
      }
    }));
  };

  updateWorkout = async workout => {
    const updatedWorkout = await putWorkout(this.state.formData, workout.id);
    const index = this.state.workouts.indexOf(workout);
    const workoutsArray = this.state.workouts;
    workoutsArray[index] = updatedWorkout;
    this.setState({
      workouts: workoutsArray
    });
  };

  deleteWorkout = async workout => {
    await destroyWorkout(workout.id);
    const index = this.state.workouts.indexOf(workout);
    const workoutsArray = this.state.workouts;
    console.log("this is workouts array", workoutsArray);
    workoutsArray.splice(index, 1);
    this.setState({
      workouts: workoutsArray
    });
  };

  setWorkoutForm = workout => {
    this.setState({
      formData: {
        name: workout.name
      }
    });
  };

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/");
  };

  handleRegister = async e => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
    this.props.history.push("/");
  };

  handleLogout = () => {
    localStorage.removeItem("authToken");
    this.setState({
      currentUser: null
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ formData: { [name]: value } });
  };

  authHandleChange = e => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  };

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          handleLogout={this.handleLogout}
        />
        <main>
          <Route
            exact
            path="/"
            render={props => (
              <Landing
                currentUser={this.state.currentUser}
                handleLogin={this.handleLogin}
                handleLoginButton={this.handleLoginButton}
                handleRegisterButton={this.handleRegisterButton}
                handleLogout={this.handleLogout}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                handleLogin={this.handleLogin}
                handleLoginButton={this.handleLoginButton}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={props => (
              <Register
                handleRegister={this.handleRegister}
                handleRegisterButton={this.handleRegisterButton}
                handleChange={this.authHandleChange}
                formData={this.state.authFormData}
              />
            )}
          />
          <Route
            exact
            path="/workouts"
            render={props => (
              <Workouts
                currentUser={this.state.currentUser}
                handleLogout={this.handleLogout}
                workouts={this.state.workouts}
                formData={this.state.formData}
                getWorkout={this.getWorkout}
                deleteWorkout={this.deleteWorkout}
                handleSubmit={this.addWorkout}
                handleChange={this.handleChange}
                setWorkoutForm={this.setWorkoutForm}
                updateWorkout={this.updateWorkout}
              />
            )}
          />
          <Route
            exact
            path="/workouts/:id"
            render={props => (
              <SingleWorkout
                {...props}
                workout={this.state.workout}
                getWorkout={this.getWorkout}
              />
            )}
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
