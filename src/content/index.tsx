import { Routes, Route, Navigate } from "react-router-dom";
import TOC from "./TOC";
import DeliveryStatus from "./Delivery"; 
import PatientInfo from "./PatientInfo"; 
import Request from "./Requests"; 
import Inventory from "./Inventories"; 
import Summary from "./Summary";

export default function Content() {
  return (
    <div>
      <TOC />
      <Routes>
      <TOC />
        <Route path="/" element={<Navigate to="/summary" />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/delivery" element={<DeliveryStatus />} />
        <Route path="/patientinfo" element={<PatientInfo />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/inventories" element={<Inventory />} />
      </Routes>
    </div>
  );
}
