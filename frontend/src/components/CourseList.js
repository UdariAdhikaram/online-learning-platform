import React, { useEffect, useState } from 'react';
import { fetchCourses, enrollCourse } from '../api';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const token = localStorage.getItem('token'); // Retrieve token for authorization

  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await fetchCourses();
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };
    getCourses();
  }, []);

  const handleEnroll = async (courseId) => {
    try {
      await enrollCourse(courseId, token);
      alert('Enrolled successfully!');
    } catch (error) {
      console.error('Enrollment failed:', error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <button onClick={() => handleEnroll(course._id)}>Enroll</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
