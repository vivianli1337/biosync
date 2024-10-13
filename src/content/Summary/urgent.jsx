import { Link } from 'react-router-dom'; // Make sure to import Link
import './index.css';

export default function UrgentMessage() {
    return (
        <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
            <span>ALERT: Hospital X is in URGENT need of 5 Type O Blood bags</span>
            <Link to="/content/Inventories/sendinventory">
                <button className="btn btn-success btn-assist">assist</button>
            </Link>
        </div>
    );
}