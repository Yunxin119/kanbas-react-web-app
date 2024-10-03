import { FaPlus, FaSearch } from "react-icons/fa"

const AssignmentButtons = () => {
  return (
    <div className="mb-3 d-flex justify-content-between align-items-center">
        <div className="d-flex flex-grow-1" style={{marginRight: '15px'}}>
            <div className="input-group">
                <span className="input-group-text"><FaSearch /></span>
                <input id="wd-search-assignment" type="text" className="form-control" placeholder="Search for Assignments"/>
            </div>
        </div>

        <div className="d-flex">
            <button id="wd-add-assignment" className="btn btn-lg btn-danger text-white me-1 float-end"><FaPlus className="fs-5" /> Assignment</button>
            <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1 float-end"><FaPlus className="fs-5"/> Group</button>
        </div>
 
        
    </div>
  )
}

export default AssignmentButtons
