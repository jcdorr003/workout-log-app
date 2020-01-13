import React from "react";
import "../css/Workouts.css";
import { Link, Redirect } from "react-router-dom";

class Workouts extends React.Component {
  constructor(props) {
    super(props);
    // We set two boolean values in state to check if the forms should be shown
    this.state = {
      isAdd: false,
      isEdit: false
    };
  }
  render() {
    return (
      <div className="workouts-wrapper">
        {this.props.currentUser ? (
          <div className="user-container">
            <h3>
              Welcome,{" "}
              {this.props.currentUser && this.props.currentUser.username}!
            </h3>
            <button onClick={this.props.handleLogout}>LOGOUT</button>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
        <div className="workouts-container">
          {this.props.workouts.map(workout => (
            <div className="workout-cards" key={workout.id}>
              {/* Here is where we user a terinary for the edit form.
              If the isEdit in state is set to the current food id, then we show an edit form for just that item */}
              {this.state.isEdit === workout.id ? (
                <div>
                  <form
                    onSubmit={e => {
                      e.preventDefault();
                      this.props.updateWorkout(workout);
                      this.setState({
                        isEdit: false
                      });
                    }}
                  >
                    <input
                      name="name"
                      type="text"
                      value={this.props.formData.name}
                      onChange={this.props.handleChange}
                    />
                    <button>Submit</button>
                  </form>
                </div>
              ) : (
                <div className="link-container">
                  <Link
                    id="workout-link"
                    to={`/workouts/${workout.id}`}
                    onClick={() => {
                      this.props.getWorkout(workout.id);
                    }}
                  >
                    {workout.name}
                  </Link>
                  <React.Fragment>
                    <button
                      onClick={() => {
                        // the edit form data is preset using the setFoodForm function and the current foods data
                        this.props.setWorkoutForm(workout);
                        // then we set isEdit in state to the current foods id
                        this.setState({
                          isEdit: workout.id
                        });
                      }}
                    >
                      EDIT
                    </button>
                    <button
                      onClick={() => {
                        this.props.deleteWorkout(workout);
                      }}
                    >
                      DELETE
                    </button>
                  </React.Fragment>
                </div>
              )}
            </div>
          ))}
          <div className="add-workout">
            {this.state.isAdd ? ( // Same setup as before but since there will only ever be one add form, a simple true/false boolean will work
              // When the 'Add' button is clicked, a create food form is shown.
              // When the 'Submit' button is clicked, when ship the data to our API and reset the form back to a button
              <div id="add-form">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    this.props.handleSubmit();
                    this.setState({ isAdd: false });
                  }}
                >
                  <input
                    name="name"
                    type="text"
                    value={this.props.formData.name}
                    onChange={this.props.handleChange}
                  />
                  <button>SUBMIT</button>
                </form>
              </div>
            ) : (
              <button
                onClick={() => {
                  this.setState({ isAdd: true });
                }}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Workouts;
