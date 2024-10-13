import './index.css';
import { Link } from 'react-router-dom';

export default function PatientList() {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>All Patients</h1>
                <Link to="/content/patientinfo/transplantpatient">
                    <button className="btn btn-primary">View Transplant Candidates</button>
                </Link>
            </div>

            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Status</th>
                        <th>Condition</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>10/12/2004</td>
                        <td>20</td>
                        <td>Male</td>
                        <td>Donor</td>
                        <td>Brain Damage</td>
                    </tr>
                    <tr>
                        <td>Hannah</td>
                        <td>1/12/1950</td>
                        <td>74</td>
                        <td>Female</td>
                        <td>Not a Donor</td>
                        <td>Breast Cancer</td>
                    </tr>
                    <tr>
                        <td>William</td>
                        <td>1/12/1974</td>
                        <td>50</td>
                        <td>Female</td>
                        <td>Donor</td>
                        <td>Chicken Pox</td>
                    </tr>
                    <tr>
                    <td>Sean Terrance</td>
                        <td>1/13/2004</td>
                        <td>20</td>
                        <td>Male</td>
                        <td>Not a Doner </td>
                        <td>Heart </td>
                    </tr>
                    <tr>
                        <td>John Smith</td>
                        <td>8/26/2000</td>
                        <td>24</td>
                        <td>Male</td>
                        <td>Donor</td>
                        <td>Extreme headache</td>
                    </tr>
                    <tr>
                        <td>Hannah Wells</td>
                        <td>03/14/2008</td>
                        <td>16</td>
                        <td>Female</td>
                        <td>Not a Donor</td>
                        <td>Liver Tissue</td>
                    </tr>
                    <tr>
                        <td>Oliver Kings</td>
                        <td>8/13/2000</td>
                        <td>24</td>
                        <td>Male</td>
                        <td>Donor</td>
                        <td>Kidney</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
