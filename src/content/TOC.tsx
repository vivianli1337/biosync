import { useLocation } from "react-router";
import { Link } from "react-router-dom";

export default function TOC() {
    const { pathname } = useLocation();

    
    return (
        <>
            {/* Tabs Navigation */}
            <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <Link
                        id="h-summary"
                        to="content/summary"
                        className={`nav-link ${pathname.includes("summary") ? "active" : ""}`}
                        role="tab"
                        aria-selected={pathname.includes("summary")}
                    >
                        Summary
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link
                        id="h-delivery-schedule"
                        to="content/delivery"
                        className={`nav-link ${pathname.includes("delivery") ? "active" : ""}`}
                        role="tab"
                        aria-selected={pathname.includes("delivery")}
                    >
                        Delivery & Schedule
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link
                        id="h-patient-info"
                        to="content/patientinfo"
                        className={`nav-link ${pathname.includes("patientinfo") ? "active" : ""}`}
                        role="tab"
                        aria-selected={pathname.includes("patientinfo")}
                    >
                        Patient Info
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link
                        id="h-inventory"
                        to="content/inventories"
                        className={`nav-link ${pathname.includes("inventories") ? "active" : ""}`}
                        role="tab"
                        aria-selected={pathname.includes("inventories")}
                    >
                        Inventory
                    </Link>
                </li>
                <li className="nav-item" role="presentation">
                    <Link
                        id="h-requests"
                        to="content/requests"
                        className={`nav-link ${pathname.includes("requests") ? "active" : ""}`}
                        role="tab"
                        aria-selected={pathname.includes("requests")}
                    >
                        Requests
                    </Link>
                </li>
            </ul>

            {/* Tab Content */}
            <div className="tab-content">
                {/* Add the relevant content for each tab below */}
                {/* Example: */}
                {/* <div className={`tab-pane fade ${pathname.includes("summary") ? "show active" : ""}`} id="summary" role="tabpanel"> */}
                {/* Content for Summary */}
                {/* </div> */}
                {/* Similarly add content for other tabs */}
            </div>
        </>
    );
}

