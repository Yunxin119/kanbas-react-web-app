import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import TOC from "./TOC";
import { Routes, Route, Navigate } from "react-router-dom";
export default function Labs() {
    return (
        <div>
            <h1>Labs</h1>
            <h3>Yunxin Liu</h3>
            <h4>Student ID: 002243536</h4>
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2" element={<Lab2 />} />
                <Route path="Lab3" element={<Lab3 />} />
                <Route path='Kanbas' element={<Navigate to="/Kanbas" />} />
            </Routes>
        </div>
    );
}
