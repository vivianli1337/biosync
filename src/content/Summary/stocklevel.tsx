import React from 'react';
import './index.css'; 

export default function StockLevel() {
    return (
        <div className="row">
            {/* Low in Section */}
            <div className="col-lg-6 mb-4">
                <div className="card p-4 shadow">
                    <h5 className="card-title text-center">Low in -</h5>
                    {/* Add items for low stock here */}
                </div>
            </div>

            {/* Current Stock Section */}
            <div className="col-lg-6 mb-4">
                <div className="card p-4 shadow">
                    <h5 className="card-title text-center">Current Stock</h5>
                    <div className="d-flex flex-wrap justify-content-center">
                        <button className="btn btn-outline-info m-2">Blood</button>
                        <button className="btn btn-outline-info m-2">Tissues</button>
                        <button className="btn btn-outline-info m-2">Vaccines</button>
                        <button className="btn btn-outline-info m-2">Corneas</button>
                        <button className="btn btn-outline-info m-2">Others</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
