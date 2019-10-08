# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user = User.create(username: 'jcd3', password: '123456')

squats = Exercise.create!( name: 'Sqauts')
leg_press = Exercise.create!( name: 'Leg Press')
leg_ext = Exercise.create!( name: 'Leg Extensions')
leg_curls = Exercise.create!( name: 'Leg Curls')
lunges = Exercise.create!( name: 'Lunges')
calf_raise = Exercise.create!( name: 'Calf Raise')

legs = Workout.create!( name: 'Legs', user: user)

Routine.create!([
    {exercise: squats, workout: legs},
    {exercise: leg_press, workout: legs},
    {exercise: leg_ext, workout: legs},
    {exercise: leg_curls, workout: legs},
    {exercise: lunges, workout: legs},
    {exercise: calf_raise, workout: legs},
])
