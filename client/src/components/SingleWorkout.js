import React, { Component } from 'react';
import { loginUser } from '../services/api-helper';

class SingleWorkout extends Component {
  state = {

  }

  componentDidMount() {
    console.log('im here', this.props)
    let workoutsId = this.props.match.params.id;
    this.props.getWorkout(workoutsId)
  }


  render() {
    console.log("this is props", this.props.workout && this.props.workout.routines)
    let workoutData = this.props.workout !== null && this.props.workout.routines.map((d, i) => {
      return (
      <div key={i}>
        <p>{d.exercise.name}</p>
        <p>Weight: {d.weight} Sets: {d.sets} Reps: {d.reps}</p>
      </div>
      )
    })

    return (
      <div>
        {workoutData}
      </div>
    )
  }

}

export default SingleWorkout;