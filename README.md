# Project Overview


## Project Description

Workout log application using React.js and Rails. My goal is to create an application that is similar to a note taking app, but specializing in logging workouts, and allows the user to see their workout schedule as well as create, update, and delete workouts/ exercises.

## CRUD 
- Create workouts and exercises
- Show workout and exercises for the day as well as the week
- Update workout and exercises
- Delete a workout/ exercise

## Project Links

- [github repo](https://github.com/jcdorr003/workout-log-app.git)
- [deployment]()

## Wireframes

![wireframe1](https://res.cloudinary.com/jcdorr003/image/upload/v1570203334/Image_from_iOS_mxpiem.jpg)
![wireframe2](https://res.cloudinary.com/jcdorr003/image/upload/v1570203334/Image_from_iOS_1_vldqqj.jpg)
![ERD](https://res.cloudinary.com/jcdorr003/image/upload/v1570203334/Image_from_iOS_2_t8htz8.jpg)
![ReactArch](https://res.cloudinary.com/jcdorr003/image/upload/v1570203334/Image_from_iOS_3_aininj.jpg)

## API

Will be creating an API with workout and exercise data


#### MVP
- Create database with users, workouts, and exercises
- Build back-end with rails 
- Render workouts and exercises based on a weekly schedule

#### PostMVP EXAMPLE

- Connect to calender app

## React Component Hierarchy

Header, App, and Footer will be the main components. The App component is the brain and will have routes to Past, Today, Home, New, and Schedule. 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Home | This will render the users workout for the day |
| Today | This will render the details of the workout for the day and allow the user to input their exercise data|
| Past | This will render the previous weeks workouts |
| New | This will render a form to input a workout and exercises into the users schedule |
| Schedule | This will render the users workouts for the week |

## Timeline Summary
 My goal for completion is Thursday night on the 10th of October. This way if there are any small last minute changes that need to be made, I will have a couple days to implement them. I have a simple wireframe and ERD drawn out but plan on spending the first two days perfecting those as well as setting up the database. By Monday morning I would like to have the database completely set up. Then I can work on the controller, routes, and api-helper monday. By Tuesday I would like to be working on the front-end. I will spend most of the day Tuesday working on React, setting up the front-end functionality of this app. If I can finish most of that tuesday that will allow me to spend Wednesday and Thursday on styling.

## Timeline

| Days | Goals |
| --- | :---: |
| Weekend 1 | Build database and set up basic layout of the application in rails and react |
| Monday | Complete controller and routes |
|Tuesday | Connect Rails to React/ API-Helper |
|Wednesday | Finish up functionality and start styling |
|Thursday | Styling |
| Friday | Have all functionality completed and most of the styling finished |
| Weekend | Implement any small last minute changes |




## Additional Libraries
 Axios for api calls

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object