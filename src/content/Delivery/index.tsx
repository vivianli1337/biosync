import './index.css';

export default function DeliveryStatus() {
    return (
        <div className="container mt-4">
            <h2>Delivery Status</h2>

            {/* Map Placeholder */}
            <div className="row">
                <div className="col-12">
                    <div
                        className="map-placeholder d-flex align-items-center justify-content-center"
                    >
                    </div>
                </div>
            </div>

            {/* Delivery Table */}
            <div className="row mt-4">
                <div className="col-12">
                    <table className="table table-striped table-bordered text-center">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Driver's ID</th>
                                <th>Pick Up Location</th>
                                <th>Material/Product</th>
                                <th>Date</th>
                                <th>Estimated Arrival Time</th>
                            </tr>
                        </thead>
                        <tr><td className="h-full-name text-nowrap">
                        <span className="h-first-name">Tony</span>{" "}
                        <span className="h-last-name">Stark</span></td>
                        <td className="h-drivers-id">001234561S</td>
                        <td className="h-pickup-loc">7 Fruit St Boston, MA 02120</td>
                        <td className="h-material">Blood Type O</td>
                        <td className="h-date">2020-10-01</td>
                        <td className="h-eta">10:21:32</td> </tr>
                        <tr><td className="h-full-name text-nowrap">
                        <span className="h-first-name">Tony</span>{" "}
                        <span className="h-last-name">Stark</span></td>
                        <td className="h-drivers-id">001234561S</td>
                        <td className="h-pickup-loc">7 Fruit St Boston, MA 02120</td>
                        <td className="h-material">Blood Type O</td>
                        <td className="h-date">2020-10-01</td>
                        <td className="h-eta">10:21:32</td> </tr>
                        <tr><td className="h-full-name text-nowrap">
                        <span className="h-first-name">Tony</span>{" "}
                        <span className="h-last-name">Stark</span></td>
                        <td className="h-drivers-id">001234561S</td>
                        <td className="h-pickup-loc">7 Fruit St Boston, MA 02120</td>
                        <td className="h-material">Blood Type O</td>
                        <td className="h-date">2020-10-01</td>
                        <td className="h-eta">10:21:32</td> </tr>
                        <tr><td className="h-full-name text-nowrap">
                        <span className="h-first-name">Tony</span>{" "}
                        <span className="h-last-name">Stark</span></td>
                        <td className="h-drivers-id">001234561S</td>
                        <td className="h-pickup-loc">7 Fruit St Boston, MA 02120</td>
                        <td className="h-material">Blood Type O</td>
                        <td className="h-date">2020-10-01</td>
                        <td className="h-eta">10:21:32</td> </tr>
                        <tr><td className="h-full-name text-nowrap">
                        <span className="h-first-name">Tony</span>{" "}
                        <span className="h-last-name">Stark</span></td>
                        <td className="h-drivers-id">001234561S</td>
                        <td className="h-pickup-loc">7 Fruit St Boston, MA 02120</td>
                        <td className="h-material">Blood Type O</td>
                        <td className="h-date">2020-10-01</td>
                        <td className="h-eta">10:21:32</td> </tr>
                    </table>
                </div>
            </div>
        </div>
    );
};

