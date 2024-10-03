import AssignmentButtons from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import SingleAssignmentButtons from "./SingleAssignmentButtons";
import SingleAssignmentButtonsBefore from "./SingleAssignmentButtonsBefore";

export default function Assignments() {
    return (
      <ul id="wd-assignments" className="list-group rounded-0">
        <AssignmentButtons />
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div id="wd-assignment-title" className="p-3 ps-2 bg-secondary">
            <b>ASSIGNMENTS</b>
            <AssignmentControls />
          </div>
          <ul id="wd-assignment-list" className="list-group">
            
          <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center" style={{ marginRight: '10px' }}>
              <SingleAssignmentButtonsBefore />
            </div>
            <div className="flex-grow-1">
              <Link className="wd-assignment-link text-dark"
                to="123">
                <b>A1 - ENV + HTML</b>
              </Link><br />
              <SingleAssignmentButtons />
              <span className="wd-assignment-description text-secondary">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am |
              </span><br />
              <span className="wd-assignment-due text-secondary"><b>Due</b> May 13 at 11:59pm | 100 pts</span>
            </div>
          </li>

            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-center" style={{ marginRight: '10px' }}>
              <SingleAssignmentButtonsBefore />
            </div>
            <div className="flex-grow-1">
              <Link className="wd-assignment-link text-dark"
                to="124">
                <b>A2 - CSS + BOOTSTRAP</b>
              </Link><br />
              <SingleAssignmentButtons />
              <span className="wd-assignment-description text-secondary"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am |</span><br/>
              <span className="wd-assignment-due text-secondary"><b>Due</b> May 20 at 11:59pm | 100 pts</span>
            </div>
            </li>

            <li className="wd-assignment-list-item list-group-item d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-center" style={{ marginRight: '10px' }}>
                <SingleAssignmentButtonsBefore />
              </div>
              <div className="flex-grow-1">
              <Link className="wd-assignment-link text-dark"
                to="125">
                <b>A3 - JAVASCRIPT + REACT</b>
              </Link>
              <br />
              <SingleAssignmentButtons />
              <span className="wd-assignment-description text-secondary"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am |</span><br/>
              <span className="wd-assignment-due text-secondary"><b>Due</b> May 27 at 11:59pm | 100 pts</span>
              </div>
            </li>
          </ul>

        </li>
      </ul>
  );}
  