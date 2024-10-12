import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Account from "./account";
import Signup from './account/signup';
import Signin from './account/signin';
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;

