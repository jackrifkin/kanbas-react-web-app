import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Progress Reports (EAB Navigate)", "Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="content-nav-container col-1 d-none d-md-block">
            <ul className="content-nav-list"></ul>
            {links.map((link, index) => (
                <li className={`content-nav-item ${pathname.includes(link) && "active-link"}`}>
                    <Link
                        key={index}
                        to={`/Kanbas/Courses/${courseId}/${link}`}
                        className="content-nav-link">
                        {link}
                    </Link>
                </li>
            ))}
        </div>
    );
}


export default CourseNavigation;