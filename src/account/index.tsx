import Signin from "./signin";
import Signup from "./signup";
import { Routes, Route, Navigate } from "react-router-dom"; 
import './index.css';

export default function Account() {
    return (
      <div id="wd-account-screen" className="w-50">
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="/Account/Signin" />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    );
}
