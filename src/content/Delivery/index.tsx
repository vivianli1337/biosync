import React, { useEffect, useRef, useState } from 'react';
import './index.css';

interface DeliveryRow {
    name: string;
    id: string;
    location: string;
    material: string;
    date: string;
    eta: string;
}

const DeliveryStatus: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [map, setMap] = useState<google.maps.Map | null>(null);
    const [markers, setMarkers] = useState<google.maps.Marker[]>([]);
    const [autocomplete, setAutocomplete] = useState<google.maps.places.Autocomplete | null>(null);
    const [placesService, setPlacesService] = useState<google.maps.places.PlacesService | null>(null);

    const deliveries: DeliveryRow[] = [
        {
            name: 'Tony Stark',
            id: '001234561S',
            location: '7 Fruit St Boston, MA 02120',
            material: 'Blood Type O',
            date: '2020-10-01',
            eta: '10:21:32',
        },
        {
            name: 'Emily Stark',
            id: '001234561S',
            location: '100 Summer St Boston, MA 02120',
            material: 'Blood Type O',
            date: '2020-10-01',
            eta: '10:21:32',
        },
        // Add more delivery objects here as needed
    ];

    useEffect(() => {
        const loadGoogleMaps = () => {
            if (window.google) return Promise.resolve();
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCYCRtPYUne3TxZ1_cTsg9cDBDZiFr4Ly4&libraries=places`;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });
        };

        const initializeMap = () => {
            if (mapRef.current && window.google) {
                const initialMap = new window.google.maps.Map(mapRef.current, {
                    center: { lat: 42.3601, lng: -71.0589 }, // Example: Boston, MA
                    zoom: 12,
                });
                setMap(initialMap);

                // Initialize autocomplete for the address input
                if (inputRef.current) {
                    const auto = new window.google.maps.places.Autocomplete(inputRef.current);
                    auto.addListener('place_changed', () => {
                        const place = auto.getPlace();
                        if (place.geometry && place.geometry.location) {
                            initialMap.setCenter(place.geometry.location);

                            // Place a new marker at the selected location
                            const newMarker = new google.maps.Marker({
                                position: place.geometry.location,
                                map: initialMap,
                                title: place.formatted_address,
                            });

                            // Add the new marker to the markers array
                            setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
                        } else {
                            alert("No details available for this location.");
                        }
                    });
                    setAutocomplete(auto);

                    // Initialize PlacesService for programmatic place lookups
                    const service = new window.google.maps.places.PlacesService(initialMap);
                    setPlacesService(service);
                }
            }
        };

        loadGoogleMaps().then(initializeMap);
    }, []);

    const clearMarkers = () => {
        markers.forEach((marker) => marker.setMap(null));
        setMarkers([]);
    };

    const handlePickupLocationClick = (location: string) => {
        if (inputRef.current && autocomplete && placesService) {
            inputRef.current.value = location;

            // Use PlacesService to find the place details for the location text
            placesService.findPlaceFromQuery(
                { query: location, fields: ['name', 'geometry'] },
                (results, status) => {
                    if (
                        status === google.maps.places.PlacesServiceStatus.OK &&
                        results &&
                        results[0] &&
                        results[0].geometry &&
                        results[0].geometry.location
                    ) {
                        // Set the found place as the location for autocomplete
                        const place = results[0];
                        autocomplete.set('place', place); // Set this as the current place

                        // Update map with new location
                        map?.setCenter(place.geometry!.location!); // Non-null assertion here
                        const newMarker = new google.maps.Marker({
                            position: place.geometry!.location!, // Non-null assertion here
                            map: map,
                            title: location,
                        });

                        // Add the marker to the markers array
                        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
                    } else {
                        alert("Location not found.");
                    }
                }
            );
        }
    };

    return (
        <div className="container mt-4">
            <h2>Delivery Status</h2>
            <div className="input-group mb-3">
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="Enter your address"
                    className="form-control"
                    style={{ marginBottom: '10px' }}
                />
            </div>

            <button onClick={clearMarkers} className="btn btn-danger mb-3">
                Clear Markers
            </button>

            {/* Map Placeholder */}
            <div className="row">
                <div className="col-12">
                    <div
                        ref={mapRef}
                        style={{ height: '400px', width: '100%' }}
                        className="map-placeholder d-flex align-items-center justify-content-center"
                    ></div>
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
                        <tbody>
                            {deliveries.map((delivery, index) => (
                                <tr key={index}>
                                    <td className="h-full-name">{delivery.name}</td>
                                    <td className="h-drivers-id">{delivery.id}</td>
                                    <td
                                        className="h-pickup-loc"
                                        style={{ cursor: 'pointer', color: 'blue' }}
                                        onClick={() => handlePickupLocationClick(delivery.location)}
                                    >
                                        {delivery.location}
                                    </td>
                                    <td className="h-material">{delivery.material}</td>
                                    <td className="h-date">{delivery.date}</td>
                                    <td className="h-eta">{delivery.eta}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DeliveryStatus;
