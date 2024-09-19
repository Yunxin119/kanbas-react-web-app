import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div id='wd-dashboard'>
      <h1 id='wd-dashboard-title'>Dashboard</h1>
      <h2 id='wd-dashboard-published'>Published Courses (12)</h2> <hr />
      <div id='wd-dashboard-courses'>
        <div id='wd-dashboard-course'>
            <img src="/images/reactjs.jpg" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1234/Home'}>
                    CS1234 React JS
                </Link>
                <p className="wd-dashboard-course-title">
                    Full Stack software developer
                </p>
                <Link to="/Kanbas/Courses/1234/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/northeastern.png" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1235/Home'}>
                    CS1235 Northeastern Campus Orientation
                </Link>
                <p className="wd-dashboard-course-title">
                    Northeastern Campus Orientation
                </p>
                <Link to="/Kanbas/Courses/1235/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/1236.jpg" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1236/Home'}>
                    CS1236 Course 1236
                </Link>
                <p className="wd-dashboard-course-title">
                    Course 1236
                </p>
                <Link to="/Kanbas/Courses/1236/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/1237.jpg" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1236/Home'}>
                    CS1236 Course 1237
                </Link>
                <p className="wd-dashboard-course-title">
                    Course 1237
                </p>
                <Link to="/Kanbas/Courses/1237/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/1238.png" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1236/Home'}>
                    CS1236 Course 1238
                </Link>
                <p className="wd-dashboard-course-title">
                    Course 1238
                </p>
                <Link to="/Kanbas/Courses/1238/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/1239.jpg" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1236/Home'}>
                    CS1236 Course 1239
                </Link>
                <p className="wd-dashboard-course-title">
                    Course 1239
                </p>
                <Link to="/Kanbas/Courses/1239/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/1240.jpg" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1236/Home'}>
                    CS1236 Course 1240
                </Link>
                <p className="wd-dashboard-course-title">
                    Course 1240
                </p>
                <Link to="/Kanbas/Courses/1240/Home"> Go </Link>
            </div>
        </div>
        <div id='wd-dashboard-course'>
            <img src="/images/1240.jpg" width={200} />
            <div>
                <Link className='wd-dashboard-course-link' to={'/Kanbas/Courses/1236/Home'}>
                    CS1236 Course 1241
                </Link>
                <p className="wd-dashboard-course-title">
                    Course 1241
                </p>
                <Link to="/Kanbas/Courses/1241/Home"> Go </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
