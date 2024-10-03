import { FaCalendar } from "react-icons/fa";

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <form>
        {/* Name Edit */}
        <div className="row mb-3">
          <label htmlFor="wd-name" className="col-sm-2 col-form-label">Assignment Name</label>
          <input id="wd-name" value="A1 - ENV + HTML" className="form-control"/>
        </div>
        {/* Description */}
        <div className="row mb-3">
          <textarea id="wd-description" className="form-control" rows={10}/>
        </div>
        {/* Points */}
        <div className="row mb-3 col-sm-12 float-end">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label d-flex justify-content-end">Points</label>
          <div className="col-sm-10">
            <input id="wd-points" value={100} className="form-control"/>
          </div>
        </div>
        {/* Group */}
        <div className="row mb-3 col-sm-12 float-end">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label d-flex justify-content-end">Assignment Group</label>
          <div className="col-sm-10">
            <select id="wd-group" className="form-select">
                  <option value='assignments'>ASSIGNMENTS</option>
              </select>
          </div>
        </div>
        {/* Display Grade As */}
        <div className="row mb-3 col-sm-12 float-end">
          <label htmlFor="wd-display-grade-as" className="col-sm-2 col-form-label d-flex justify-content-end">Assignment Group</label>
          <div className="col-sm-10">
            <select id="wd-display-grade-as" className="form-select">
                <option value='percentage'>Percentage</option>
                <option value='complete'>Complete</option>
                <option value='points'>Points</option>
              </select>
          </div>
        </div>
        {/* Submission Type */}
        <div className="row mb-3 col-sm-12 float-end">
          <label htmlFor="wd-submission-type" className="col-sm-2 col-form-label d-flex justify-content-end">Submission Type</label>
          <div className="col-sm-10">
            <div className=" border border-1 rounded-2 p-3">
              <select id="wd-submission-type" className="form-select">
                  <option value='online'>Online</option>
                  <option value='paper'>Paper</option>
              </select>
              <div className="mt-3">
                <label htmlFor="wd-text-entry" className="mb-3"><b> Online Entry Options</b></label><br/>

                <div className="form-check mb-3">
                  <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" id="wd-website-url" className="form-check-input"/>
                  <label htmlFor="wd-website-url">Website URL</label>
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" id="wd-media-recordings" className="form-check-input"/>
                  <label htmlFor="wd-media-recordings">Media Recordings</label>
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" id="wd-student-annotation" className="form-check-input"/>
                  <label htmlFor="wd-student-annotation">Student Annotation</label>
                </div>

                <div className="form-check mb-3">
                  <input type="checkbox" id="wd-file-upload" className="form-check-input"/>
                  <label htmlFor="wd-file-upload">File Uploads</label>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Assign */}
        <div className="row mb-3 col-sm-12 float-end">
          <label htmlFor="wd-assign" className="col-sm-2 col-form-label d-flex justify-content-end">Assign</label>
          <div className="col-sm-10">
            <div className="border border-1 rounded-2 p-3">
              <div>
                <label htmlFor="wd-assign-to" className="form-label"><b>Assign to</b></label><br/>
                <input type="text" value="Everyone" className="form-control"/><br/>
              </div>
              <div className="mb-4">
                <label htmlFor="wd-due" className="form-label"><b>Due</b></label>
                <div className="input-group">
                  <input type="date" value="2024-05-13" className="form-control"/>
              </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="wd-available-from" className="form-label"><b>Available From</b></label>
                  <div className="input-group">
                    <input type="date" id="wd-available-from" value="2024-05-06" className="form-control"/>
                  </div>
                </div>
                <div className="col-sm-6">
                  <label htmlFor="wd-available-until" className="form-label"><b>Until</b></label>
                  <div className="input-group">
                    <input type="date" id="wd-available-until" value="2024-05-20" className="form-control"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="mt-5"/>
        </div>
        <div className="row float-end">
          <div className="d-flex justify-item-end gap-2">
          <button id="wd-cancel" className="btn btn-lg btn-secondary border border-1 border-dark">Cancel</button>
            <button id="wd-save" className="btn btn-lg btn-danger">Save</button>
            
          </div>
        </div>

        </form>
    </div>
);}
