const axios = require('axios');
const api = axios.create({
  baseURL: 'http://localhost:3000/'
});

export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', loginData)
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData })
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`
  return resp.data.user
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`
    const resp = await api.get('/auth/verify');
    return resp.data
  }
  return false
}

export const showWorkouts = async () => {
  const resp = await api.get(`/workouts`)
  return resp.data;
}

export const showExercises = async () => {
  const resp = await api.get(`/exercises`)
  return resp.data;
}

export const showWorkout = async (id) => {
  const resp = await api(`/workouts/${id}`)
  return resp.data;
}

export const postWorkout = async (item) => {
  const resp = await api.post(`/workouts`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
  return resp.data
}

export const putWorkout = async (item, id) => {
  const resp = await api.put(`/workouts/${id}`, item, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } }, item)
  return resp.data
}
export const destroyWorkout = async (id) => {
  const resp = await api.delete(`/workouts/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } });
  return resp.data;
}

export const putWorkoutExercise = async (workout_id, id) => {
  const resp = await api.put(`/workouts/${workout_id}/exercises/${id}`, null, { headers: { Authorization: `Bearer ${localStorage.getItem("jwt")}` } })
  return resp.data
}



