
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function TOC() {
    const { pathname } = useLocation();
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <Link
                    id="h-summary"
                    to="content/summary"
                    className={`nav-link ${pathname.includes("summary") ? "active" : ""}`}>
                    Summary
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    id="h-delivery-schedule"
                    to="content/delivery"
                    className={`nav-link ${pathname.includes("delivery") ? "active" : ""}`}>
                    Delivery & Schedule
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    id="h-patient-info"
                    to="content/patientinfo"
                    className={`nav-link ${pathname.includes("patient-info") ? "active" : ""}`}>
                    Patient Info
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    id="h-inventory"
                    to="content/inventories"
                    className={`nav-link ${pathname.includes("inventories") ? "active" : ""}`}>
                    Inventory
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    id="h-requests"
                    to="content/requests"
                    className={`nav-link ${pathname.includes("requests") ? "active" : ""}`}>
                    Requests
                </Link>
            </li>
        </ul>
    );
}
