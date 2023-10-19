import './index.css';
import { Link } from 'react-router-dom';
import { FaBan, FaCircleCheck, FaFileImport, FaArrowRightFromBracket, FaCrosshairs, FaChartColumn, FaBullhorn, FaCircleExclamation, FaCalendarDays, FaBell } from 'react-icons/fa6';
import db from "../../Database";
import { useParams } from 'react-router-dom';

function CourseTools() {
    const { courseId } = useParams();
    const todos = db.todos.filter((todo) => todo.course === courseId);
    const events = db.events.filter((event) => event.course === courseId);
    return (
        <div className='col-2 d-none d-xl-block' style={{ margin: "0 20px", width: "18%" }}>
            <h5 style={{ marginTop: "20px" }}>Course Status</h5>
            <div className="publish-btns">
                <button className="btn btn-light publish-btn"><FaBan className='inline-icon gray-button-icon' style={{ marginRight: "3px" }} />Unpublish</button>
                <button className="btn btn-success publish-btn" disabled><FaCircleCheck style={{ marginRight: "3px" }} />Published</button>
            </div>
            <div className="d-grid gap-2">
                <button className="btn btn-light text-left" type="button"><FaFileImport className='gray-button-icon' />Import Existing Content</button>
                <button className="btn btn-light text-left" type="button"><FaArrowRightFromBracket className='gray-button-icon' />Import from Commons</button>
                <button className="btn btn-light text-left" type="button"><FaCrosshairs className='gray-button-icon' />Choose Home Page</button>
                <button className="btn btn-light text-left" type="button"><FaChartColumn className='gray-button-icon' />View Course Stream</button>
                <button className="btn btn-light text-left" type="button"><FaBullhorn className='gray-button-icon' />New
                    Announcement</button>
                <button className="btn btn-light text-left" type="button"><FaChartColumn className='gray-button-icon' />New Analytics</button>
                <button className="btn btn-light text-left" type="button"><FaBell className='gray-button-icon' />View
                    Course Notifications</button>
            </div>
            <h6>To-do</h6>
            <hr className="small-hr" />
            {todos.map((todo) => (
                <div className='row'>
                    <div className="col-2" style={{ padding: "0", paddingRight: "5px" }}>
                        <FaCircleExclamation className='fa-circle-exclamation float-end' style={{ marginTop: "5px" }} />
                    </div>
                    <div className="col no-padding">
                        <Link className="content-nav-link" to="#">{todo.name}</Link>
                        <p className="details">{todo.deadline}</p>
                    </div>
                </div>
            ))}
            <h6>Coming up</h6>
            <hr className="small-hr" />
            {events.map((event) => (
                <div className="row">
                    <div className="col-2" style={{ padding: "0", paddingRight: "5px" }}>
                        <FaCalendarDays className='float-end' style={{ marginTop: "5px" }} />
                    </div>
                    <div className="col no-padding">
                        <Link className="content-nav-link" to="#">{event.name}</Link>
                        <p className="details">{event.course}<br />{event.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CourseTools;