import './index.css';
import { useLocation } from "react-router-dom";
import { FaBars, FaGlasses } from 'react-icons/fa';
import { Breadcrumb, Button } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';
import CourseNavigation from './CourseNavigation';
import Modules from './Modules';
import Home from './Home';
import Assignments from './Assignments';
import AssignmentEditor from './Assignments/Assignment Editor';


function Courses({courses}) {
    const { pathname } = useLocation();
    let pathArray = pathname.split('/');
    pathArray = pathArray.splice(3, pathArray.length - 1);
    const currentLocation = pathArray[pathArray.length - 1];
    let currentPath = '#/Kanbas/Courses/';
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
            <Button className='float-end btn btn-light'><FaGlasses style={{marginRight: "5px"}}/>Student View</Button>
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