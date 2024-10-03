import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname }= useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0" style={{marginRight: '30px'}}>
      <Link to="/Kanbas/Courses/1234/Home" id="wd-course-home-link"
        className={`list-group-item ${pathname.includes("Home") ? "active text-black" : "text-danger"} border border-0`}> Home </Link>
      <Link to="/Kanbas/Courses/1234/Modules" id="wd-course-modules-link"
        className={`list-group-item ${pathname.includes("Modules") ? "active text-black" : "text-danger"} border border-0`}> Modules </Link>
      <Link to="/Kanbas/Courses/1234/Piazza" id="wd-course-piazza-link"
        className={`list-group-item ${pathname.includes("Piazza") ? "active text-black" : "text-danger"} border border-0`}> Piazza </Link>
      <Link to="/Kanbas/Courses/1234/Zoom" id="wd-course-zoom-link"
        className={`list-group-item ${pathname.includes("Zoom") ? "active text-black" : "text-danger"} border border-0`}> Zoom </Link>
      <Link to="/Kanbas/Courses/1234/Assignments" id="wd-course-quizzes-link"
        className={`list-group-item ${pathname.includes("Assignments") ? "active text-black" : "text-danger"} border border-0`}> Assignments </Link>
      <Link to="/Kanbas/Courses/1234/Quizzes" id="wd-course-assignments-link"
        className={`list-group-item ${pathname.includes("Quizzes") ? "active text-black" : "text-danger"} border border-0`}> Quizzes </Link>
      <Link to="/Kanbas/Courses/1234/People" id="wd-course-people-link"
        className={`list-group-item ${pathname.includes("People") ? "active text-black" : "text-danger"} border border-0`} > People </Link>
    </div>
);}
