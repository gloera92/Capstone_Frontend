import React from 'react';
import{GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";



const libraries = ["places"];
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
        googleMapsApiKey: 'AIzaSyCAFSMzPFaMorkiyNVryeFjnPMdfa9gwGQ',
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);

    const onMapClick = React.useCallback((event) => {
        setMarkers((current) => [
            ...current,
            {
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    if (loadError) return "Error Loading Maps";
    if (!isLoaded) return "Loading Maps";

    

    return (
        <div>

            <h1>Dogs {" "}
                <span role="img" aria-label="dog">
                    🐕‍🦺
                </span> 
            </h1>  
            <GoogleMap mapContainerStyle=
            {mapContainerStyle} 
            zoom={13} 
            center={center}
            onClick={onMapClick}
            >
                {markers.map(marker => <Marker 
                key={marker.time.toISOString()} 
                position={{lat:marker.lat, lng:marker.lng}}
                icon={{
                    url: './dog.jpg',
                    scaledSize: new window.google.maps.Size(30,30),
                    origin: new window.google.maps.Point(0,0),
                    anchor: new window.google.maps.Point(15,15),
                }}
                
                />)}      
            </GoogleMap>
        </div>
    );
}

