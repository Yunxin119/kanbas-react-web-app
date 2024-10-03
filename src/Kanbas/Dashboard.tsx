import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div id='wd-dashboard'>
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />

      <div id='wd-dashboard-courses' className='row'>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {/* Course 1 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" alt='1234' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1234 React JS</h5>
                  <p className="wd-dashboard-course-title card-text">Full Stack software developer</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Spring 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 2 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1235/Home">
                <img src="/images/northeastern.png" alt='1235' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1235 Orientation</h5>
                  <p className="wd-dashboard-course-title card-text">Campus Orientation</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Spring 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 3 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1236/Home">
                <img src="/images/1236.jpg" alt='1236'  width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1236 Course 1236</h5>
                  <p className="wd-dashboard-course-title card-text">Course 1236</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Fall 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 4 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1237/Home">
                <img src="/images/1237.jpg" alt='1237' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1237 Course 1237</h5>
                  <p className="wd-dashboard-course-title card-text">Course 1237</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Fall 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 5 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1238/Home">
                <img src="/images/1238.png" alt='1238' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1238 Course 1238</h5>
                  <p className="wd-dashboard-course-title card-text">Course 1238</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Fall 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 6 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1239/Home">
                <img src="/images/1239.jpg" alt='1239' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1239 Course 1239</h5>
                  <p className="wd-dashboard-course-title card-text">Course 1239</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Fall 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 7 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1240/Home">
                <img src="/images/1240.jpg" alt='1240' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1240 Course 1240</h5>
                  <p className="wd-dashboard-course-title card-text">Course 1240</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Winter 2024</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>

          {/* Course 8 */}
          <div id='wd-dashboard-course' className='col' style={{ width: '270px' }}>
            <div className='card rounded-3 overflow-hidden'>
              <Link className="wd-dashboard-course-link text-decoration-none text-dark" to="/Kanbas/Courses/1241/Home">
                <img src="/images/1240.jpg" alt='1241' width="100%" height={160} />
                <div className="card-body">
                  <h5 className="wd-dashboard-course-title card-title">CS1241 Course 1241</h5>
                  <p className="wd-dashboard-course-title card-text">Course 1241</p>
                  <p className="wd-dashboard-course-term card-text" style={{fontSize: '14px', marginTop: '0px'}}>Winter 2023</p>
                  <button className="btn btn-primary"> Go </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
