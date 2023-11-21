import Dashboard from './Dashboard';
import KanbasNavigation from './KanbasNavigation'
import Courses from './Courses';
import { Route, Routes, Navigate } from 'react-router';
import { useState } from "react";
import store from './store';
import { Provider } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

function Kanbas() {
   const [courses, setCourses] = useState([]);
   const [course, setCourse] = useState({
      name: "", number: "",
      startDate: "", endDate: ""
   });
   const API_BASE = process.env.REACT_APP_API_BASE;
   const URL = `${API_BASE}/courses`;
   const findAllCourses = async () => {
      const response = await axios.get(URL);
      setCourses(response.data);
   };
   useEffect(() => {
      findAllCourses();
   }, []);

   const addNewCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
         response.data,
         ...courses
      ]);
      setCourse({ name: "" });
   };

   const deleteCourse = async (course) => {
      console.log(`Deleting course: ${course.number}`);
      const response = await axios.delete(`${URL}/${course._id}`);
      console.log(`Got response: ${response.status}`);

      setCourses(courses.filter((c) => c._id !== course._id));
   };

   const updateCourse = async () => {
      console.log(`Updating course: ${course.number}`);
      const response = await axios.put(
         `${URL}/${course._id}`,
         course
      );
      console.log(`Got response: ${response.status}`);
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            }
            return c;
         })
      );
      setCourse({ name: "" });
   };

   return (
      <Provider store={store}>
         <div className="d-flex">
            <KanbasNavigation />
            <Routes>
               <Route path='/' element={<Navigate to={"Dashboard"} replace={true} />}></Route>
               <Route path="/Dashboard" element={
                  <Dashboard
                     courses={courses}
                     course={course}
                     setCourse={setCourse}
                     addNewCourse={addNewCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse} />
               }></Route>
               <Route path="/Courses/:courseId/*" element={<Courses courses={courses} />} />
            </Routes>
         </div>
      </Provider>
   );
}
export default Kanbas;