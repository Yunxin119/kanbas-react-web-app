import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
    const {pathname }= useLocation();
    return (
        // <div id="wd-account-navigation">
        //     <Link to='/Kanbas/Account/Signin'>Sign in</Link><br/>
        //     <Link to='/Kanbas/Account/Signup'>Sign up</Link><br/>
        //     <Link to='/Kanbas/Account/Profile'>Profile</Link><br/>
        // </div>
        
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0" style={{marginRight: '30px'}}>
            <Link to="/Kanbas/Account/Signin"
            className={`list-group-item ${pathname.includes("Signin") ? "active text-black" : "text-danger"} border border-0`}>Sign in</Link>
            <Link to="/Kanbas/Account/Signup"
            className={`list-group-item ${pathname.includes("Signup") ? "active text-black" : "text-danger"} border border-0`}> Sign up </Link>
            <Link to="/Kanbas/Account/Profile"
            className={`list-group-item ${pathname.includes("Profile") ? "active text-black" : "text-danger"} border border-0`}> Profile </Link>
        </div>
  );}