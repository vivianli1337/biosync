import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from './account/signup';
import Signin from './account/signin';
import Deliverystatus from './content/Delivery';
import Patientinfo from './content/PatientInfo';
import Inventory from './content/Inventories';
import Request from './content/Requests';
import Summary from './content/Summary';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Account/Signin" />} />
          <Route path="/Account/Signin" element={<Signin />} />
          <Route path="/Account/Signup" element={<Signup />} />
          <Route path="/content/Summary" element={<Summary />} />
          <Route path="/content/Delivery" element={<Deliverystatus />} />
          <Route path="/content/PatientInfo" element={<Patientinfo />} />
          <Route path="/content/Inventories" element={<Inventory />} />
          <Route path="/content/Requests" element={<Request />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

