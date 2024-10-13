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
                        <table className="table">
                    <thead>
                        <tr>
                            <th>Patient</th>
                            <th>Hospitalize Date</th>
                            <th>Organ</th>
                            <th>Rank (National)</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                        <tr>
                            <td>Goerge Lewis</td>
                            <td>1/12/2018</td>
                            <td>Heart</td>
                            <td>113</td>
                            <td>Patient</td>
                        </tr>
                        <tr>
                            <td>Abraham Lincoln</td>
                            <td>10/13/2024</td>
                            <td>Heart</td>
                            <td>n/a</td>
                            <td>Donor & deceased </td>
                        </tr>
                        <tr>
                            <td>Sean Terrance</td>
                            <td>1/12/2020</td>
                            <td>kidney</td>
                            <td>2891</td>
                            <td>patient </td>
                        </tr>
                    </table>             
                    </div>
                </div>
            </div>
        </div>
    );
}
