import UrgentMessage from './urgent';
import MedicalProcedure from './procedure';
import StockLevel from './stocklevel';
import './index.css'; 


export default function Dashboard() {
    return (
        <div className="container-fluid">
            {/* Urgent Message */}
            <div className="row">
                <div className="col-12">
                    <UrgentMessage />
                </div>
            </div>

            {/* Main Dashboard Sections */}
            <div className="row">
                {/* Upcoming Medical Procedures */}
                <div className="col-lg-6 mb-4">
                    <MedicalProcedure />
                </div>

                {/* Stock Level (includes both Low in Stock and Current Stock) */}
                <div className="col-lg-6 mb-4">
                    <StockLevel />
                </div>
            </div>

            {/* Organ Donation / Waitlist Section */}
            <div className="row">
                <div className="col-12">
                    <div className="card p-4 shadow">
                        <h5 className="card-title text-center">Organ Donation / Waitlist</h5>
                        {/* Add content here */}
                    </div>
                </div>
            </div>
        </div>
    );
}
