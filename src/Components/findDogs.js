import React from 'react';
import FilePlayer from 'react-player/file';
import{GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import {formatRelative} from "date-fns";


const libraries = ["places"]
const mapContainerStyle= {
    width: "100vw",
    height: "100vh",
};

const center = {
    lat: 36.06894029732138,
    lng: -93.72992620930327,
};


export default function DogMap() {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: '',
        libraries,
    });

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";

    return (
        <div>
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap>
        </div>
    );
}

