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
                        <td>Type O Blood</td>
                        <td>123456789</td>
                        <td>125</td>
                        <td>16</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Type O Blood</td>
                        <td>123456789</td>
                        <td>125</td>
                        <td>16</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>Type O Blood</td>
                        <td>123456789</td>
                        <td>125</td>
                        <td>16</td>
                        <td>Oct 15, 2024</td>
                        <td>20</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
