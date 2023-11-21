import { React, useEffect } from "react";
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
  setModules
} from "./modulesReducer";
import { Button } from "react-bootstrap";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  const handleAddModule = async (module) => {
    const newModule = await client.createModule(courseId, module);
    dispatch(addModule(newModule));
    dispatch(setModule({ name: "", description: "" }));
  };

  const handleDeleteModule = async (moduleId) => {
    const status = await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
    console.log(`Deleted module ${moduleId} with status: ${status}`);
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
    console.log(`Updated module ${module._id} with status ${status}`);
  };

  const fetchModulesForCourse = async (courseId) => {
    const modules = await client.findModulesForCourse(courseId);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModulesForCourse(courseId);
  }, [courseId]);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button className="btn btn-success" style={{ marginRight: "5px" }}
          onClick={() => handleAddModule(module)}>
          Add
        </button>
        <button className="btn btn-light" style={{ marginRight: "5px" }}
          onClick={() => handleUpdateModule(module)}>
          Update
        </button>
        <input
          className="form-control" style={{ marginRight: "5px" }}
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
                <Button className="btn btn-light" style={{ marginRight: "5px" }}
                  onClick={() => dispatch(setModule(module))}>Edit</Button>
                <Button className="btn btn-danger" style={{ marginRight: "15px" }}
                  onClick={() => handleDeleteModule(module._id)}>Delete</Button>
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