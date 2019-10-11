import React from 'react';
import '../css/Workouts.css';
import { Redirect } from 'react-router-dom';

class Workouts extends React.Component {
  state = {
    clicked: false,
    workout: null
  }

  

  handleClick = (workout) => {
    this.setState({
      clicked:true, 
      workout: workout
    })
  }

  
  render() {
    let workoutNames = this.props.workouts.map((workout, i) => {
      return <p key={i} onClick={()=>this.handleClick(workout)}>{workout.name}</p>
    })

    let workout = this.state.clicked ? <Redirect to={`/workouts/${this.state.workout.id}`}/> : null
  return (
    <div className='workouts-container'>
      {workoutNames}
      {workout}
    </div>
  )
  }
}

export default Workouts;