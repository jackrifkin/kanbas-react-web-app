import Dashboard from './Dashboard';
import KanbasNavigation from './KanbasNavigation'
import Courses from './Courses';
import { Route, Routes, Navigate } from 'react-router';
import db from "./Database";
import { useState } from "react";
import store from './store';
import { Provider } from 'react-redux';

function Kanbas() {
   const [courses, setCourses] = useState(db.courses);
   const [course, setCourse] = useState({
      name: "", number: "", _id: "",
      startDate: "", endDate: "",
      color: ""
   });
   const addNewCourse = () => {
      setCourses([...courses,
      {
         ...course
      }]);
   };
   const deleteCourse = (courseId) => {
      setCourses(courses.filter((course) => course._id !== courseId));
   };
   const updateCourse = () => {
      setCourses(
         courses.map((c) => {
            if (c._id === course._id) {
               return course;
            } else {
               return c;
            }
         })
      );
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