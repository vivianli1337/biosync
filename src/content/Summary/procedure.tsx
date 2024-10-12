import './index.css'; 
export default function MedicalProcedure() {
    return (
        <div className="card p-4 shadow">
            <h5 className="card-title text-center">Upcoming Medical Procedures</h5>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Patient</th>
                        <th>Date</th>
                        <th>Supplies needed</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Add table rows with medical procedures here */}
                </tbody>
            </table>
        </div>
    );
}