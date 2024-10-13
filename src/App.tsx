import React from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from './account/signup';
import Signin from './account/signin';
import Deliverystatus from './content/Delivery';
import Patientinfo from './content/PatientInfo';
import Inventory from './content/Inventories';
import Request from './content/Requests';
import Summary from './content/Summary';
import MedicalProcedure from './content/Summary/procedure';
import StockLevel from './content/Summary/stocklevel';
import UrgentMessage from './content/Summary/urgent';
import NavigationBar from './content/navbar';
import Rform from './content/Requests/requestform';
import IncomingRequests from './content/Requests/incomingrequest';
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <div>
      {/* Display Navbar on all routes */}
      <NavigationBar />

      <Routes>
        {/* Account related routes */}
        <Route path="/" element={<Navigate to="/Account/Signin" />} />
        <Route path="/Account/Signin" element={<Signin />} />
        <Route path="/Account/Signup" element={<Signup />} />

        {/* Content related routes */}
        <Route path="/content/Summary" element={<Summary />} />
        <Route path="/content/Summary/stocklevel" element={<StockLevel />} />
        <Route path="/content/Summary/procedure" element={<MedicalProcedure />} />
        <Route path="/content/Summary/urgent" element={<UrgentMessage />} />
        <Route path="/content/Delivery" element={<Deliverystatus />} />
        <Route path="/content/PatientInfo" element={<Patientinfo />} />
        <Route path="/content/Inventories" element={<Inventory />} />

        {/* Requests related routes */}
        <Route path="/content/Requests" element={<Request />} />
        <Route path="/content/Requests/requestform" element={<Rform />} />
        <Route path="/content/Requests/incomingrequest" element={<IncomingRequests />} />
      </Routes>
    </div>
  );
}

export default App;




