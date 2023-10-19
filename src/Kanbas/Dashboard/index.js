import { Link } from "react-router-dom";
import db from "../Database";
import './index.css';
import { PiNotePencilDuotone } from 'react-icons/pi';

function Dashboard() {
    const courses = db.courses;
    return (
        <div class="page-content-container">
            <h2>Dashboard</h2>
            <hr />
            <div class="dashboard-content-container">
                <h4>Published Courses ({courses.length})</h4>
                <hr />
                <div className="d-flex flex-wrap" style={{ "width": "95%", "display": "block" }}>
                    {courses.map((course) => (
                        <div class="card" >
                            <span class="card-img-top" style={{"--card-color": course.color, "backgroundColor":"var(--card-color)"}}></span>
                            <div class="card-body">
                                <Link className="card-text" to={`/Kanbas/Courses/${course._id}`}>
                                    <span class="card-title" style={{"--title-color": course.color, "color":"var(--title-color)"}}>
                                        {course.number} {course._id} {course.name}
                                    </span>
                                    <br />{course._id}<br />From {course.startDate} to {course.endDate}
                                </Link>
                                <br/>
                                <Link to="#"><PiNotePencilDuotone className="assignment-icon" /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Dashboard;