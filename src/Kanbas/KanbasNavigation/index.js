import { Link, useLocation } from "react-router-dom";
import './index.css';
import { FaUserCircle, FaBook, FaCalendarDay, FaArrowCircleRight } from 'react-icons/fa'
import { PiGaugeBold, PiMonitorPlay } from 'react-icons/pi'
import { BsEnvelopePaper } from 'react-icons/bs'
import { AiOutlineClockCircle, AiOutlineQuestionCircle } from 'react-icons/ai'

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const icons = [FaUserCircle, PiGaugeBold, FaBook, FaCalendarDay, BsEnvelopePaper, AiOutlineClockCircle, PiMonitorPlay, FaArrowCircleRight, AiOutlineQuestionCircle];
    const { pathname } = useLocation();
    return (
        <ul className="nav d-none d-sm-block">
            <li id="neu-logo">
                <Link to="#"><img class="neu-logo" src="../../images/neu-logo.png" alt="neu-logo"/></Link>
            </li>
            {links.map((link, index) => {
                const Icon = icons[index];
                return (<li className={`nav-item ${pathname.includes(link) && "active"}`}>
                    <Link
                        key={index}
                        to={`/Kanbas/${link}`}
                        className={`nav-link ${link === "Account" && "account-link"}`}>
                        <Icon />
                        <p>{link}</p>
                    </Link>
                </li>)
            })}
        </ul>
    );
}
export default KanbasNavigation;