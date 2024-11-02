// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import { getCoursesForAdmin } from '../api';

const AdminDashboard = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await getCoursesForAdmin(token);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses for admin:', error);
      }
    };
    fetchCourses();
  }, [token]);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Manage Courses</h3>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h4>{course.title}</h4>
            <p>{course.description}</p>
            {/* Add buttons for Update/Delete functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
