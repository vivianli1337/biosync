import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function IncomingRequests() {
    return (
        <div id="incoming-requests-screen" className="d-flex justify-content-center align-items-center vh-100 bg-light">
            <div className="requests-box bg-white p-5 round-r shadow-lg text-center">
                <h1 className="mb-4">Incoming Requests</h1>
                <table className="table table-bordered table-hover mb-4">
                    <thead className="table-light">
                        <tr>
                            <th scope="col">Biological Material / Product</th>
                            <th scope="col">Details</th>
                            <th scope="col">Count</th>
                            <th scope="col">Priority</th>
                            <th scope="col">Need By</th>
                            <th scope="col">Hospital</th>
                            <th scope="col">Stock Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Type O Blood</td>
                            <td>10 bags needed</td>
                            <td>10</td>
                            <td>Medium</td>
                            <td>2024-12-16</td>
                            <td>Goods Hospital</td>
                            <td>156</td>
                        </tr>
                        <tr>
                            <td>Type A Blood</td>
                            <td>2 bags needed</td>
                            <td>2</td>
                            <td>Medium</td>
                            <td>2024-12-16</td>
                            <td>Goods Hospital</td>
                            <td>129</td>
                        </tr>
                    </tbody>
                </table>
                <Link to="/content/requests/sendtohospitals">
                    <button className="btn btn-success w-100 mb-3">
                        Send To Hospitals
                    </button>
                </Link>
            </div>
        </div>
    );
}

