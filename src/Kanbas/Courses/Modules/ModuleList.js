import React from "react";
import { useParams } from "react-router-dom";
import { HiEllipsisVertical } from 'react-icons/hi2';
import { GoTriangleRight } from 'react-icons/go';
import { AiFillCheckCircle, AiOutlinePlus } from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { Button } from "react-bootstrap";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button className="btn btn-success" style={{marginRight: "5px"}}
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="btn btn-light" style={{marginRight: "5px"}}
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input
          className="form-control" style={{marginRight: "5px"}}
          placeholder="Module Name"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          } />
        <textarea
          className="form-control"
          rows={1}
          placeholder="Module Description"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          } />
      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item-secondary">
              <HiEllipsisVertical className="vertical-ellipsis" /><HiEllipsisVertical style={{ marginLeft: "-13px" }} className="vertical-ellipsis" />
              <GoTriangleRight style={{ marginRight: "5px" }} />
              {module.name}
              <div className="float-end">
                <Button className="btn btn-light" style={{marginRight: "5px"}}
                    onClick={() => dispatch(setModule(module))}>Edit</Button>
                <Button className="btn btn-danger" style={{marginRight: "15px"}}
                    onClick={() => dispatch(deleteModule(module._id))}>Delete</Button>
            
                <AiFillCheckCircle style={{ color: "#08874B", fontSize: "1.35em" }} />
                <AiOutlinePlus style={{ color: "#737D84", marginLeft: "20px", marginRight: "20px" }} />
                <HiEllipsisVertical className="vertical-ellipsis" />
              </div>
            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;