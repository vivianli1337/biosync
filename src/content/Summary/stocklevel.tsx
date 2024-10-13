import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default function StockLevel() {
    return (
        <div className="row justify-content-center">

            <div className="col-lg-6 mb-4">
                <div className="card p-4 shadow">
                    <h5 className="card-title text-center">Low in Inventory</h5>
                    <div className="d-flex flex-column align-items-center">
                        <Link to="/content/Inventories" className="align-items-center">
                            <button className="btn btn-outline-info m-2">Blood Type A: 2</button>
                            <button className="btn btn-outline-info m-2">Stem Cell: 10</button>
                            <button className="btn btn-outline-info m-2">Cornea Tissue Sample: 5</button>
                            <button className="btn btn-outline-info m-2">HIV Vaccines: 3</button>
                        </Link>
                    </div>
                </div>
            </div>


            <div className="col-lg-6 mb-4">
                <div className="card p-4 shadow">
                    <h5 className="card-title text-center">Current Stock</h5>
                    <div className="d-flex flex-wrap justify-content-center">
                        <Link to="/content/Inventories">
                            <button className="btn btn-outline-info m-2">Blood</button>
                            <button className="btn btn-outline-info m-2">Tissues</button>
                            <button className="btn btn-outline-info m-2">Vaccines</button>
                            <button className="btn btn-outline-info m-2">Corneas</button>
                            <button className="btn btn-outline-info m-2">Others</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

