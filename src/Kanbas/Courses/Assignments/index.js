import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import './index.css';
import { FaGripVertical, FaPlus, FaEllipsisV } from "react-icons/fa";
import { FaCircleCheck, FaFilePen } from "react-icons/fa6";
import CourseTools from "../CourseTools";


function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div className="col d-flex">
            <div className="col">
                <div>
                    <input class="form-control w-25" style={{ display: "inline" }} type="text"
                        placeholder="Search for Assignment" />
                    <div class="float-end">
                        <button class="btn btn-light"><FaPlus className="gray-right-margin" />Group</button>
                        <button class="btn btn-danger">
                            <FaPlus className="gray-right-margin" style={{ color: "white" }} />Assignment
                        </button>
                        <button class="btn btn-light" style={{ padding: "6px 5px" }}>
                            <FaEllipsisV className="gray" />
                        </button>
                    </div>
                </div>
                <hr class="button-hr" />

                <ul className="list-group">
                    <li class="list-group-item-secondary" style={{ marginTop: "0" }}>
                        <FaGripVertical className="gray-right-margin" />
                        <span style={{ fontWeight: "bold", fontSize: "1.1em" }}>Assignments</span>
                        <div class="float-end">
                            <p class="badge rounded-pill text-bg-light">40% of Total</p>
                            <FaPlus className="gray-right-margin" />
                            <FaEllipsisV className="gray" />
                        </div>
                    </li>
                    {courseAssignments.map((assignment) => (
                        <li className="list-group-item">
                            <FaGripVertical className="gray-right-margin" />
                            <FaFilePen className="inline-icon fa-file-pen" />
                            <div class="list-group-item-content">
                                <Link
                                    key={assignment._id}
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    <h5>{assignment.title}</h5>
                                    <p class="details">{assignment.due_date}</p>
                                </Link>
                            </div>
                            <div class="ms-auto no-wrap">
                                <FaCircleCheck className="fa-circle-check" /><FaEllipsisV className="gray" />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <CourseTools />
        </div>
    );
}
export default Assignments;