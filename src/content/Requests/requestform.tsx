import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

export default function Request() {
    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Request</h2>
                <Link to="/content/requests/incomingrequest" className="d-flex justify-content-end btn-info">
                    See Incoming Requests
                </Link>
            </div>

            <form className="d-flex flex-column align-items-center w-100">
                {/* Material / Product Dropdown */}
                <div className="mb-3 w-100">
                    <label className="form-label">Biological Material / Product</label>
                    <select name="material" className="form-select">
                        <option value="">Select</option>
                        <option value="blood">Blood</option>
                        <option value="tissues">Tissues</option>
                        <option value="organs">Organs</option>
                    </select>
                </div>

                {/* Details Input */}
                <div className="mb-3 w-100">
                    <input
                        type="text"
                        className="form-control"
                        name="details"
                        placeholder="Enter details"
                    />
                </div>

                {/* Count Input */}
                <div className="mb-3 w-100">
                    <input
                        type="number"
                        className="form-control"
                        name="count"
                        placeholder="Insert integer"
                    />
                </div>

                {/* Priority Level Dropdown */}
                <div className="mb-3 w-100">
                    <label className="form-label">Priority Level</label>
                    <select name="priority" className="form-select">
                        <option value="">Select</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>


                <div className="mb-3 w-100">
                    <input
                        type="date"
                        className="form-control"
                        name="needBy"
                    />
                </div>

                <h4 className="mb-3 w-100">Send to:</h4>

                <div className="mb-3 w-100">
                    <input
                        type="text"
                        className="form-control"
                        name="hospital"
                        placeholder="Enter hospital name"
                    />
                </div>

                <div className="mb-3 w-100">
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        placeholder="Enter address"
                    />
                </div>

                <div className="mb-3 w-100">
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        placeholder="Enter city"
                    />
                </div>

                <div className="row w-100">
                    <div className="col mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="state"
                            placeholder="State"
                        />
                    </div>
                    <div className="col mb-3">
                        <input
                            type="text"
                            className="form-control"
                            name="zipCode"
                            placeholder="Zip Code"
                        />
                    </div>
                </div>

                <div className="w-100">
                    <button type="submit" className="btn btn-primary w-100 mb-3">Send</button>
                </div>

                <div className="w-100 text-end">
                    <Link to="/redcross">
                        <button type="submit" className="btn-secondary w-100 mb-3">
                            Send to Blood Bank / Tissue Bank / Red Cross
                        </button>
                    </Link>
                </div>
            </form>
        </div>
    );
}
