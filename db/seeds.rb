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
bench_press = Exercise.create!( name: 'Bench Press')
db_incline_bench_press = Exercise.create!( name: 'DB Incline Bench Press')
standing_shoulder_press = Exercise.create!( name: 'Standing Shoulder Press')
lat_raise = Exercise.create!( name: 'Lat Raise')
skullcrushers = Exercise.create!( name: 'Skullcrushers')
triceps_pressdown = Exercise.create!( name: 'Triceps Pressdown')
deadlifts = Exercise.create!( name: 'Deadlifts')
cable_rows = Exercise.create!( name: 'Cable Rows')
pull_ups = Exercise.create!( name: 'Pull Ups')
shrugs = Exercise.create!( name: 'Shrugs')
preacher_curls = Exercise.create!( name: 'Preacher Curls')
incline_db_curls = Exercise.create!( name: 'Incline DB Curls')

legs = Workout.create!( name: 'Legs', user: user)
push = Workout.create!( name: 'Push', user: user)
pull = Workout.create!( name: 'Pull', user: user)

Routine.create!([
    {exercise: squats, workout: legs},
    {exercise: leg_press, workout: legs},
    {exercise: leg_ext, workout: legs},
    {exercise: leg_curls, workout: legs},
    {exercise: lunges, workout: legs},
    {exercise: calf_raise, workout: legs},
    {exercise: bench_press, workout: push},
    {exercise: db_incline_bench_press, workout: push},
    {exercise: standing_shoulder_press, workout: push},
    {exercise: lat_raise, workout: push},
    {exercise: skullcrushers, workout: push},
    {exercise: triceps_pressdown, workout: push},
    {exercise: deadlifts, workout: pull},
    {exercise: cable_rows, workout: pull},
    {exercise: pull_ups, workout: pull},
    {exercise: shrugs, workout: pull},
    {exercise: preacher_curls, workout: pull},
    {exercise: incline_db_curls, workout: pull},
])
