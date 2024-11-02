import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const registerUser = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

export const fetchCourses = async () => {
  return await axios.get(`${API_URL}/courses`);
};

export const enrollCourse = async (courseId, token) => {
  return await axios.post(`${API_URL}/enroll`, { courseId }, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getCoursesForAdmin = async (token) => {
  return await axios.get(`${API_URL}/admin/courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
