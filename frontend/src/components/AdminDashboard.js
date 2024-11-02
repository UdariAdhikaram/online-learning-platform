import React, { useEffect, useState } from 'react';
import { getCoursesForAdmin } from '../api';
import './AdminDashboard.css';

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
    <div className='body'>
    <div className="admin_dashboard_container">
  <h2>Admin Dashboard</h2>
  <h3>Manage Courses</h3>
  <ul>
    {courses.map((course) => (
      <li key={course._id}>
        <h4>{course.title}</h4>
        <p>{course.description}</p>
        <button className="update_button">Update</button>
        <button className="delete_button">Delete</button>
      </li>
    ))}
  </ul>
</div>
</div>
  );
};

export default AdminDashboard;
