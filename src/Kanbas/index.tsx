import Account from "./Account"
import Courses from "./Courses"
import Dashboard from "./Dashboard"
import KanbasNavigation from "./Navigation"
import {Routes, Route, Navigate} from "react-router-dom"
export default function Kanbas() {
    return (
        <div id="wd-kanbas">
            <table>
                <tr>
                    <td valign="top">
                        <KanbasNavigation />
                    </td>
                    <td valign="top">
                        <Routes>
                            <Route path='/' element={<Navigate to='/Kanbas/Account'/>}/>
                            <Route path="/Account/*" element={<Account />} />
                            <Route path="/Dashboard" element={<Dashboard />} />
                            <Route path="/Courses/:cid/*" element={<Courses />} />
                            <Route path="/Calendar" element={<div>Calendar</div>} />
                            <Route path="/Inbox" element={<div>Inbox</div>} />
                        </Routes>
                    </td>
                </tr>
            </table>
        </div>
    )
}