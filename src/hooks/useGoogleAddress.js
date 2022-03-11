import { useState, useEffect } from "react";
import axios from 'axios';
// Axios = Nos permite trabajar ucho mejor con solicitudes y peticiones de APIS o recursosd en la nube

const getCoordinates = async (api) => {
    const response = await axios(api);
    return response
  }

const useGoogleAddress = address => {
    const [map, setMap] = useState({});
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    useEffect(async () => {
        const response = await getCoordinates(API);
        setMap(response.data.results[0].geometry.location);
    }, []);
    
    //return map;
    return JSON.parse(JSON.stringify(map));
};

export default useGoogleAddress;