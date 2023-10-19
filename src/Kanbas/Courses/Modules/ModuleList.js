import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { HiEllipsisVertical } from 'react-icons/hi2';
import { GoTriangleRight } from 'react-icons/go';
import { AiFillCheckCircle, AiOutlinePlus } from 'react-icons/ai';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item-secondary">
            <HiEllipsisVertical className="vertical-ellipsis"/><HiEllipsisVertical style={{marginLeft:"-13px"}} className="vertical-ellipsis"/>
            <GoTriangleRight style={{marginRight:"5px"}}/>
             {module.name}
             <div className="float-end">
                <AiFillCheckCircle style={{color: "#08874B", fontSize: "1.35em"}}/>
                <AiOutlinePlus style={{color: "#737D84", marginLeft: "20px", marginRight: "20px"}}/>
                <HiEllipsisVertical className="vertical-ellipsis"/>
             </div>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;