import { Link } from "react-router-dom";
import './index.css';

export default function Inventorylist() {
    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h1>Inventory</h1>
                {/* Button to send to hospitals */}
                <Link to="/content/Inventories/sendinventory">
                    <button className="btn btn-success">Send To Hospitals</button>
                </Link>
            </div>

            <table className="table table-bordered table-hover">
                <thead className="table-light">
                    <tr>
                        <th>Material</th>
                        <th>ID</th>
                        <th>Stock</th>
                        <th>Nearing Expiration</th>
                        <th>Date of Expiration</th>
                        <th>Min Stock</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Type O Blood</td>
                        <td>123456789</td>
                        <td>125</td>
                        <td>16</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Heart Tissue</td>
                        <td>12357789</td>
                        <td>32</td>
                        <td>20</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Blood Type A</td>
                        <td>154564549</td>
                        <td>2</td>
                        <td>0</td>
                        <td>Dec. 15, 2025</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Stem Cell</td>
                        <td>18678939</td>
                        <td>10</td>
                        <td>3</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Cornea Tissue Sample</td>
                        <td>98347395</td>
                        <td>5</td>
                        <td>2</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>HIV Vaccine</td>
                        <td>9878239</td>
                        <td>3</td>
                        <td>0</td>
                        <td>Sep. 11, 2026</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}