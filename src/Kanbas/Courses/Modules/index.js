import { Button } from 'react-bootstrap';
import './index.css';
import ModuleList from './ModuleList';
import { Link } from 'react-router-dom';
import { HiEllipsisVertical } from 'react-icons/hi2';
import { AiOutlinePlus, AiOutlineCheckCircle } from 'react-icons/ai';

function Modules() {
    return (
        <div className="col">
            <div className="float-end">
                <Button className="btn btn-light">Collapse All</Button>
                <Button className="btn btn-light">View Progress</Button>
                <div class="dropdown">
                    <Button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <AiOutlineCheckCircle style={{color: "lightgreen", marginRight:"5px",}}/>Publish All
                    </Button>
                    <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="#">Action</Link></li>
                        <li><Link className='dropdown-item' to="#">Another action</Link></li>
                        <li><Link className='dropdown-item' to="#">Something else</Link></li>
                    </ul>
                </div>
                <Button className='btn btn-danger'><AiOutlinePlus className='pad-bottom' style={{color: "white", marginRight: "5px"}}/>Module</Button>
                <Button className='btn btn-light wd-align-items-center'  style={{padding: "6px"}}><HiEllipsisVertical className='pad-bottom'/></Button>
            </div>
            <br />
            <hr className='button-hr'/>
            <ModuleList />
        </div>
    );
}

export default Modules;