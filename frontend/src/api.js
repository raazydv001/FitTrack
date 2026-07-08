import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
export const createWorkout = (data) => api.post('/workouts', data);
export const getWorkouts = (userId) => api.get(`/workouts/${userId}`);
export const createWeight = (data) => api.post('/weights', data);
export const getWeights = (userId) => api.get(`/weights/${userId}`);
export const getDashboard = (userId) => api.get(`/dashboard/${userId}`);
