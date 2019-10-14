import React, { Component } from 'react';
import '../css/SingleWorkout.css'
class SingleWorkout extends Component {
  state = {
    isAdd: false,
    isEdit: false
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
      <div className='routine-container'>
        {workoutData}
      </div>
    )
  }

}

export default SingleWorkout;