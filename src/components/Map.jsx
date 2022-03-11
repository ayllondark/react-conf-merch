import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap
const Map = ({ data }) => {

    const mapStyles = {
        width: '100%',
        height: '50vh',
    }

    const defaultCenter = {
        lat: parseFloat(data.lat), lng: parseFloat(data.lng)
    }

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
        <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={9}
        center={defaultCenter}
        >
        <Marker position={defaultCenter} />
        </GoogleMap>
    </LoadScript>
  );
}

export default Map