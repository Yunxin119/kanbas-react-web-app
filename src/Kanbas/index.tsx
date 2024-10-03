import Account from "./Account"
import Courses from "./Courses"
import Dashboard from "./Dashboard"
import KanbasNavigation from "./Navigation"
import {Routes, Route, Navigate} from "react-router-dom"
import './style.css'
export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <KanbasNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path='/' element={<Navigate to='/Kanbas/Account'/>}/>
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                    <Route path="/Calendar" element={<div>Calendar</div>} />
                    <Route path="/Inbox" element={<div>Inbox</div>} />
                </Routes>
            </div>
        </div>
    )
}