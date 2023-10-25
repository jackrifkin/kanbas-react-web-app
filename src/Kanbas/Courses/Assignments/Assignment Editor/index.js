import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { Button } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import { FaEllipsisV } from "react-icons/fa";
import './index.css';

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div id="main-col" className="col">
            <div className="float-end published-label">
                <FaCircleCheck className="fa-circle-check" style={{marginRight: "5px"}}/>
                <p>Published</p>
                <Button className="btn btn-light" style={{marginLeft: "10px", padding: "3px 5px"}}>
                    <FaEllipsisV style={{fontSize: ".8em"}}/>
                </Button>
            </div>
            <br />
            <hr className="button-hr" />
            <label for="name-input">
                Assignment Name
            </label>
            <input id="name-input" type="text" className="form-control w-75" value={assignment.title} />
            <br />
            <textarea type="text" className="form-control w-75" rows="4">Description of assignment</textarea>

            <div className="row margin-top">
                <div className="col-12 col-xl-2">
                    <label className="float-end d-none d-xl-block" for="points-input">Points</label>
                    <label className="float-start d-xl-none" for="points-input">Points</label>
                </div>
                <div className="col">
                    <input className="form-control " type="number" min="0" max="100" step="5" value="100" />
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-2">
                    <label className="float-end d-none d-xl-block" for="group-input">Assignment Group</label>
                    <label className="float-start d-xl-none" for="group-input">Assignment Group</label>
                </div>
                <div className="col">
                    <select className="form-control " id="group-input">
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-2">
                    <label className="float-end d-none d-xl-block" for="display-input">Display Grade as</label>
                    <label className="float-start d-xl-none" for="display-input">Display Grade as</label>
                </div>
                <div className="col">
                    <select className="form-control" id="display-input">
                        <option>Percentage</option>
                        <option>Points</option>
                        <option>Letter</option>
                    </select>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-2"></div>
                <div className="col">
                    <input type="checkbox" id="counts-checkbox" /> <label for="counts-checkbox">Do not count this
                        assignment towards the final grade</label>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-2">
                    <span className="float-end d-none d-xl-block">Submission type</span>
                    <span className="float-start d-xl-none">Submission type</span>
                </div>
                <div className="col">
                    <div className="input-box">
                        <select className="form-control">
                            <option>Online</option>
                            <option>Physical Paper</option>
                            <option>Exam</option>
                        </select>
                        <h6>Online Entry Options</h6>
                        <div className="d-block checkbox-div">
                            <input className="checkbox" type="checkbox" id="text-entry-input" checked /><label
                                for="text-entry-input">Text
                                Entry</label>
                        </div>
                        <div className="d-block checkbox-div">
                            <input className="checkbox" type="checkbox" id="url-input" checked /><label
                                for="url-input">Website URL</label>
                        </div>
                        <div className="d-block checkbox-div">
                            <input className="checkbox" type="checkbox" id="media-input" checked /><label
                                for="media-input">Media
                                Recordings</label>
                        </div>
                        <div className="d-block checkbox-div">
                            <input className="checkbox" type="checkbox" id="uploads-input" /><label
                                for="uploads-input">File Uploads</label>
                        </div>
                        <div className="d-block checkbox-div">
                            <input className="checkbox" type="checkbox" id="annotations-input" /><label
                                for="annotations-input">Student Annotations</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-xl-2">
                    <span className="float-start d-xl-none">Assign</span>
                    <span className="float-end d-none d-xl-block">Assign</span>
                </div>
                <div className="col">
                    <div className="input-box" style={{ borderBottomLeftRadius: "0", borderBottomRightRadius: "0" }}>
                        <label for="assign-to-input">
                            <h6 id="assign-to-label">Assign to</h6>
                        </label>
                        <select id="assign-to-input" className="form-control">
                            <option>Everyone</option>
                            <option>why wouldn't you assign it to everyone</option>
                        </select>
                        <label for="due-input">
                            <h6>Due</h6>
                        </label>
                        <input id="due-input" type="date" className="form-control" />

                        <div className="row">
                            <div className="col-6">
                                <label for="from-input">
                                    <h6>Available from</h6>
                                </label>
                                <input id="from-input" className="form-control" type="date" />
                            </div>
                            <div className="col-6">
                                <label for="until-input">
                                    <h6>Until</h6>
                                </label>
                                <input id="until-input" className="form-control" type="date" />
                            </div>
                        </div>
                    </div>
                    <div className="add-box d-flex-block ">
                        <i className="fa-solid fa-plus inline-icon gray-button-icon"></i> <span
                            style={{ alignContent: "center" }}>Add</span>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <hr />
            <div className="d-flex-block">
                <input id="notify-of-change-box" type="checkbox" /> <label for="notify-of-change-box">Notify users
                    that
                    this content has changed</label>
                <Button onClick={handleSave} className="btn btn-danger btn-lg float-end">Save</Button>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-lg btn-light float-end" role="button">Cancel</Link>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
}


export default AssignmentEditor;