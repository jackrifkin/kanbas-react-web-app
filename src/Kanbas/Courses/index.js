import './index.css';
import { useLocation, useParams } from "react-router-dom";
import { FaBars, FaGlasses } from 'react-icons/fa';
import { Breadcrumb, Button } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import CourseNavigation from './CourseNavigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Assignment Editor';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Courses() {
    const { pathname } = useLocation();
    let pathArray = pathname.split('/');
    pathArray = pathArray.splice(3, pathArray.length - 1);
    const currentLocation = pathArray[pathArray.length - 1];
    let currentPath = '#/Kanbas/Courses/';

    const {courseId} = useParams();
    const API_BASE = process.env.REACT_APP_API_BASE;
    const URL = `${API_BASE}/courses`;
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        console.log(courseId);
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };
    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <div className='page-content-container'>
            <FaBars className='fa-bars' />
            <Breadcrumb className='breadcrumb'>
                {pathArray.map((page) => {
                    const oldPath = currentPath;
                    currentPath = oldPath + page + '/';
                    return (
                        <Breadcrumb.Item
                            className='breadcrumb-item'
                            href={page !== currentLocation && oldPath + page}
                            active={page === currentLocation}>
                            {page}
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
            <Button className='float-end btn btn-light'><FaGlasses style={{ marginRight: "5px" }} />Student View</Button>
            <hr />
            <div className='content-container row'>
                <CourseNavigation />
                <Routes>
                    <Route path="/*" element={<Navigate to="Home" replace={true} />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="Modules" element={<Modules />} />
                    <Route path="Assignments" element={<Assignments />} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
                    <Route path="Grades" element={<div className='col'><h1>Grades</h1></div>} />
                </Routes>
            </div>
        </div>
    );
}
export default Courses;