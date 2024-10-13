import React, { useState } from 'react';
import './index.css';

export default function SendToHospitalForm() {
    const [hospital, setHospital] = useState('');
    const [material, setMaterial] = useState('');
    const [quantity, setQuantity] = useState('');
    const maxStock = 100;  // Example max stock value
    const stockLeft = maxStock - Number(quantity);

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="form-box bg-light p-5 round shadow-lg">
                <form>
                    <h2 className="text-center mb-4">Send to Hospitals</h2>

                    <div className="mb-3">
                        <label className="form-label">Hospital:</label>
                        <select
                            className="form-select"
                            value={hospital}
                            onChange={(e) => setHospital(e.target.value)}
                        >
                            <option value="" disabled>Select Hospital</option>
                            <option value="Hospital X">Hospital X</option>
                            <option value="Hospital Y">Hospital Y</option>
                        </select>
                        <p className="mt-1 text-muted">Hospital X needs 5 Type O Blood Bags</p>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Material:</label>
                        <select
                            className="form-select"
                            value={material}
                            onChange={(e) => setMaterial(e.target.value)}
                        >
                            <option value="" disabled>Select Material</option>
                            <option value="Type O Blood">Type O Blood</option>
                            <option value="Type A Blood">Type A Blood</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Quantity:</label>
                        <input
                            type="number"
                            className="form-control"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            placeholder="Enter quantity"
                            max={maxStock}
                        />
                        <small className="text-muted">Max: {maxStock}</small>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Left in stock:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={stockLeft >= 0 ? stockLeft : 0}
                            disabled
                        />
                    </div>

                    <div className="d-flex justify-content-around">
                        <button type="button" className="btn btn-success">Send</button>
                        <button type="button" className="btn btn-secondary">Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
