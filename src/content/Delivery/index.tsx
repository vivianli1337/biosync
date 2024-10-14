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
            id: '6778899033',
            location: '7 Fruit St Boston, MA 02120',
            material: 'Blood Type A',
            date: '2021-09-21',
            eta: '10:21:32',
        },
        {
            name: 'Emily Stark',
            id: '001234561S',
            location: '100 Summer St Boston, MA 02120',
            material: 'Blood Type O',
            date: '2020-10-01',
            eta: '4:29:58',
        },
        {
            name: 'Harley Quen',
            id: '677980932',
            location: '376 Newbury St Boston, MA 02120',
            material: 'kidney',
            date: '2024-02-38',
            eta: '28:19:32',
        },
    ];

    useEffect(() => {
        const loadGoogleMaps = () => {
            if (window.google) return Promise.resolve();
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY_HERE&libraries=places`;
                script.async = true;
                script.onload = resolve;
                document.head.appendChild(script);
            });
        };

        const initializeMap = () => {
            if (mapRef.current && window.google) {
                const initialMap = new window.google.maps.Map(mapRef.current, {
                    center: { lat: 42.3601, lng: -71.0589 }, 
                    zoom: 12,
                });
                setMap(initialMap);

             
                if (inputRef.current) {
                    const auto = new window.google.maps.places.Autocomplete(inputRef.current);
                    auto.addListener('place_changed', () => {
                        const place = auto.getPlace();
                        if (place.geometry && place.geometry.location) {
                            initialMap.setCenter(place.geometry.location);

                          
                            const newMarker = new google.maps.Marker({
                                position: place.geometry.location,
                                map: initialMap,
                                title: place.formatted_address,
                            });

                        
                            setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
                        } else {
                            alert("No details available for this location.");
                        }
                    });
                    setAutocomplete(auto);

             
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
                     
                        const place = results[0];
                        autocomplete.set('place', place); 

                        // Update map with new location
                        map?.setCenter(place.geometry!.location!); 
                        const newMarker = new google.maps.Marker({
                            position: place.geometry!.location!, 
                            map: map,
                            title: location,
                        });

                        
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

            <div className="row">
                <div className="col-12">
                    <div
                        ref={mapRef}
                        style={{ height: '400px', width: '100%' }}
                        className="map-placeholder d-flex align-items-center justify-content-center"
                    ></div>
                </div>
            </div>

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
