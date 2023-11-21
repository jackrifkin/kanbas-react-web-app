import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import './index.css';
import { PiNotePencilDuotone } from 'react-icons/pi';

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
) {
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
                            <span class="card-img-top" style={{ "backgroundColor": "lightgreen"}}></span>
                            <div class="card-body">
                                <Link className="card-text" to={`/Kanbas/Courses/${course.number}`}>
                                    <span class="card-title" style={{ "--title-color": course.color, "color": "var(--title-color)" }}>
                                        {course.number} {course.name}
                                    </span>
                                    <br />From {course.startDate} to {course.endDate}
                                </Link>
                                <br />
                                <Link to={`/Kanbas/Courses/${course.number}/Assignments`}><PiNotePencilDuotone className="assignment-icon" /></Link>
                                <button className="btn btn-danger float-end" style={{ marginTop: "5px" }}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course);
                                    }}>
                                    Delete
                                </button>
                                <button className="btn btn-light float-end" style={{ marginTop: "5px", marginRight: "5px" }}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <h5>Course</h5>
                <label className="wide-course-input-label">Course name:
                    <input value={course.name} className="form-control course-input" placeholder="Course name"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} /></label>
                <label className="wide-course-input-label">Course number:
                    <input value={course.number} className="form-control course-input" placeholder="Course number (ex: ABC1234)"
                        onChange={(e) => setCourse({ ...course, number: e.target.value })} /></label>
                <label className="wide-course-input-label">Course start date:
                    <input value={course.startDate} className="form-control course-input" type="date"
                        onChange={(e) => setCourse({ ...course, startDate: e.target.value })} /></label>
                <label className="wide-course-input-label">Course end date:
                    <input value={course.endDate} className="form-control course-input" type="date"
                        onChange={(e) => setCourse({ ...course, endDate: e.target.value })} /></label>
                <br />
                <Button className="btn btn-light" style={{ marginRight: "5px" }} onClick={updateCourse} >Update Course</Button>
                <Button className="btn btn-success" onClick={addNewCourse} >Add Course</Button>
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}
export default Dashboard;