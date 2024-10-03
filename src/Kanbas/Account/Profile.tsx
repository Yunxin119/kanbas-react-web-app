import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <input id="wd-username" value="alice" placeholder="username" className="mb-2 form-control"/>
      <input id="wd-password" value="123" placeholder="password"
             type="password" className="mb-2 form-control"/>
      <input id="wd-firstname" value="Alice" placeholder="First Name" className="mb-2 form-control"/>
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" className="mb-2 form-control"/>
      <input id="wd-dob" value="2000-01-01" type="date" className="mb-2 form-control"/>
      <input id="wd-email" value="alice@wonderland" type="email" className="mb-2 form-control"/>
      <select id="wd-role" className="mb-2 form-select">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link to="/Kanbas/Account/Signin" className="btn btn-lg btn-danger col-12">Sign out</Link>
    </div>
);}
