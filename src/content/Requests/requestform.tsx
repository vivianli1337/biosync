import React, { useState } from 'react';

export default function Request() {
    const [form, setForm] = useState({
        material: '',
        details: '',
        count: 0,
        priority: '',
        needBy: '',
        hospital: '',
        address: '',
        city: '',
        state: '',
        zipCode: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', form);
        // Add your form submission logic here
    };

    const handleViewRequests = () => {
        console.log('Viewing Incoming Requests');
        // Add your navigation or logic for viewing incoming requests here
    };

    return (
        <div className="container mt-4">
            {/* Heading with "See Incoming Request" Button */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Request:</h2>
                <button className="btn btn-sm btn-info" onClick={handleViewRequests}>
                    See Incoming Request
                </button>
            </div>

            <form onSubmit={handleSubmit}>
                {/* Material / Product Dropdown */}
                <div className="mb-3">
                    <label className="form-label">Biological Material / Product</label>
                    <select name="material" className="form-select" value={form.material} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="blood">Blood</option>
                        <option value="tissues">Tissues</option>
                        <option value="organs">Organs</option>
                    </select>
                </div>

                {/* Details Input */}
                <div className="mb-3">
                    <label className="form-label">Details</label>
                    <input
                        type="text"
                        className="form-control"
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        placeholder="Enter details"
                    />
                </div>

                {/* Count Input */}
                <div className="mb-3">
                    <label className="form-label">Count</label>
                    <input
                        type="number"
                        className="form-control"
                        name="count"
                        value={form.count}
                        onChange={handleChange}
                        placeholder="Insert integer"
                    />
                </div>

                {/* Priority Level Dropdown */}
                <div className="mb-3">
                    <label className="form-label">Priority Level</label>
                    <select name="priority" className="form-select" value={form.priority} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                {/* Need By Date Input */}
                <div className="mb-3">
                    <label className="form-label">Need by</label>
                    <input
                        type="date"
                        className="form-control"
                        name="needBy"
                        value={form.needBy}
                        onChange={handleChange}
                    />
                </div>

                {/* Send to Section */}
                <h4>Send to:</h4>

                <div className="mb-3">
                    <label className="form-label">Hospital</label>
                    <input
                        type="text"
                        className="form-control"
                        name="hospital"
                        value={form.hospital}
                        onChange={handleChange}
                        placeholder="Enter hospital name"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Enter address"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">City</label>
                    <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                    />
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <label className="form-label">State</label>
                        <input
                            type="text"
                            className="form-control"
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            placeholder="State"
                        />
                    </div>
                    <div className="col">
                        <label className="form-label">Zip Code</label>
                        <input
                            type="text"
                            className="form-control"
                            name="zipCode"
                            value={form.zipCode}
                            onChange={handleChange}
                            placeholder="Zip Code"
                        />
                    </div>
                </div>

                {/* Submit Buttons */}
                <button type="submit" className="btn btn-primary mb-3">Send</button>
                <button type="submit" className="btn btn-secondary">Send to Blood Bank / Tissue Bank / Red Cross</button>
            </form>
        </div>
    );
}

