import './index.css';

export default function UrgentMessage() {
    return (
        <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
            <span>ALERT: Hospital X is in URGENT need of 5 Type O Blood bags</span>
            <button className="btn btn-success btn-assist">assist</button>
        </div>
    );
}