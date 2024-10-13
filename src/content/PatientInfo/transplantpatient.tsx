import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function TransplantCandidates() {
    return (
        <div className="container mt-5">
            <h1 className="mb-4">Transplant Candidate</h1>
            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Patient Name</th>
                        <th>DOB</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Disease</th>
                        <th>Family History</th>
                        <th>Organ Needed</th>
                        <th>Details</th>
                        <th>Send to UNOS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Grett</td>
                        <td>8/1/2001</td>
                        <td>23</td>
                        <td>Male</td>
                        <td>Cardiomyopathy</td>
                        <td>None</td>
                        <td>Heart muscles</td>
                        <td> </td>
                        <td><button className="btn btn-primary">Send</button></td>
                    </tr>
                    <tr>
                        <td>Linda</td>
                        <td>3/17/1964</td>
                        <td>60</td>
                        <td>Female</td>
                        <td>Coronary heart disease</td>
                        <td>Heart disease</td>
                        <td>Heart</td>
                        <td> </td>
                        <td><button className="btn btn-primary">Send</button></td>
                    </tr>
                    <tr>
                        <td>James</td>
                        <td>1/12/1974</td>
                        <td>50</td>
                        <td>Male</td>
                        <td>Hepatitis</td>
                        <td>Lung cancer</td>
                        <td>Liver</td>
                        <td> </td>
                        <td><button className="btn btn-primary">Send</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
