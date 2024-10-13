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
                    <tr>
                        <td>John Smith</td>
                        <td>10/12/2024</td>
                        <td>Heart, Type O</td>
                        <td>Heart transplant.</td>
                    </tr>
                    <tr>
                        <td>Hannah Wells</td>
                        <td>10/13/2024</td>
                        <td>Liver</td>
                        <td>Hepatectomy.</td>
                    </tr>
                    <tr>
                        <td>Oliver Kings</td>
                        <td>10/13/2024</td>
                        <td>Muscle Tissue, Blood Type A</td>
                        <td>Amputation.</td>
                    </tr>
                    <tr></tr>
                <tbody>
                    {/* Add table rows with medical procedures here */}
                </tbody>
            </table>
        </div>
    );
}