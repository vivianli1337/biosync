import { Routes, Route, Navigate } from "react-router-dom";
import DeliveryStatus from "./Delivery"; 
import PatientInfo from "./PatientInfo"; 
import Request from "./Requests"; 
import Inventory from "./Inventories"; 
import Summary from "./Summary";
import NavigationBar from "./navbar";

export default function Content() {
  return (
    <div>
      <NavigationBar />
      <Routes>
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
